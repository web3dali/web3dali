import { useState } from 'react'
import { useTranslation, Trans } from 'react-i18next'
import './index.css'
import i18n from 'i18next'

export const About = () => {
  const { t } = useTranslation()
  // sponsors pt-100 mt--58 bg-white
  return (
    <div id="sponsors" className="sponsors mt--58">
      <div className="sponsors_bg1"></div>
      <div className="sponsors_inner pt-100 pb-30">
        <div className="box-container ">
          <h2 className="text-[2.5rem] about-title hero-kid-700 text-[#000]">
            {t('sponsors.title1')}
          </h2>
          <div className="flex-between mt-15">
            <div className="sponsors-img-height">
              <img src="/w1.png" alt="" className="" />
            </div>
            <div className="sponsors-img-height">
              <img src="/w2.png" alt="" />
            </div>
            {/* <img src="" alt="" className='sponsors-img' /> */}
            <div className="sponsors-img-empty"></div>
          </div>

          <h2 className="text-[2.5rem] about-title hero-kid-700 text-[#000] mt-45">
            {t('sponsors.title2')}
          </h2>
          <div className="flex-between mt-20">
            <div className="sponsors-img">
              <img src="/l1.png" alt="" />
            </div>
            <div className="sponsors-img">
              <img src="/l5.png" alt="" />
            </div>
            <div className="sponsors-img">
              <img src="/l8.png" alt="" />
            </div>
          </div>
          <div className="flex-between mt-15">
            <div className="sponsors-img">
              <img src="/l4.png" alt="" />
            </div>
            <div className="sponsors-img">
              <img src="/l6.png" alt="" />
            </div>
            <div className="sponsors-img">
              <img src="/l3.png" alt="" />
            </div>
          </div>
          <div className="flex-between mt-20">
            <div className="sponsors-img">
              <img src="/l7.png" alt="" />
            </div>
            <div className="sponsors-img">
              <img src="/l2.png" alt="" />
            </div>
            <div className="sponsors-img-empty"></div>
          </div>

          <h2 className="text-[2.5rem] about-title hero-kid-700 text-[#000] mt-45">
            {t('sponsors.title3')}
          </h2>
          <div className="flex-between mt-20">
            <div className="sponsors-img">
              <img src="/z1.png" alt="" />
            </div>
            <div className="sponsors-img-empty"></div>
            <div className="sponsors-img-empty"></div>
          </div>

          <h2 className="text-[2.5rem] about-title hero-kid-700 text-[#000] mt-45">
            {t('sponsors.title4')}
          </h2>
          <div className="flex-between mt-20">
            <div className="sponsors-img">
              <img src="/m1.png" alt="" />
            </div>
            <div className="sponsors-img">
              <img src="/m2.png" alt="" />
            </div>
            <div className="sponsors-img">
              <img src="/m3.png" alt="" />
            </div>
          </div>
          <div className="flex-between mt-20">
            <div className="sponsors-img">
              <img src="/m4.png" alt="" />
            </div>
            <div className="sponsors-img">
              <img src="/m5.png" alt="" />
            </div>
            <div className="sponsors-img">
              <img src="/m6.png" alt="" />
            </div>
          </div>
          <div className="flex-between mt-20">
            <div className="sponsors-img">
              <img src="/m7.png" alt="" />
            </div>
            <div className="sponsors-img">
              <img src="/c7.png" alt="" />
            </div>
           
            <div className="sponsors-img">
              <img src="/c2.png" alt="" />
            </div>
          </div>

          <div className="flex-between mt-20">
            <div className="sponsors-img">
              <img src="/c3.png" alt="" />
            </div>
            <div className="sponsors-img">
              <img src="/c6.png" alt="" />
            </div>
            <div className="sponsors-img">
              <img src="/c1.png" alt="" />
            </div>
          </div>
          <div className="flex-between mt-20">
          <div className="sponsors-img">
              <img src="/c4.png" alt="" />
            </div>
            <div className="sponsors-img">
              <img src="/c5.png" alt="" />
            </div>
            
            <div className="sponsors-img">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
