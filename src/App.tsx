import './App.css'

import Hero from './Hero'
import Footer from './Footer'
import wamo from './assets/wamo.svg'
import SpeakerCard from './SpeakerCard'
import { useTranslation, Trans } from 'react-i18next'
import i18n from 'i18next'
const changeLanguage = () => {
  i18n.changeLanguage(i18n.language == 'en' ? 'zh' : 'en')
}
function App() {
  const { t } = useTranslation()

  return (
    <div className="App">
      <div className="hero-bg absolute top-0 left-0 w-full h-[980px] -z-1"></div>
      <div className="box-container h-[980px]">
        <div className="h-16 flex-between">
          <div className="brand flex gap-4">
            <img src={wamo} alt="" />
            <span className="text-sm">Summer of WAMO</span>
          </div>
          <div className="menu flex items-center gap-6 text-sm">
            <a href="#" onClick={changeLanguage}>
              中/EN
            </a>
            <a href="#">{t('header.content')}</a>
            <a href="#">{t('header.venue')}</a>
            <a href="#">{t('header.speakers')}</a>
            <a href="#">{t('header.nft')}</a>
            <a href="#">{t('header.sbt')}</a>
            <a href="#">{t('header.about')}</a>
            <a href="#" className="btn btn-secondary !text-black">
              {t('header.connect')}
            </a>
          </div>
        </div>
        {/* <!-- Hero --> */}
        <Hero />
      </div>
      <div className="bg-[#6ce4D1] py-32 relative">
        <div className="box-container blockquote relative">
          <div className="text-white text-2xl max-w-[988px] mx-auto">
            <em className="max-w-[1025px]">{t('hero.content1')}</em>
          </div>
        </div>
        <div className="text-white text-2xl max-w-[988px] mx-auto mt-8">
          <em> {t('hero.content2')}</em>
        </div>
      </div>

      <div className="content-bg content p-8 bg-white h-[1024px]">
        <div className="box-container">
          <h1 className="text-[4rem] text-primary hero-kid-700">
            {t('content.title')}
          </h1>
        </div>
      </div>

      <div className="venue p-8 ">
        <div className="box-container">
          <h1 className="text-[4rem] text-accent hero-kid-700">
            {t('venue.title')}
          </h1>
          <p className="text-black font-bold">{t('venue.address')} </p>
          <p className="text-black">{t('venue.since')}</p>
          <img src="/wamo_venue.png" className="w-full" alt="" />
        </div>
        <div className="box-container pt-16">
          <h1 className="text-[4rem] text-accent hero-kid-700">{t('venue.speakers')}</h1>

          <div className="grid grid-cols-4 gap-x-8">
            <SpeakerCard />
            <SpeakerCard />
            <SpeakerCard />
            <SpeakerCard />
          </div>
        </div>
      </div>

      {/* <!-- Footer --> */}
      <Footer />
    </div>
  )
}

export default App
