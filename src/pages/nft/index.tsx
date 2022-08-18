import { useTranslation } from 'react-i18next'
import Mint from './mint';
import PreMint from './pre-mint';
import './index.css'
import { contract, etherscanHost } from './config';
import { useAccount } from 'wagmi'
import { useEffect, useState } from 'react';
import { fetchJson } from 'ethers/lib/utils';

let cachedMerkleData: any = null;

function NFT() {
  const contractAddress = contract.addressOrName;
  const shortContractAddress= contractAddress.slice(0, 5) + '...' + contractAddress.slice(contractAddress.length - 5, contractAddress.length - 1);
  const maxSupply = 3706;
  const { t } = useTranslation();
  const { isConnected, address } = useAccount();
  const [ claim, setClaim ] = useState({});
  console.debug(`isConnected: ${isConnected} ${address}`);
  useEffect(() => {
    if (isConnected && address) {
      if (!cachedMerkleData) {
        console.debug(`fetch merkle proof from backend`);
        fetchJson({
          url: `/merkle.json?t=${+new Date()}`,
        }, undefined, (result, response) => {
          console.debug(`fetch merkle proof result: `, result, response);
          if (result && result.claims) {
            cachedMerkleData = result;
            console.debug(`query ${address} proof: `, result.claims[address]);
            setClaim(result.claims[address]);
          }
        });
      } else {
        console.debug(`query ${address} proof from local cache: `, cachedMerkleData.claims[address]);
        setClaim(cachedMerkleData.claims[address]);
      }
    }
    return () => {
      console.log('clear effct');
    };
  }, [address])

  const [ mintTimes, setMintTimes ] = useState(0);
  const onSuccessMint = () => {
    // setMintTimes(mintTimes + 1);
  }

  return (
    <div className="nft bg-[#0052FF] pt-[62px] flex flex-row" id="nft">
      <div className="nft-intro">
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
      <div className="nft-mint flex flex-col">
        <div className="nft-mint-main flex flex-col flex-[1] flex-center">
          <div className="nft-mint-title">WAMO NFT MINT</div>
          <div className="nft-mint-contract flex flex-row">
            <div className="nft-contract-supply mr-[54px]">{t('nft.total_supply')}: {maxSupply}</div>
            <div className="nft-contract-address">{t('nft.contract_address')}: <a href={`${etherscanHost}/address/${contractAddress}`} target="blank" title={contractAddress}>{shortContractAddress}</a></div>
          </div>
          { isConnected && (
              <Mint key={mintTimes} address={address} contract={contract} claim={claim} onSuccess={onSuccessMint} />
            ) 
          }
          { !isConnected && (<PreMint contract={contract} />) }
        </div>
        <div className="nft-mint-rule bg-[#050505] color-[#FFF] py-[2vw] pl-[4vw]">
          <div className="nft-mint-rule-title mb-[1rem] text-[20px] font-bold">{t('nft.rule')}</div>
          <div>{t('nft.rule_content_1')}</div>
          <div className="mt-[16px]">{t('nft.rule_content_2')}</div>
          <ul className="my-[0]">
            <li>{t('nft.rule_content_3')}</li>
            <li>{t('nft.rule_content_4')}</li>
            <li>{t('nft.rule_content_5')}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NFT
