import { useState } from 'react'
import { useTranslation, Trans } from 'react-i18next'
import './index.css'
import i18n from 'i18next'

function NFT() {
  const contractAddress = '0x11d06a9fcfbb45037b085a5586799d35e5af7f00';
  const shortContractAddress= contractAddress.slice(0, 5) + '...' + contractAddress.slice(contractAddress.length - 5, contractAddress.length - 1);
  const maxSupply = 3706;
  const totalSupply = 500;
  const availableNum = maxSupply - totalSupply;
  const balance = 0;
  const numMinted = 0;
  const maxMintNum = 2;
  const freeMintNum = maxMintNum - numMinted;
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
        <div className="nft-mint-main flex-[1] pl-[5vw] pt-[84px]">
          <div className="nft-mint-title">WAMO NFT MINT</div>
          <div className="nft-mint-contract flex flex-row">
            <div className="nft-contract-supply mr-[54px]">Total supply: {maxSupply}</div>
            <div className="nft-contract-address">Contract address: <a href={`https://etherscan.io/address/${contractAddress}`} target="blank" title={contractAddress}>{shortContractAddress}</a></div>
          </div>
          <div className="nft-mint-info flex flex-row w-[70%] flex-between mt-[40px]">
            <div>
              <div className="mb-[30px]">Price</div>
              <div><strong className="font-[36px]">0</strong><em className="font-[black] ml-[15px]">ETH</em></div>
            </div>
            <div>
              <div className="mb-[30px]">Available</div>
              <div><strong className="font-[36px]">{availableNum}</strong></div>
            </div>
            <div>
              <div className="mb-[30px]">Free Mint</div>
              <div><strong className="font-[36px]">{freeMintNum}</strong></div>
            </div>
            <div>
              <div className="mb-[30px]">Asset</div>
              <div><strong className="font-[36px]">{balance}</strong></div>
            </div>
          </div>
          <div className="nft-mint-num">
          </div>
        </div>
        <div className="nft-mint-rule bg-[#050505] color-[#FFF] h-[306px] pl-[112px]">
          <div className="nft-mint-rule-title">Rule: </div>
          <div>Total supply: 3,706 well-designed WAMO NFTS</div>
          <div>ELIGIBILITY CRITERIA</div>
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
