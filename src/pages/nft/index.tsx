import { useState } from 'react'
import { useTranslation, Trans } from 'react-i18next'
import i18n from 'i18next'
import ConnectBtn from '../../ConnectBtn';
import InputNumber from 'rc-input-number';
import './index.css'
import 'rc-input-number/assets/index.css'
import abi from './abi.json';
import merkle from './merkle.json'

import { useContractReads, useAccount, usePrepareContractWrite, useContractWrite } from 'wagmi'
import { BigNumber } from 'ethers';
import { parseEther, formatBytes32String } from 'ethers/lib/utils';

const NFT_CLAIMS:{ [key: string]: { index: number, amount: string, proof: string[]} } = merkle.claims;

const CONTRACT = {
  addressOrName: '0x11d06a9fcfbb45037b085a5586799d35e5af7f00',
  contractInterface: abi,
}

function NFT() {
  const contractAddress = CONTRACT.addressOrName;
  const shortContractAddress= contractAddress.slice(0, 5) + '...' + contractAddress.slice(contractAddress.length - 5, contractAddress.length - 1);

  const { t } = useTranslation();
  const { connector: activeConnector, isConnected, address } = useAccount();
  console.debug(`isConnected: ${isConnected} ${address}`);
  const { data, isError, isLoading } = useContractReads({
    contracts: [
      {
        ...CONTRACT,
        functionName: 'totalSupply',
      },
      {
        ...CONTRACT,
        functionName: 'balanceOf',
        args: [address]
      },
      {
        ...CONTRACT,
        functionName: 'numberMinted',
        args: [address]
      },
    ],
  });
  console.debug('useContractReads', { data, isError, isLoading });
  const myClaim = address ? NFT_CLAIMS[address as string] : null;
  const maxSupply = 3706;
  const totalSupply = data?.[0] ? (data[0] as unknown as BigNumber).toNumber() : 0;
  const availableNum = maxSupply - totalSupply;
  const balance = data?.[1] ? (data[1] as unknown as BigNumber).toNumber() : 0;
  const maxMintNum = parseInt(myClaim?.amount as string) || 0;
  const numMinted = data?.[2] ? (data[2] as unknown as BigNumber).toNumber() : 0;
  const freeMintNum = maxMintNum - numMinted;
  const [numToMint, setNumToMint] = useState(freeMintNum);
  console.debug('nft info', { totalSupply, availableNum, balance, numMinted, freeMintNum, numToMint });

  const { config, error } = usePrepareContractWrite({
    ...CONTRACT,
    functionName: 'preSalesMint',
    args: [2, 1, 4, [
      "0x077f5c2952cefcf8422894d9e753e4100922b06a18690ecf81cb7c29cd3bc3f7",
      "0x583953903f803b7901f33abb9b923a1164f61e16646947627447e1bc45762499"
    ] ],
    overrides: {
      gasLimit: parseEther('0.01'),
    }
  })

  console.debug('usePrepareContractWrite', { config, error });
  
  const { write: freeMint } = useContractWrite(config)

  console.debug('useContractWrite', { freeMint });

  return (
    <div className="nft bg-[#0052FF] pt-[62px] flex flex-row">
      <div className="nft-intro w-[50%]">
        <div className="nft-img-row flex flex-row">
          <img className="nft-img" src="/nft/01.jpg" />
          <img className="nft-img" src="/nft/02.jpg" />
        </div>
        <div className="nft-img-row flex flex-row flex-nowrap py-[22px]">
          <img className="nft-img" src="/nft/06.jpg" />
          <img className="nft-img" src="/nft/04.jpg" />
          <img className="nft-img" src="/nft/05.jpg" />
        </div>
        <div className="nft-img-row flex flex-row">
          <img className="nft-img" src="/nft/07.jpg" />
          <img className="nft-img" src="/nft/03.jpg" />
        </div>
      </div>
      <div className="nft-mint w-[50%] flex flex-col">
        <div className="nft-mint-main flex-[1] pl-[4vw] pt-[3vw]">
          <div className="nft-mint-title">WAMO NFT MINT</div>
          <div className="nft-mint-contract flex flex-row">
            <div className="nft-contract-supply mr-[54px]">Total supply: {maxSupply}</div>
            <div className="nft-contract-address">Contract address: <a href={`https://etherscan.io/address/${contractAddress}`} target="blank" title={contractAddress}>{shortContractAddress}</a></div>
          </div>
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
            <div className="btn btn-accent px-[1.5rem] mt-[-2px] mr-[24px]" onClick={() => { console.debug('freeMint Clicked'); freeMint?.() }}>{t('nft.freeMint')}</div>
            <ConnectBtn label={t('header.connect')} />
          </div>
        </div>
        <div className="nft-mint-rule bg-[#050505] color-[#FFF] h-[306px] pl-[4vw]">
          <div className="nft-mint-rule-title">Rule: </div>
          <div>Total supply: 3,706 well-designed WAMO NFTS</div>
          <div className="mt-[16px]">ELIGIBILITY CRITERIA</div>
          <ul>
            <li>Dali Web3 Summer Fest builder</li>
            <li>Ticket holder</li>
            <li>Dali Web3 Summer Fest sponsor</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NFT
