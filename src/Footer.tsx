import wamo from './assets/wamo.svg'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'

const changeLanguage = () => {
  i18n.changeLanguage(i18n.language == 'en' ? 'zh' : 'en')
}
function Footer() {
  const { t } = useTranslation()
  const openSocial = (url: string) => {
    window.open(url)
  }
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
  const jump = (a: string) => {
    document.querySelector<HTMLElement>(a)!.scrollIntoView({
      behavior: 'smooth', // 平滑过渡
      block: 'start' // 上边框与视窗顶部平齐。默认值
    })
  }
  return (
    <div className="bg-black">
      {isMobile() ? (
        <div className="box-container footer-mobile pt-12 pb-8 border-b border-white text-white mt-[2rem]">
          <img src={wamo} alt="summer of wamo" />
          <div className="flex gap-4">
            <div className="flex flex-col gap-2">
              <div
                className="mt-4 text-lg center"
                style={{ textAlign: 'center' }}
              >
                Summer of WAMO
              </div>
              <div className="text-lg">A Web3 Fest in Dali</div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-x-8 mt-5">
              <a
                href="#"
                className="text-white text-lg"
                onClick={changeLanguage}
              >
                中 / EN
              </a>
              <a style={{cursor:'pointer'}} onClick={() => jump('#content')} className="text-white text-lg">
                {t('header.content')}
              </a>
              <a style={{cursor:'pointer'}} onClick={() => jump('#venue')} className="text-white text-lg">
                {t('header.venue')}
              </a>
              {/* <a style={{cursor:'pointer'}} onClick={() => jump('#speaker')}  className="text-white text-lg">
                {t('header.speakers')}
              </a> */}
              <a style={{cursor:'pointer'}} onClick={() => jump('#sponsor')}  className="text-white text-lg">
                {t('header.sponsor')}
              </a>
              <a style={{cursor:'pointer'}} onClick={() => jump('#media')}  className="text-white text-lg">
                {t('header.media')}
              </a>
           
              <a style={{cursor:'pointer'}} onClick={() => jump('#about')}  className="text-white text-lg">
                {t('header.about')}
              </a>
            </div>
            <div
              className="social mt-3 flex mt-5"
              style={{ justifyContent: 'center' }}
            >
              <img
                src="/telegram.png"
                alt="dali_web3"
                onClick={() => openSocial('https://t.me/daliweb3')}
              />
              <img
                src="/twitter.png"
                alt="@dali_web3"
                className="ml-8"
                onClick={() => openSocial('https://twitter.com/dali_web3')}
              />
              <img
                src="/github.png"
                alt="@dali_web3"
                className="ml-8"
                onClick={() => openSocial('https://github.com/web3dali')}
              />
              <img
                src="/jike.png"
                alt="瓦猫之夏_大理web3街会"
                className="ml-8"
                onClick={() =>
                  openSocial(
                    'https://web.okjike.com/u/2B4FA9DE-D1D7-46BF-B2C0-DB16C73DDC55'
                  )
                }
              />
               <img
                src="/mirr.png"
                alt="@dali_web3"
                className="ml-8"
                onClick={() =>
                  openSocial(
                    'https://mirror.xyz/web3dali.eth'
                  )
                }
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="box-container flex-between pt-12 pb-8 border-b border-white text-white mt-[2rem]">
          <div className="flex gap-4">
            <img src={wamo} alt="summer of wamo" />
            <div className="flex flex-col gap-2">
              <div>Summer of WAMO</div>
              <div className="text-sm">A Web3 Fest in Dali</div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-x-8">
              <a href="#" className="text-white" onClick={changeLanguage}>
                中 / EN
              </a>
              <a style={{cursor:'pointer'}} onClick={() => jump('#content')} className="text-white">
                {t('header.content')}
              </a>
              <a style={{cursor:'pointer'}} onClick={() => jump('#venue')} className="text-white">
                {t('header.venue')}
              </a>
              {/* <a style={{cursor:'pointer'}} onClick={() => jump('#speaker')}  className="text-white">
                {t('header.speakers')}
              </a> */}
              <a style={{cursor:'pointer'}} onClick={() => jump('#sponsor')}  className="text-white">
                {t('header.sponsor')}
              </a>
              <a style={{cursor:'pointer'}} onClick={() => jump('#media')}  className="text-white">
                {t('header.media')}
              </a>
           
              <a style={{cursor:'pointer'}} onClick={() => jump('#about')}  className="text-white">
                {t('header.about')}
              </a>
            </div>
            <div className="social mt-3 flex ">
              <img
                src="/telegram.png"
                alt="dali_web3"
                onClick={() => openSocial('https://t.me/daliweb3')}
              />
              <img
                src="/twitter.png"
                alt="@dali_web3"
                className="ml-8"
                onClick={() => openSocial('https://twitter.com/dali_web3')}
              />
              <img
                src="/github.png"
                alt="@dali_web3"
                className="ml-8"
                onClick={() => openSocial('https://github.com/web3dali')}
              />
              <img
                src="/jike.png"
                alt="瓦猫之夏_大理web3街会"
                className="ml-8"
                onClick={() =>
                  openSocial(
                    'https://web.okjike.com/u/2B4FA9DE-D1D7-46BF-B2C0-DB16C73DDC55'
                  )
                }
              />
               <img
                src="/mirr.png"
                alt="@dali_web3"
                className="ml-8"
                onClick={() =>
                  openSocial(
                    'https://mirror.xyz/web3dali.eth'
                  )
                }
              />
            </div>
          </div>
        </div>
      )}

      <div className="flex-center text-white pt-8 pb-15">
        @ 2022 All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer
