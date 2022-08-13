import './App.css'

import Hero from './Hero'
import Footer from './Footer'
import About from './pages/about'
import ConnectBtn from './ConnectBtn'
import Speaker from './Speaker'
import Venue from './Venue'
import wamo from './assets/wamo.svg'
import Content from './Content'
import Sponsors from './pages/sponsors'
import { useTranslation, Trans } from 'react-i18next'
import i18n from 'i18next'
import { useEffect } from 'react'

const changeLanguage = () => {
  i18n.changeLanguage(i18n.language == 'en' ? 'zh' : 'en')
}

function App() {
  const { t } = useTranslation()
  useEffect(() => {
    if (i18n.language == 'en') {
      document.title = 'Summer of Wamo|Dali Web3 Fest'
    } else {
      document.title = '瓦猫之夏|大理Web3街会'
    }
  }, [i18n])
  const isMobile = () => {
    var userAgentInfo = navigator.userAgent
    var mobileAgents = [
      'Android',
      'iPhone',
      'SymbianOS',
      'Windows Phone',
      'iPad',
      'iPod'
    ]
    var mobile_flag = false
    //根据userAgent判断是否是手机
    for (var v = 0; v < mobileAgents.length; v++) {
      if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
        mobile_flag = true
        break
      }
    }

    var screen_width = window.screen.width
    var screen_height = window.screen.height

    //根据屏幕分辨率判断是否是手机
    if (screen_width < 780) {
      mobile_flag = true
    }
    return mobile_flag
  }
  useEffect(() => {
    const hrefArr: any = location.href.split('#')

    if (hrefArr.length > 1) {

      document
        .querySelector<HTMLElement>(`#${hrefArr[1]}`)!
        .scrollIntoView(true)
    }
    // document.querySelector("#header").scrollIntoView(true);
  }, [])
  return (
    <div className="App bg-[#fff]">
      <div className="text-[#FFF] w-full">
        {isMobile() ? (
          <img src="/mobile_hero.png" className="hero-bg " />
        ) : (
          <img src="/wamo_hero_bg.png" className="hero-bg" />
        )}

        <div className="header ">
          <div className="box-container">
            <div className="h-16 flex-between">
              <div className="brand flex gap-4">
                <img className="h-[40px]" src={wamo} alt="" />
                <span className="text-[1rem]">{t('hero.summer')}</span>
              </div>
              {isMobile() ? (
                <>
                  <ConnectBtn label={t('header.connect')} />
                </>
              ) : (
                <div className="menu flex items-center gap-6 text-sm">
                  <a href="#" onClick={changeLanguage}>
                    中/EN
                  </a>
                  <a href="#content">{t('header.content')}</a>
                  <a href="#venue">{t('header.venue')}</a>
                  <a href="#speaker">{t('header.speakers')}</a>
                  <a href="#sponsor">{t('header.sponsor')}</a>
                  <a href="#media">{t('header.media')}</a>
                  <a href="#about">{t('header.about')}</a>
                  <ConnectBtn label={t('header.connect')} />
                </div>
              )}
            </div>
            {isMobile() && (
              <div className="menu flex-between gap-6 pl-45 pr-34 text-[1.2rem]">
                <a href="#" onClick={changeLanguage}>
                  中/EN
                </a>
                <a href="#content">{t('header.content')}</a>
                <a href="#venue">{t('header.venue')}</a>
                <a href="#speaker">{t('header.speakers')}</a>
                <a href="#sponsor">{t('header.sponsor')}</a>
                <a href="#media">{t('header.media')}</a>
                <a href="#about">{t('header.about')}</a>
              </div>
            )}
            <Hero />
          </div>
        </div>

        {/* <div className="header">
          <div className="box-container">
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
                <a href="#speaker">{t('header.speakers')}</a> */}
        {/* <a href="#">{t('header.nft')}</a> */}
        {/* <a href="#">{t('header.sbt')}</a> */}
        {/* <a href="#about">{t('header.about')}</a>
                <ConnectBtn label={t('header.connect')} />
              </div>
            </div>
            <Hero />
          </div>
        </div> */}
      </div>
      <div className="bg-[#6ce4D1] py-32 relative">
        <div className="box-container blockquote relative">
          <div className="text-white text-2xl max-w-[988px] mx-auto px-[64px]">
            <p className="text-italy max-w-[1025px]">{t('hero.content1')}</p>
            <p className="mt-8"> {t('hero.content2')}</p>
          </div>
        </div>
      </div>

      {/* <!-- content --> */}
      <Content />

      <div className="bg-[#6ce4D1] p-8">
        <Venue />
        {/* <Speaker /> */}
      </div>
      <About />
      <Sponsors />
      {/* <!-- Footer --> */}
      <Footer />
    </div>
  )
}

export default App
