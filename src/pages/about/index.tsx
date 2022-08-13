import { useState } from 'react'
import { useTranslation, Trans } from 'react-i18next'
import './index.css'
import i18n from 'i18next'

export const About = () => {
  const { t } = useTranslation()
  const [faqActive, setFaqActive] = useState(10)
  const faqClick = (i: number) => {
    if (i === faqActive) {
      setFaqActive(10)
      return
    }
    setFaqActive(i)
  }
  return (
    <>
      <div id="about" className="about  bg-white">
        <div className="about_bg1"></div>
        <div className="about_inner pt-50 pb-120">
          <div className="box-container ">
            <h1 className="text-[4rem] about-title hero-kid-700">
              {t('about.title')}
            </h1>
            {i18n.language == 'en' ? (
              <>
                <div className="mt-20 flex flex-between flex-start">
                  <div className="content_left">
                    <h2 className="text-[2rem] text-accent">
                      {t('about.small_title_1')}
                    </h2>
                    <div className="text-[#000000] text-2xl  mt-12">
                      <p>{t('about.small_content_1')}</p>{' '}
                      <p>{t('about.small_content_2')}</p>{' '}
                      <p>{t('about.small_content_3')}</p>{' '}
                      <p>{t('about.small_content_4')}</p>{' '}
                      <p>{t('about.small_content_5')}</p>{' '}
                      <p>{t('about.small_content_6')}</p>{' '}
                      <p>{t('about.small_content_7')}</p>{' '}
                      <p>{t('about.small_content_8')}</p>
                    </div>
                  </div>
                  <div className="content_right">
                    <div>
                      <h2 className="text-[2rem] text-accent">
                        {t('about.small_title_2')}
                      </h2>
                      <div className="text-[#000000] text-2xl  mt-12">
                        <p>
                          <span className="text-[#000000] text-2xl fw">
                            {t('about.small_content_title_1')}
                          </span>{' '}
                          {t('about.small_content_contet_1')}
                        </p>
                        <p>
                          <span className="text-[#000000] text-2xl fw">
                            {t('about.small_content_title_2')}
                          </span>{' '}
                          {t('about.small_content_contet_2')}
                        </p>
                        <p>
                          <span className="text-[#000000] text-2xl fw">
                            {t('about.small_content_title_3')}
                          </span>{' '}
                          {t('about.small_content_contet_3')}
                        </p>
                        <p>
                          <span className="text-[#000000] text-2xl fw">
                            {t('about.small_content_title_4')}
                          </span>{' '}
                          {t('about.small_content_contet_4')}
                        </p>
                      </div>
                    </div>
                    <div className="mt-12">
                      <h2 className="text-[2rem] text-accent">
                        {t('about.small_title_5')}
                      </h2>
                      <div className="text-[#000000] text-2xl  mt-12">
                        <p>
                          {t('about.small_content_contet_5')}
                          <br />• is based on a Dali mythical creature — tile
                          cat;
                          <br />• represents the spirit of positive
                          externalities;
                          <br /> • embodiment of reason, consensus, open source
                          and optimism.
                        </p>

                        <p>
                          {' '}
                          We hope the sprite WAMO will help humanity grow by
                          aligning our incentives towards the wellbeing of each
                          other, facilitating co-creation, better coordination,
                          and positive-sum outcomes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className=" mt-16">
                  <h2 className="text-[2rem] text-accent">
                    {t('about.small_title_1')}
                  </h2>
                  <div className="text-[#000000] text-2xl mx-auto mt-8">
                    <p>
                      <em> {t('about.small_content_1')}</em>
                    </p>
                    <p>
                      <em> {t('about.small_content_2')}</em>
                    </p>
                    <p>
                      <em> {t('about.small_content_3')}</em>
                    </p>
                  </div>
                </div>
                <div className=" mt-16">
                  <h2 className="text-[2rem] text-accent">
                    {t('about.small_title_2')}
                  </h2>
                  <div className="text-[#000000] text-2xl mx-auto mt-8">
                    <p>
                      <em> {t('about.small_content_4')}</em>
                    </p>
                    <p>
                      <em> {t('about.small_content_5')}</em>
                    </p>
                    <p>
                      <em> {t('about.small_content_6')}</em>
                    </p>
                  </div>
                </div>
              </>
            )}

            <div className="mt-32">
              <h2 className="text-[2rem] text-accent">
                {t('about.small_title_3')}
              </h2>
              <div className="flex flex-between mt-16">
                <img className="w-[30%]" src="/about_img_1.png" alt="" />
                <img className="w-[30%]" src="/about_img_2.png" alt="" />
                <img className="w-[30%]" src="/about_img_3.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="faq box-container mt--80 pt-6  pb-7 bg-white">
        <h2 className="text-[2rem] text-accent pl-12 pr-12">
          {t('about.small_title_4')}
        </h2>
        <div className="faq_list pt-3 pl-12 pr-12">
          <div
            className="faq_li text-[#000000] text-[1.3rem]"
            style={{
              maxHeight: faqActive === 0 ? '35rem' : '2.6rem',
              overflow: 'hidden'
            }}
            onClick={() => faqClick(0)}
          >
            <div className="flex flex-between inter-medium">
              活动形式和内容？
              <img
                className={faqActive === 0 ? 'roate-180' : 'roate-0'}
                src="./arrow.png"
                alt=""
              />
            </div>
            <div className="pt-2">
              <p>在几千平的草地上设置包括几大主题营地。</p>
              <ul className="font-bold text-xl">
                <li>
                  OG主会场和WAGMI主题营地：提供大咖云集的主会场和各个不同主题的主题营地（分会场），包括但不限于DAO、NFT、DID、数字游民、以太坊2.0、GameFi等十几个主题
                </li>
                <li>
                  自然音乐艺术DEGEN部落：自然音乐、装置艺术、即兴、和NFT工作坊等。
                </li>
                <li>
                  LFG户外嗨玩营地：提供飞盘、滑板、橄榄球等户外玩乐和房车营地
                </li>
                <li>IRL街会集市：来自云南当地30+摊主各种吃喝玩乐手工艺品等</li>
                <li>
                  霍比特SUNSET电子乐派对：在地DJ和音乐人的Live演出，蹦迪到深夜
                </li>
                <li>
                  大理文化&社区BUIDL营地：大理众多别具特色的青年组织、文化沙龙和工作坊在此聚集
                </li>
              </ul>
              <p>
                活动开始前一周会有各种项目方和主理人举办的预热活动在大理各地举行。
              </p>
              <p>
                活动前一晚会有邀请嘉宾和赞助商伙伴参与的特色酒会，供大家互动。
              </p>
            </div>
          </div>

          <div
            className="faq_li text-[#000000] text-[1.3rem] mt-8"
            style={{
              maxHeight: faqActive === 1 ? '10rem' : '2.6rem',
              overflow: 'hidden'
            }}
            onClick={() => faqClick(1)}
          >
            <div className="flex flex-between inter-medium">
              活动举办具体时间 以及其他备注信息
              <img
                src="./arrow.png"
                alt=""
                className={faqActive === 1 ? 'roate-180' : 'roate-0'}
              />
            </div>
            <div className="pt-2">
              <p>
                活动会在8月19、20日两天举行，不过从8月10日开始，我们在大理就有一系列的预热活动
              </p>
            </div>
          </div>
          <div
            className="faq_li text-[#000000] text-[1.3rem] mt-8"
            style={{
              maxHeight: faqActive === 3 ? '10rem' : '2.6rem',
              overflow: 'hidden'
            }}
            onClick={() => faqClick(3)}
          >
            <div className="flex flex-between inter-medium">
              在哪里可以找到正式报名链接？
              <img
                src="./arrow.png"
                alt=""
                className={faqActive === 3 ? 'roate-180' : 'roate-0'}
              />
            </div>
            <div className="pt-2">
              <p>
                <a href="https://www.huodongxing.com/event/6661890942400">
                  活动行购票链接
                </a>
              </p>
            </div>
          </div>
          <div
            className="faq_li text-[#000000] text-[1.3rem] mt-8"
            style={{
              maxHeight: faqActive === 4 ? '10rem' : '2.6rem',
              overflow: 'hidden'
            }}
            onClick={() => faqClick(4)}
          >
            <div className="flex flex-between inter-medium">
              活动报名费用多少钱？有当日票吗，有优惠票吗
              <img
                src="./arrow.png"
                alt=""
                className={faqActive === 4 ? 'roate-180' : 'roate-0'}
              />
            </div>
            <div className="pt-2">
              <p>
                活动报名费用为499元/张，
                没有当日票，只有2天通票，以活动行上面的提醒信息为准
              </p>
            </div>
          </div>
          <div
            className="faq_li text-[#000000] text-[1.3rem] mt-8"
            style={{
              maxHeight: faqActive === 5 ? '10rem' : '2.6rem',
              overflow: 'hidden'
            }}
            onClick={() => faqClick(5)}
          >
            <div className="flex flex-between inter-medium">
              如果我报名共建者后，就可以免门票吗？
              <img
                src="./arrow.png"
                alt=""
                className={faqActive === 5 ? 'roate-180' : 'roate-0'}
              />
            </div>
            <div className="pt-2">
              <p>
                我们为每一位核心共建者都提供了免费门票，详情可以咨询瓦猫之夏团队。
              </p>
              <p>
                主题营地的共建者请联系相关营地主理人，以确定自己是否可以得到免费票/折扣票。
              </p>
            </div>
          </div>

          <div
            className="faq_li text-[#000000] text-[1.3rem] mt-8"
            style={{
              maxHeight: faqActive === 6 ? '10rem' : '2.6rem',
              overflow: 'hidden'
            }}
            onClick={() => faqClick(6)}
          >
            <div className="flex flex-between inter-medium">
              怎么提前认识其他报名的小伙伴？
              <img
                src="./arrow.png"
                alt=""
                className={faqActive === 6 ? 'roate-180' : 'roate-0'}
              />
            </div>
            <div className="pt-2">
              <p>
                通过受邀加入我们的预热大群。或者加入Telegram官方群：https://t.me/Web3Dali
              </p>
            </div>
          </div>

          <div
            className="faq_li text-[#000000] text-[1.3rem] mt-8"
            style={{
              maxHeight: faqActive === 7 ? '21rem' : '2.6rem',
              overflow: 'hidden'
            }}
            onClick={() => faqClick(7)}
          >
            <div className="flex flex-between inter-medium">
              作为项目方/机构有哪些合作方式？
              <img
                src="./arrow.png"
                alt=""
                className={faqActive === 7 ? 'roate-180' : 'roate-0'}
              />
            </div>
            <div className="pt-2">
              <p>目前的合作方式有： </p>
              <p>商业赞助：通过有偿赞助获得会务、宣传曝光、展位使用等权益 </p>
              <p>
                {' '}
                捐赠：大会筹备以去中心化的形式组织，不以盈利为目的，希望你为我们捐赠经费以覆盖场地、设备、演出等项目的开支，共同建设社区
              </p>
              <p>
                {' '}
                议程提报：任何有想法的共建者都可以提报自己想要在主题营地分享的内容和形式。
              </p>
              <p>
                {' '}
                志愿者工作：我们始终欢迎你以个人身份加入大会筹备组，贡献自己的一份力量。报名信息可见链接
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
