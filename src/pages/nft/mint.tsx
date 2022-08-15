import { useState } from 'react'
import { useTranslation, Trans } from 'react-i18next'
import i18n from 'i18next'
import ConnectBtn from '../../ConnectBtn';
import InputNumber from 'rc-input-number';
import './index.css'
import 'rc-input-number/assets/index.css'

import { useContractReads, useAccount, usePrepareContractWrite, useContractWrite, useWaitForTransaction } from 'wagmi'
import { BigNumber } from 'ethers';
import { parseEther, parseUnits } from 'ethers/lib/utils';

const etherscanHOST = 'https://rinkeby.etherscan.io';

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
  const { config, error: prepareError, isError: isPrepareError } = usePrepareContractWrite({
     ...contract,
     contractInterface: [{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"thisTimeMint","type":"uint256"},{"internalType":"uint256","name":"maxMint","type":"uint256"},{"internalType":"bytes32[]","name":"merkleProof","type":"bytes32[]"}],"name":"preSalesMint","outputs":[],"stateMutability":"payable","type":"function"}],
    functionName: 'preSalesMint',
    // args: [2, 1, 4, [
    //   "0x077f5c2952cefcf8422894d9e753e4100922b06a18690ecf81cb7c29cd3bc3f7",
    //   "0x583953903f803b7901f33abb9b923a1164f61e16646947627447e1bc45762499"
    // ] ],
    args: [claim?.index, numToMint, maxMintNum, proof],
    overrides: {
      value: parseUnits('1', 0),
      // gasLimit: parseEther('0.01'),
    }
  })

  console.debug('usePrepareContractWrite', { config, prepareError });
  
  const { data: mintResult, write: freeMint, isError: isWriteError, error: writeError } = useContractWrite(config)

  console.debug('useContractWrite', { freeMint });

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: mintResult?.hash,
  });
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
      <div className="nft-mint-num mt-[16px]">
        <InputNumber className="nft-mint-num-input" min={0} max={freeMintNum} value={numToMint} 
          onChange={(value) => { setNumToMint(value) }}
          upHandler={<div>+</div>}
          downHandler={<div>-</div>} />
      </div>
      <div className="nft-mint-btn flex mt-[16px]">
        <button disabled={!freeMint || numToMint <= 0 || isLoading} className="btn btn-accent px-[1.5rem] mt-[-2px] mr-[24px]" onClick={() => { console.debug('freeMint Clicked'); freeMint?.() }}>{t('nft.freeMint')}</button>
        <ConnectBtn label={t('header.connect')} />
      </div>
      {isSuccess && (
        <div>
          Successfully minted your NFT!
          <div>
            <a href={`${etherscanHOST}/tx/${mintResult?.hash}`}>Etherscan</a>
          </div>
        </div>
      )}
      {(isPrepareError || isWriteError) && (
        <div>Error: {(prepareError || writeError)?.message}</div>
      )}
    </>
  )
}

export default mint
