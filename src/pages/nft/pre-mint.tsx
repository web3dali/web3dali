import ConnectBtn from '../../ConnectBtn';
import MintInfo from './mint-info';
import { useTranslation, Trans } from 'react-i18next'
import { useContractReads } from 'wagmi'


function preMint(props: { contract: any; }) {
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
  const availableNum = data?.[0] ? ((data?.[0] as unknown as number) - (data?.[1] as unknown as number)) : 3706;
  return (
    <>
      <MintInfo availableNum={availableNum} freeMintNum={0} balance={0} />
      <div className="nft-mint-btn pre-mint-btn flex">
        {/* <button disabled={true} className="btn mt-[-2px] mr-[24px] bg-[gray]">{t('nft.freeMint')}</button> */}
        <ConnectBtn label={t('header.connect')} />
      </div>
    </>
  )  
}

export default preMint
