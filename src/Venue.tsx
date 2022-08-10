import { useTranslation, Trans } from 'react-i18next'
import './Venue.css'

function Venue() {
  const { t } = useTranslation()

  return (
    <div className="box-container pb-10 max-w-[1140px]">
      <h1 className="text-[4rem] text-accent hero-kid-700 venue-title">
        {t('venue.title')}
      </h1>
      <p className="text-[#2F2F2F] font-bold m-0 venue-subtitle pr-[14rem]">{t('venue.address')} </p>
      <p className="text-[#2F2F2F] text-[20px] venue-subtitle mt-8 mb-5">{t('venue.since')}</p>
      <img src="/venue-min.jpg" className="w-full" alt="" />
    </div>
  )
}

export default Venue
