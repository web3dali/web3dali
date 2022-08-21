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
import NFT from './pages/nft'
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
    const hrefArr: any = location.href.split('#') || []
    console.debug(hrefArr)
    if (hrefArr.length > 1 && hrefArr[1].length > 1) {
      setTimeout(() => {
        jump(`#${hrefArr[1]}`)
      }, 1000)

      // document
      //   .querySelector<HTMLElement>(`#${hrefArr[1]}`)!
      //   .scrollIntoView(true)
    }
    // document.querySelector("#header").scrollIntoView(true);
  }, [])
  const jump = (a: string) => {
    document.querySelector<HTMLElement>(a)!.scrollIntoView({
      behavior: 'smooth', // 平滑过渡
      block: 'start' // 上边框与视窗顶部平齐。默认值
    })
  }
  return (
    <div
      className={`${
        isMobile() ? 'mobile-device' : 'desktop-device'
      } App bg-[#fff]`}
    >
      <div className="text-[#FFF] w-full pc_header">
        {!isMobile() && <img src="/wamo_hero_bg.png" className="hero-bg" />}

        <div className={isMobile() ? 'mobile-header' : 'header'}>
          <div className="box-container box-fl">
            <div
              className={` ${
                isMobile()
                  ? 'header_content_mobile h-36'
                  : 'h-16 header_content'
              } `}
            >
              <div className="box-container flex-between h-16">
                <div className="brand flex gap-4">
                  <img className="h-[40px]" src={wamo} alt="" />
                  <span className="text-[1rem]">{t('hero.summer')}</span>
                </div>
                {isMobile() ? (
                  <>
                    <div className="menu flex-between gap-6  text-[1.2rem]">
                      <a href="#" onClick={changeLanguage}>
                        中/EN
                      </a>
                      <ConnectBtn label={t('header.connect')} />
                    </div>
                  </>
                ) : (
                  <div className="menu flex items-center gap-6 text-sm">
                    <a href="#" onClick={changeLanguage}>
                      中/EN
                    </a>
                    <a
                      style={{ cursor: 'pointer' }}
                      onClick={() => jump('#content')}
                    >
                      {t('header.content')}
                    </a>
                    <a
                      style={{ cursor: 'pointer' }}
                      onClick={() => jump('#venue')}
                    >
                      {t('header.venue')}
                    </a>
                    <a
                      style={{ cursor: 'pointer' }}
                      onClick={() => jump('#nft')}
                    >
                      {t('header.nft')}
                    </a>
                    {/* <a style={{cursor:'pointer'}} onClick={() => jump('#speaker')}>{t('header.speakers')}</a> */}
                    <a
                      style={{ cursor: 'pointer' }}
                      onClick={() => jump('#sponsor')}
                    >
                      {t('header.sponsor')}
                    </a>
                    <a
                      style={{ cursor: 'pointer' }}
                      onClick={() => jump('#media')}
                    >
                      {t('header.media')}
                    </a>
                    <a
                      style={{ cursor: 'pointer' }}
                      onClick={() => jump('#about')}
                    >
                      {t('header.about')}
                    </a>
                    <ConnectBtn label={t('header.connect')} />
                  </div>
                )}
              </div>
              {isMobile() && (
                <div className="menu flex-between gap-6 pl-45 pr-34 text-[1.2rem] mt-6">
                  <a
                    style={{ cursor: 'pointer' }}
                    onClick={() => jump('#content')}
                  >
                    {t('header.content')}
                  </a>
                  <a
                    style={{ cursor: 'pointer' }}
                    onClick={() => jump('#venue')}
                  >
                    {t('header.venue')}
                  </a>
                  <a style={{ cursor: 'pointer' }} onClick={() => jump('#nft')}>
                    {t('header.nft')}
                  </a>
                  {/* <a style={{cursor:'pointer'}} onClick={() => jump('#speaker')}>{t('header.speakers')}</a> */}
                  <a
                    style={{ cursor: 'pointer' }}
                    onClick={() => jump('#sponsor')}
                  >
                    {t('header.sponsor')}
                  </a>
                  <a
                    style={{ cursor: 'pointer' }}
                    onClick={() => jump('#media')}
                  >
                    {t('header.media')}
                  </a>
                  <a
                    style={{ cursor: 'pointer' }}
                    onClick={() => jump('#about')}
                  >
                    {t('header.about')}
                  </a>
                </div>
              )}
            </div>
            <Hero />
          </div>
        </div>
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
      <NFT />
      <About />
      <Sponsors />
      {/* <!-- Footer --> */}
      <Footer />
    </div>
  )
}

export default App
