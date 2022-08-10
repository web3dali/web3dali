import { useTranslation } from 'react-i18next'
import './Content.css'

function Content() {
  const { t } = useTranslation()
  return (
    <>
      <div className="content bg-white" id="content">
        <div className="content-inner p-16">
          <div className="box-container">
            <h1 className="text-[4rem] text-primary hero-kid-700 pb-4">
              {t('content.title')}
            </h1>
            <section className="flex">
              <img src="/content_img_01.png" className="w-[50%]" alt="" />
              <div className="text-[#2f2f2f] text-xl w-[50%]">
                <div className="px-8">
                  <p>
                    <em>{t('content.text_01')}</em>
                  </p>
                  <p>
                    <em>{t('content.text_02')}</em>
                  </p>
                  <p>
                    <em>{t('content.text_03')}</em>
                  </p>
                </div>
              </div>
            </section>
            <section className="flex">
              <img src="/content_img_02.png" className="w-[50%]" alt="" />
              <div className="text-[#2f2f2f] w-[50%]">
                <div className="p-8">
                  <div className="text-primary hero-kid-700 text-4xl">Day 1</div>
                  <div className="text-accent hero-kid-700">19 August</div>
                  <ul className="font-weight-[700] text-[20px]" style={{ lineHeight: 2 }}>
                    <li>{t('content.day1_text_01')}</li>
                    <li>{t('content.day1_text_02')}</li>
                    <li>{t('content.day1_text_03')}</li>
                    <li>{t('content.day1_text_04')}</li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="flex">
              <img src="/content_img_03.png" className="w-[50%]" alt="" />
              <div className="text-[#2f2f2f] w-[50%]">
                <div className="p-8">
                  <div className="text-primary hero-kid-700 text-4xl">Day 2</div>
                  <div className="text-accent hero-kid-700">20 August</div>
                  <ul className="font-weight-[700] text-[20px]" style={{ lineHeight: 2 }}>
                    <li>{t('content.day2_text_01')}</li>
                    <li>{t('content.day2_text_02')}</li>
                    <li>{t('content.day2_text_03')}</li>
                    <li>{t('content.day2_text_04')}</li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="flex flex-row">
              <div className="text-[#2f2f2f] w-[50%] text-right flex flex-col justify-around">
                <fieldset className="pr10">
                  <figcaption className="text-primary hero-kid-700 text-4xl">
                    {t('content.camp1_title')}
                  </figcaption>
                  <figure className="text-xl pt-7">
                    {t('content.camp1_desc')}
                  </figure>
                </fieldset>
                <fieldset className="pr10">
                  <figcaption className="text-primary hero-kid-700 text-4xl">
                    {t('content.camp2_title')}
                  </figcaption>
                  <figure className="text-xl pt-7">
                    {t('content.camp2_desc')}
                  </figure>
                </fieldset>
                <fieldset className="pr10">
                  <figcaption className="text-primary hero-kid-700 text-4xl">
                    {t('content.camp3_title')}
                  </figcaption>
                  <figure className="text-xl pt-7">
                    {t('content.camp3_desc')}
                  </figure>
                </fieldset>
                <fieldset className="pr10">
                  <figcaption className="text-primary hero-kid-700 text-4xl">
                    {t('content.camp4_title')}
                  </figcaption>
                  <figure className="text-xl pt-7">
                    {t('content.camp4_desc')}
                  </figure>
                </fieldset>
                <fieldset className="pr10">
                  <figcaption className="text-primary hero-kid-700 text-4xl">
                    {t('content.camp5_title')}
                  </figcaption>
                  <figure className="text-xl pt-7">
                    {t('content.camp5_desc')}
                  </figure>
                </fieldset>
              </div>
              <div className="w-[50%] flex-row">
                <img className="vertical-bottom w-[100%]" src="/content_img_04.png" alt="" />
                <img className="vertical-bottom w-[100%]" src="/content_img_05.png" alt="" />
                <img className="vertical-bottom w-[100%]" src="/content_img_06.png" alt="" />
                <img className="vertical-bottom w-[100%]" src="/content_img_07.png" alt="" />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default Content
