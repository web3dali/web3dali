import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ConnectBtn from '../../ConnectBtn';
import MintBtn from './mint-btn';
import './index.css'
import { useContractReads } from 'wagmi'
import { BigNumber } from 'ethers';

function mint(props: { address: any; contract: any; claim: any; }) {
  const { t } = useTranslation();
  const { address, contract, claim } = props;
  const { data, isError } = useContractReads({
    contracts: [
      {
        ...contract,
        functionName: 'totalSupply',
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
      },
    ],
    onSuccess: (data) => {
      const maxMintNum = parseInt(claim?.amount as string) || 0;
      const numMinted = data?.[2] ? (data[2] as unknown as BigNumber).toNumber() : 0;
      const freeMintNum = maxMintNum - numMinted;
      setNumToMint(freeMintNum);
    }
  });
  console.debug('useContractReads', { data, isError });
  const maxSupply = 3706;
  const totalSupply = data?.[0] ? (data[0] as unknown as BigNumber).toNumber() : 0;
  const availableNum = maxSupply - totalSupply;
  const balance = data?.[1] ? (data[1] as unknown as BigNumber).toNumber() : 0;
  const maxMintNum = parseInt(claim?.amount as string) || 0;
  const numMinted = data?.[2] ? (data[2] as unknown as BigNumber).toNumber() : 0;
  const freeMintNum = maxMintNum - numMinted;
  const [numToMint, setNumToMint] = useState(freeMintNum);
  console.debug('nft info', { totalSupply, availableNum, balance, numMinted, freeMintNum, numToMint });

  const proof = claim?.proof || [];
  const allowedToMint = freeMintNum > 0 && numToMint > 0;
  
  function increaseNumToMint() {
    if (numToMint >= freeMintNum) {
      return;
    }
    setNumToMint(numToMint+1);
  }

  function decreaseNumToMint() {
    if (numToMint <= 1) {
      return;
    }
    setNumToMint(numToMint-1);
  }

  return (
    <>
      <div className="nft-mint-info flex flex-row w-[70%] flex-between mt-[40px]">
        <div>
          <div className="mb-[30px]">Price</div>
          <div><strong className="text-[36px] vertical-mid">0</strong><em className="font-[black] ml-[15px] vertical-mid">ETH</em></div>
        </div>
        <div>
          <div className="mb-[30px]">Available</div>
          <div><strong className="text-[36px]">{availableNum}</strong></div>
        </div>
        <div>
          <div className="mb-[30px]">Free Mint</div>
          <div><strong className="text-[36px]">{freeMintNum}</strong></div>
        </div>
        <div>
          <div className="mb-[30px]">Asset</div>
          <div><strong className="text-[36px]">{balance}</strong></div>
        </div>
      </div>
      <div className="nft-mint-num mt-[16px] flex items-center">
        <div className={`input-number-handler text-[24px] mr-[10px]${ numToMint <= 1 ? ' disabled' : ''}`} onClick={decreaseNumToMint}>-</div>
        <div className="input-number-text">{numToMint}</div>
        <div className={`input-number-handler text-[24px] ml-[10px]${ numToMint >= freeMintNum ? ' disabled' : ''}`} onClick={increaseNumToMint}>+</div>
      </div>
      <div className="nft-mint-btn flex mt-[16px]">
        { !allowedToMint && (<button className="btn btn-accent mt-[-2px] mr-[24px]" style={{ backgroundColor: 'gray'}}>{t('nft.freeMint')}</button>) }
        { allowedToMint && (<MintBtn index={claim?.index} maxMintNum={maxMintNum} numToMint={numToMint} proof={proof} contract={contract} />) }
        <ConnectBtn label={t('header.connect')} />
      </div>
      {/* {(isPrepareError || isWriteError) && (
        <div>Error: {(prepareError || writeError)?.message}</div>
      )} */}
    </>
  )
}

export default mint
