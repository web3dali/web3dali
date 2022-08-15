import ConnectBtn from '../../ConnectBtn';
import InputNumber from 'rc-input-number';
import { useTranslation, Trans } from 'react-i18next'
import { useContractReads, useAccount, usePrepareContractWrite, useContractWrite, useWaitForTransaction } from 'wagmi'


function preMint(props) {
  const { t } = useTranslation();
  const { contract } = props;
  const { data, isError } = useContractReads({
    contracts: [{
      ...contract,
      functionName: 'MAX_SUPPLY',
    }, {
      ...contract,
      functionName: 'totalSupply',
    }],
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
          <div><strong className="text-[36px]">{ data?.[0] ? (data?.[0] - data?.[1]) : 3706 }</strong></div>
        </div>
        <div>
          <div className="mb-[30px]">Free Mint</div>
          <div><strong className="text-[36px]">?</strong></div>
        </div>
        <div>
          <div className="mb-[30px]">Asset</div>
          <div><strong className="text-[36px]">?</strong></div>
        </div>
      </div>
      <div className="nft-mint-num mt-[16px]">
        <InputNumber className="nft-mint-num-input" min={0} max={0} value={0} 
          disabled={true}
          upHandler={<div>+</div>}
          downHandler={<div>-</div>} />
      </div>
      <div className="nft-mint-btn pre-mint-btn flex mt-[16px]">
        <button disabled={true} className="btn btn-disable mt-[-2px] mr-[24px] bg-[gray]">{t('nft.freeMint')}</button>
        <ConnectBtn label={t('header.connect')} />
      </div>
    </>
  )
}

export default preMint
