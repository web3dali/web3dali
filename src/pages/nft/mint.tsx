import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ConnectBtn from '../../ConnectBtn'
import MintInfo from './mint-info'
import MintBtn from './mint-btn'
import './index.css'
import { useContractReads } from 'wagmi'
import { BigNumber } from 'ethers'

function mint(props: { address: any; contract: any; claim: any }) {
  const { t } = useTranslation()
  const { address, contract, claim } = props
  const { data, isError } = useContractReads({
    contracts: [
      {
        ...contract,
        functionName: 'totalSupply'
      },
      {
        ...contract,
        functionName: 'balanceOf',
        args: [address]
      },
      {
        ...contract,
        functionName: 'numberMinted',
        args: [address]
      }
    ],
    onSuccess: (data) => {
      console.log('success')
      const maxMintNum = parseInt(claim?.amount as string) || 0
      const numMinted = data?.[2]
        ? ((data[2] as unknown) as BigNumber).toNumber()
        : 0
      const freeMintNum = maxMintNum - numMinted
      setNumToMint(freeMintNum)
    },
    onError(error) {

      console.log('error')
      const maxMintNum = parseInt(claim?.amount as string) || 0
      const numMinted = 0
      const freeMintNum = maxMintNum - numMinted
      setNumToMint(freeMintNum)
    }
  })
  console.debug('useContractReads', { data, isError })
  const maxSupply = 3706
  const maxMintNum = parseInt(claim?.amount as string) || 0
  let totalSupply = data?.[0]
    ? ((data[0] as unknown) as BigNumber).toNumber()
    : 0
  let balance = data?.[1] ? ((data[1] as unknown) as BigNumber).toNumber() : 0
  let numMinted = data?.[2] ? ((data[2] as unknown) as BigNumber).toNumber() : 0
  let availableNum = maxSupply - totalSupply
  let freeMintNum = maxMintNum - numMinted
  const [numToMint, setNumToMint] = useState(freeMintNum)
  console.debug('nft info', {
    totalSupply,
    availableNum,
    balance,
    numMinted,
    freeMintNum,
    numToMint
  })
  console.log(numMinted)
  console.log(maxMintNum)
  const proof = claim?.proof || []
  let allowedToMint = freeMintNum > 0 && numToMint > 0

  function increaseNumToMint() {
    if (numToMint >= freeMintNum) {
      return
    }
    setNumToMint(numToMint + 1)
  }

  function decreaseNumToMint() {
    if (numToMint <= 1) {
      return
    }
    setNumToMint(numToMint - 1)
  }

  // 成功 mint 后刷新当前
  const onSuccessMint = () => {
    freeMintNum = freeMintNum - numToMint
    balance = balance + numToMint
    console.debug(
      'onSuccess outside, reset freeMintNum, balance and numToMint',
      { freeMintNum, balance }
    )
    setNumToMint(freeMintNum)
  }

  return (
    <>
      <MintInfo
        availableNum={availableNum}
        freeMintNum={freeMintNum}
        balance={balance}
      />
      <div className="flex flex-center pb-[16px]">
        <div className="nft-mint-num flex items-center">
          <div
            className={`input-number-handler text-[24px] mr-[10px]${
              numToMint <= 1 ? ' disabled' : ''
            }`}
            onClick={decreaseNumToMint}
          >
            -
          </div>
          <div className="input-number-text">{numToMint}</div>
          <div
            className={`input-number-handler text-[24px] ml-[10px]${
              numToMint >= freeMintNum ? ' disabled' : ''
            }`}
            onClick={increaseNumToMint}
          >
            +
          </div>
        </div>
        <div className="nft-mint-btn flex ml-[24px]">
          {!allowedToMint && (
            <button
              className="btn btn-accent h-[45px] mr-[24px]"
              style={{ backgroundColor: 'gray' }}
            >
              {t('nft.freeMint')}
            </button>
          )}
          {allowedToMint && (
            <MintBtn
              index={claim?.index}
              maxMintNum={maxMintNum}
              numToMint={numToMint}
              proof={proof}
              contract={contract}
              onSuccess={onSuccessMint}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default mint
