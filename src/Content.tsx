import { useTranslation } from 'react-i18next'
import './Content.css'

function Content() {
  const { t } = useTranslation()
  return (
    <>
      <div className="content bg-white">
        <div className="content-inner p-16">
          <div className="box-container">
            <h1 className="text-[4rem] text-primary hero-kid-700 pb-4">
              {t('content.title')}
            </h1>

            <section className="flex">
              <img src="/content_img_01.png" alt="" />
              <div className="px-9 text-[#2f2f2f] text-xl">
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
            </section>
            <section className="flex">
              <img src="/content_img_02.png" alt="" />
              <div className="p-9 text-[#2f2f2f]">
                <div className="text-primary hero-kid-700 text-4xl">Day 1</div>
                <div className="text-accent hero-kid-700">19 August</div>
                <ul className="font-bold text-xl">
                  <li>{t('content.day1_text_01')}</li>
                  <li>{t('content.day1_text_02')}</li>
                  <li>{t('content.day1_text_03')}</li>
                  <li>{t('content.day1_text_04')}</li>
                </ul>
              </div>
            </section>
            <section className="flex">
              <img src="/content_img_03.png" alt="" />
              <div className="p-9 text-[#2f2f2f]">
                <div className="text-primary hero-kid-700 text-4xl">Day 2</div>
                <div className="text-accent hero-kid-700">20 August</div>
                <ul className="font-bold text-xl">
                  <li>{t('content.day2_text_01')}</li>
                  <li>{t('content.day2_text_02')}</li>
                  <li>{t('content.day2_text_03')}</li>
                  <li>{t('content.day2_text_04')}</li>
                </ul>
              </div>
            </section>
            <section className="grid content-camp-part">
              <div className="p-9 text-[#2f2f2f] w-[460px] text-right flex flex-col justify-around gap-20">
                <fieldset>
                  <figcaption className="text-primary hero-kid-700 text-4xl">
                    {t('content.camp1_title')}
                  </figcaption>
                  <figure className="text-xl pt-7">
                    {t('content.camp1_desc')}
                  </figure>
                </fieldset>
                <fieldset>
                  <figcaption className="text-primary hero-kid-700 text-4xl">
                    {t('content.camp2_title')}
                  </figcaption>
                  <figure className="text-xl pt-7">
                    {t('content.camp2_desc')}
                  </figure>
                </fieldset>
                <fieldset>
                  <figcaption className="text-primary hero-kid-700 text-4xl">
                    {t('content.camp3_title')}
                  </figcaption>
                  <figure className="text-xl pt-7">
                    {t('content.camp3_desc')}
                  </figure>
                </fieldset>
                <fieldset>
                  <figcaption className="text-primary hero-kid-700 text-4xl">
                    {t('content.camp4_title')}
                  </figcaption>
                  <figure className="text-xl pt-7">
                    {t('content.camp4_desc')}
                  </figure>
                </fieldset>
                <fieldset>
                  <figcaption className="text-primary hero-kid-700 text-4xl">
                    {t('content.camp5_title')}
                  </figcaption>
                  <figure className="text-xl pt-7">
                    {t('content.camp5_desc')}
                  </figure>
                </fieldset>
              </div>
              <div>
                <img src="/content_img_04.png" alt="" />
                <img src="/content_img_05.png" alt="" />
                <img src="/content_img_06.png" alt="" />
                <img src="/content_img_07.png" alt="" />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default Content
