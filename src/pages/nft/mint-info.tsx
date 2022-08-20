import { useTranslation } from 'react-i18next'

function MintInfo(props: { availableNum: any; freeMintNum: any; balance: any; }) {
  const { t } = useTranslation();
  const { availableNum, freeMintNum, balance } = props; 
  return (
    <div className="nft-mint-info flex flex-row w-[70%] flex-between my-[2.5vw]">
      <div>
        <div className="mb-[1.5vw]">{t('nft.price')}</div>
        <div className="info-val"><strong className="vertical-mid">0</strong><em className="font-[black] ml-[15px] vertical-mid">ETH</em></div>
      </div>
      <div>
        <div className="mb-[1.5vw]">{t('nft.available')}</div>
        <div className="info-val"><strong className="">{availableNum}</strong></div>
      </div>
      <div>
        <div className="mb-[1.5vw]">{t('nft.free_mint')}</div>
        <div className="info-val"><strong className="">{freeMintNum}</strong></div>
      </div>
      <div>
        <div className="mb-[1.5vw]">{t('nft.asset')}</div>
        <div className="info-val"><strong className="">{balance}</strong></div>
      </div>
    </div>
  )
}
export default MintInfo;