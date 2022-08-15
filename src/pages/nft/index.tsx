import { useState } from 'react'
import { useTranslation, Trans } from 'react-i18next'
import i18n from 'i18next'
import ConnectBtn from '../../ConnectBtn';
import InputNumber from 'rc-input-number';
import Mint from './mint';
import PreMint from './pre-mint';
import './index.css'
import 'rc-input-number/assets/index.css'
import abi from './abi.json';
import merkle from './merkle.json'

import { useContractReads, useAccount, usePrepareContractWrite, useContractWrite, useWaitForTransaction } from 'wagmi'
import { BigNumber } from 'ethers';
import { parseEther, parseUnits } from 'ethers/lib/utils';

const NFT_CLAIMS:{ [key: string]: { index: number, amount: string, proof: string[]} } = merkle.claims;

const etherscanHOST = 'https://rinkeby.etherscan.io';
// const etherscanHOST = 'https://etherscan.io';

const CONTRACT = {
  addressOrName: '0x11d06a9fcfbb45037b085a5586799d35e5af7f00',
  contractInterface: abi,
}

function NFT() {
  const contractAddress = CONTRACT.addressOrName;
  const shortContractAddress= contractAddress.slice(0, 5) + '...' + contractAddress.slice(contractAddress.length - 5, contractAddress.length - 1);
  const maxSupply = 3706;
  const { t } = useTranslation();
  const { connector: activeConnector, isConnected, address } = useAccount();
  console.debug(`isConnected: ${isConnected} ${address}`);

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
            <div className="nft-contract-address">Contract address: <a href={`${etherscanHOST}/address/${contractAddress}`} target="blank" title={contractAddress}>{shortContractAddress}</a></div>
          </div>
          { isConnected && (
            <div>
              <Mint address={address} contract={CONTRACT} claim={NFT_CLAIMS[address as string] || {}} />
            </div>) 
          }
          { !isConnected && (<PreMint contract={CONTRACT} />) }
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
