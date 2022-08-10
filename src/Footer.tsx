import wamo from './assets/wamo.svg'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'

const changeLanguage = () => {
  i18n.changeLanguage(i18n.language == 'en' ? 'zh' : 'en')
}
function Footer() {
  const { t } = useTranslation()
  return (
    <div className="bg-black">
      <div className="box-container flex-between pt-12 pb-8 border-b border-white text-white mt-[2rem]">
        <div className="flex gap-4">
          <img src={wamo} alt="summer of wamo" />
          <div className="flex flex-col gap-2">
            <div>Summer of WAMO</div>
            <div className="text-sm">A Web3 Fest in Dali</div>
          </div>
        </div>
        <div className="flex items-center gap-x-8">
          <a href="#" className="text-white" onClick={changeLanguage}>
            中 / EN
          </a>
          <a href="#" className="text-white">
            {t('header.content')}
          </a>
          <a href="#" className="text-white">
            {t('header.venue')}
          </a>
          <a href="#" className="text-white">
            {t('header.speakers')}
          </a>
          <a href="#" className="text-white">
            {t('header.nft')}
          </a>
          <a href="#" className="text-white">
            {t('header.sbt')}
          </a>
          <a href="#" className="text-white">
            {t('header.about')}
          </a>
        </div>
      </div>
      <div className="flex-center text-white pt-8 pb-15">
        @ 2022 All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer
