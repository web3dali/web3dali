import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ConnectBtn from '../../ConnectBtn';
import MintInfo from './mint-info';
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
      <MintInfo availableNum={availableNum} freeMintNum={freeMintNum} balance={balance} />
      <div className="flex flex-center pb-[16px]">
        <div className="nft-mint-num flex items-center">
          <div className={`input-number-handler text-[24px] mr-[10px]${ numToMint <= 1 ? ' disabled' : ''}`} onClick={decreaseNumToMint}>-</div>
          <div className="input-number-text">{numToMint}</div>
          <div className={`input-number-handler text-[24px] ml-[10px]${ numToMint >= freeMintNum ? ' disabled' : ''}`} onClick={increaseNumToMint}>+</div>
        </div>
        <div className="nft-mint-btn flex ml-[24px]">
          { !allowedToMint && (<button className="btn btn-accent mr-[24px]" style={{ backgroundColor: 'gray'}}>{t('nft.freeMint')}</button>) }
          { allowedToMint && (<MintBtn index={claim?.index} maxMintNum={maxMintNum} numToMint={numToMint} proof={proof} contract={contract} />) }
        </div>
      </div>
    </>
  )
}

export default mint
