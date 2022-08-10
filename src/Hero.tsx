import { useTranslation } from 'react-i18next'

function Hero() {
  const { t } = useTranslation()
  return (
    <>
      <div className="text-[#FFF] flex flex-col mt-[5%]">
        <div>{t('hero.event')}</div>
        <div className="text-5xl font-bold py-8 hero-kid-800">
          {t('hero.summer')}
        </div>

        <div className="text-4xl font-bold py-5">{t('hero.dali')}</div>
        <div className="text-[1.25rem] mb-[6px]">{t('hero.time')}</div>
        <div className="text-[1.25rem]">{t('hero.farm')}</div>
      </div>
      <div className="flex gap-x-8 pt-12">
        <a href="https://www.huodongxing.com/event/6661890942400" target="blank" className="btn btn-accent px-[2rem]">
          {t('hero.buy')}
        </a>
        <a href="webcal://www.web3dali.com//event.ics" className="btn btn-accent btn-accent-lg">
          {t('hero.calendar')}
        </a>
      </div>
    </>
  )
}

export default Hero
