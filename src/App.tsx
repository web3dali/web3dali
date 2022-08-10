import './App.css'

import Hero from './Hero'
import Footer from './Footer'
import About from './pages/about';
import ConnectBtn from './ConnectBtn'
import Speaker from './Speaker'
import Venue from './Venue'
import wamo from './assets/wamo.svg'
import Content from './Content'
import { useTranslation, Trans } from 'react-i18next'
import i18n from 'i18next'
const changeLanguage = () => {
  i18n.changeLanguage(i18n.language == 'en' ? 'zh' : 'en')
}
function App() {
  const { t } = useTranslation()

  return (
    <div className="App">
      <div className="hero-bg absolute top-0 left-0 w-full h-[100vh] -z-1"></div>
      <div className="box-container h-[100vh] text-[#FFF]">
        <div className="h-16 flex-between">
          <div className="brand flex gap-4">
            <img className="h-[40px]" src={wamo} alt="" />
            <span className="text-[1rem]">{t('hero.summer')}</span>
          </div>
          <div className="menu flex items-center gap-6 text-sm">
            <a href="#" onClick={changeLanguage}>
              中/EN
            </a>
            <a href="#content">{t('header.content')}</a>
            <a href="#venue">{t('header.venue')}</a>
            <a href="#speaker">{t('header.speakers')}</a>
            {/* <a href="#">{t('header.nft')}</a> */}
            {/* <a href="#">{t('header.sbt')}</a> */}
            <a href="#about">{t('header.about')}</a>
            <ConnectBtn label={t('header.connect')} />
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
        <div className="text-[#2f2f2f] text-2xl max-w-[988px] mx-auto mt-8">
          <em> {t('hero.content2')}</em>
        </div>
      </div>

      {/* <!-- content --> */}
      <Content />

      <div className="bg-[#6ce4D1] p-8">
        <Venue />
        <Speaker />
      </div>
      <About />
      {/* <!-- Footer --> */}
      <Footer />
    </div>
  )
}

export default App
