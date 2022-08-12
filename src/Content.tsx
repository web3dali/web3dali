import { useTranslation } from 'react-i18next'
import './Content.css'
import i18n from 'i18next'

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
            {i18n.language == 'en' ? (
              <section className="flex flex-row">
                <div className="text-[#2f2f2f] w-[50%] text-right flex flex-col justify-around mt-10">
                  <fieldset className="pr10">
                    <figcaption className="text-primary hero-kid-700 text-4xl">
                      {t('content.camp1_title')}
                    </figcaption>
                    <figure className="text-xl pt-7">
                      {t('content.camp1_desc_1')} <br />{t('content.camp1_desc_2')}
                    </figure>
                  </fieldset>
                  <fieldset className="pr10">
                    <figcaption className="text-primary hero-kid-700 text-4xl">
                      {t('content.camp2_title')}
                    </figcaption>
                    <figure className="text-xl pt-7">
                      {t('content.camp2_desc_1')} <br />{t('content.camp2_desc_2')}
                    </figure>
                  </fieldset>
                  <fieldset className="pr10">
                    <figcaption className="text-primary hero-kid-700 text-4xl">
                      {t('content.camp3_title')}
                    </figcaption>
                    <figure className="text-xl pt-7">
                    {t('content.camp3_desc_1')} <br />{t('content.camp3_desc_2')} <br /> {t('content.camp3_desc_3')}
                    </figure>
                  </fieldset>
                  <fieldset className="pr10">
                    <figcaption className="text-primary hero-kid-700 text-4xl">
                      {t('content.camp4_title')}
                    </figcaption>
                    <figure className="text-xl pt-7">
                      {t('content.camp4_desc_1')} <br /> {t('content.camp4_desc_2')} 
                    </figure>
                  </fieldset>
                  <fieldset className="pr10">
                    <figcaption className="text-primary hero-kid-700 text-4xl">
                      {t('content.camp5_title')}
                    </figcaption>
                    <figure className="text-[17px] pt-7">
                      {t('content.camp5_desc_1')} <br />{t('content.camp5_desc_2')} <br /> {t('content.camp5_desc_3')}
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
            ):(
              <section className="flex flex-col">
                <div className="text-[#2f2f2f] text-right flex flex-row justify-around mt-0">
                  <fieldset className="pr10 w-[50%] flex flex-col justify-center">
                    <figcaption className="text-primary hero-kid-700 text-4xl">
                      {t('content.camp2_title')}
                    </figcaption>
                    <figure className="text-xl pt-7">
                      {t('content.camp2_desc_1')} <br />{t('content.camp2_desc_2')}
                    </figure>
                  </fieldset>
                  <div className="content-image w-[50%] flex-row">
                    <img src="/content_img_05.png" alt="" />
                  </div>
                </div>
                <div className="text-[#2f2f2f] text-right flex flex-row justify-around mt-0">
                  <fieldset className="pr10 w-[50%] flex flex-col justify-center">
                    <figcaption className="text-primary hero-kid-700 text-4xl">
                      {t('content.camp1_title')}
                    </figcaption>
                    <figure className="text-xl pt-7">
                      {t('content.camp1_desc_1')} <br />{t('content.camp1_desc_2')}
                    </figure>
                  </fieldset>
                  <div className="content-image w-[50%] flex-row">
                    <img src="/content_img_04.png" alt="" />
                  </div>
                </div>
                <div className="text-[#2f2f2f] text-right flex flex-row justify-around mt-0">
                  <fieldset className="pr10 w-[50%] flex flex-col justify-center">
                    <figcaption className="text-primary hero-kid-700 text-4xl">
                      {t('content.camp3_title')}
                    </figcaption>
                    <figure className="text-xl pt-7">
                    {t('content.camp3_desc_1')} <br />{t('content.camp3_desc_2')} <br /> {t('content.camp3_desc_3')}
                    </figure>
                  </fieldset>
                  <div className="content-image w-[50%] flex-row">
                    <img src="/content_img_09.jpeg" alt="" />
                  </div>
                </div>
                <div className="text-[#2f2f2f] text-right flex flex-row justify-around mt-0">
                  <fieldset className="pr10 w-[50%] flex flex-col justify-center">
                    <figcaption className="text-primary hero-kid-700 text-4xl">
                      霍比特 SUNSET 电子乐派对
                    </figcaption>
                    <figure className="text-[17px] pt-7">
                      沐浴在苍山自然风光下的电子乐派对<br /> 我们将在黄昏前后的霍比特村小木屋上进行一场别开生面的演出，盛邀大理高水准音乐 DJ 和两只羊驼到场<br />山峦绚烂，晚霞如锦，原生态的天然环境将打造出一场特别而难忘的绝妙体验。
                    </figure>
                  </fieldset>
                  <div className="content-image w-[50%] flex-row">
                    <img src="/content_img_08.jpeg" alt="" />
                  </div>
                </div>
                <div className="text-[#2f2f2f] text-right flex flex-row justify-around mt-0">
                  <fieldset className="pr10 w-[50%] flex flex-col justify-center">
                    <figcaption className="text-primary hero-kid-700 text-4xl">
                      {t('content.camp5_title')}
                    </figcaption>
                    <figure className="text-[17px] pt-7">
                      {t('content.camp5_desc_1')} <br />{t('content.camp5_desc_2')} <br /> {t('content.camp5_desc_3')}
                    </figure>
                  </fieldset>
                  <div className="content-image w-[50%] flex-row">
                    <img src="/content_img_10.jpeg" alt="" />
                  </div>
                </div>
                <div className="text-[#2f2f2f] text-right flex flex-row justify-around mt-0">
                  <fieldset className="pr10 w-[50%] flex flex-col justify-center">
                    <figcaption className="text-primary hero-kid-700 text-4xl">
                      LFG 户外嗨玩营地
                    </figcaption>
                    <figure className="text-[17px] pt-7">
                    一片建设在天然草地上的运动场，我们将邀请专业的户外玩家带领大家一起畅玩，开展飞盘、毽子、橄榄球、电动滑板等运动，以及桌游、棋牌等帐篷内部游戏<br /> 尽情享受苍山洱海风光中的草坪运动，挥洒汗水，结交朋友
                    </figure>
                  </fieldset>
                  <div className="content-image w-[50%] flex-row">
                    <img src="/content_img_13.jpeg" alt="" />
                  </div>
                </div>
                <div className="text-[#2f2f2f] text-right flex flex-row justify-around mt-0">
                  <fieldset className="pr10 w-[50%] flex flex-col justify-center">
                    <figcaption className="text-primary hero-kid-700 text-4xl">
                      {t('content.camp4_title')}
                    </figcaption>
                    <figure className="text-xl pt-7">
                      {t('content.camp4_desc_1')} <br /> {t('content.camp4_desc_2')} 
                    </figure>
                  </fieldset>
                  <div className="content-image w-[50%] flex-row">
                    <img src="/content_img_06.png" alt="" />
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Content
