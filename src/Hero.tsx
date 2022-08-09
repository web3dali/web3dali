import { useTranslation } from 'react-i18next'

function Hero() {
  const { t } = useTranslation()
  return (
    <>
      <div className="flex flex-col mt-48">
        <div>{t('hero.event')}</div>
        <div className="text-5xl font-bold py-8 hero-kid-800">
          {t('hero.summer')}
        </div>

        <div className="text-4xl font-bold py-5">{t('hero.dali')}</div>
        <div className="text-[1.25rem]">{t('hero.dali')}</div>
        <div className="text-[1.25rem]">{t('hero.farm')}</div>
      </div>
      <div className="flex gap-x-8 pt-12">
        <a href="" className="btn btn-accent">
          {t('hero.buy')}
        </a>
        <a href="" className="btn btn-accent btn-accent-lg">
          {t('hero.calendar')}
        </a>
      </div>
    </>
  )
}

export default Hero
