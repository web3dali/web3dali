import { useTranslation } from 'react-i18next'
import Mint from './mint';
import PreMint from './pre-mint';
import './index.css'
import merkle from './merkle.json'
import { contract, etherscanHost } from './config';
import { useAccount } from 'wagmi'

const NFT_CLAIMS:{ [key: string]: { index: number, amount: string, proof: string[]} } = merkle.claims;

function NFT() {
  const contractAddress = contract.addressOrName;
  const shortContractAddress= contractAddress.slice(0, 5) + '...' + contractAddress.slice(contractAddress.length - 5, contractAddress.length - 1);
  const maxSupply = 3706;
  const { t } = useTranslation();
  const { isConnected, address } = useAccount();
  console.debug(`isConnected: ${isConnected} ${address}`);

  return (
    <div className="nft bg-[#0052FF] pt-[62px] flex flex-row" id="nft">
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
            <div className="nft-contract-address">Contract address: <a href={`${etherscanHost}/address/${contractAddress}`} target="blank" title={contractAddress}>{shortContractAddress}</a></div>
          </div>
          { isConnected && (
            <div>
              <Mint address={address} contract={contract} claim={NFT_CLAIMS[address as string] || {}} />
            </div>) 
          }
          { !isConnected && (<PreMint contract={contract} />) }
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
