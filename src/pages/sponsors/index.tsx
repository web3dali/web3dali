import { useState } from 'react'
import { useTranslation, Trans } from 'react-i18next'
import './index.css'
import i18n from 'i18next'

export const About = () => {
  const [faqActive, setFaqActive] = useState(10)
  const faqClick = (i: number) => {
    if (i === faqActive) {
      setFaqActive(10)
      return
    }
    setFaqActive(i)
  }
  const { t } = useTranslation()
  // sponsors pt-100 mt--58 bg-white
  return (
    <div className="sponsors mt--58">
      <div className="sponsors_bg1"></div>
      {/* <div style={{ height: '25rem' }} ></div> */}

      <div className="sponsors_inner pb-30 ">
        <div className="box-container pt-50">
          <div id="sponsor"></div>
          <h2 className="text-[2.5rem] about-title hero-kid-700 text-[#000] mt-50">
            {t('sponsors.title')}
          </h2>
          <div className="sponsor_faq box-container mt-15 pt-6  pb-7 ">
            <div className="faq_list pt-3 pl-12 pr-12">
              <div
                className="faq_li text-[#000000] text-[1.3rem]"
                style={{
                  maxHeight: faqActive === 0 ? '75rem' : '2.6rem',
                  overflow: 'hidden'
                }}
                onClick={() => faqClick(0)}
              >
                <div className="flex flex-between inter-medium">
                  {t('sponsors.fq_title1')}
                  <img
                    className={faqActive === 0 ? 'roate-180' : 'roate-0'}
                    src="./arrow.png"
                    alt=""
                  />
                </div>
                {i18n.language == 'en' ? (
                  <div className="pt-2">
                    <p>
                      We welcome you to join us as a sponsor. In a decentralized
                      world like Web3, our sponsorship is not only a business
                      relationship, but also a meeting of values. Every
                      sponsorship you make will have a full business return, but
                      it also adds to an open, diverse, and free community like
                      Web3.
                    </p>
                    <p>
                      The conference reaches out to top tech talent,
                      entrepreneurs, investors, incubator and project teams, DAO
                      practitioners, digital immigrants, artists, and all kinds
                      of new and free people. They are in deep conversation,
                      connected and co-creative. It's a great place to market,
                      and a large number of quality, homogenous participants
                      will become your potential clients and partners. The
                      initial business incubation will be created here, just as
                      'Twitter' became one of the most popular social media apps
                      in the world when it hit the "South by Southwest Festival"
                      and drove a huge increase in user traffic. We also want to
                      create a hot business atmosphere to make everything
                      happen.
                    </p>
                    <p>
                      Unlike other Web3 conferences in China, which are purely
                      technological discussions, this conference is a
                      combination of technology, art and life. We have set up
                      five camps: Dali Community Camp, Theme Camp, Art Camp,
                      Sponsorship Camp and Co-creation Bazaar. We believe that
                      technology should not be cold, but should be warm and
                      combined with humanity. We respect nature and humanity,
                      cherish the encounter of reason and sensibility, and
                      expect technology and art to collide and mingle here to
                      create novelty and fun. Therefore, the participants of
                      this conference will be more diversified and the influence
                      will be more extensive.
                    </p>{' '}
                    <p>
                      The conference is held in Dali. Dali, with its suitable
                      climate and beautiful natural environment, attracts many
                      tourists from abroad and various Web3 practitioners and
                      artists stationed here. The community culture of Dali is
                      irreplaceable in China, it is diverse, tolerant and free,
                      and it is the "Dali California" in everyone's heart. Now,
                      Dali has developed a community atmosphere where Web3,
                      digital nomad lifestyle and local culture are fused. In a
                      sense, Dali is becoming one of the hubs of China's Web3
                      and especially DAO communities. Nature and technology,
                      ancient and innovative, we hope that this conference will
                      turn Dali into a stage of fusion.
                    </p>
                    <p>
                      Tile Cat Summer Preparers is not a commercial company for
                      profit, we are an IRL working group running as DAO,
                      discussing and sharing the work together through voluntary
                      collaboration. Your sponsorship will help us fund.
                    </p>
                    <ul className="font-bold text-xl ml--5">
                      <li>Events for 500-1000 people</li>
                      <li>
                        Venue/camp and stage space/reception break area for the
                        street party
                      </li>
                      <li>
                        Audio-visual support (projection, sound and other
                        equipment, IT staff)
                      </li>
                      <li>Performances by musicians and artists</li>
                      <li>A wonderful welcome party</li>
                    </ul>
                  </div>
                ) : (
                  <div className="pt-2">
                    <p>
                      欢迎您加入我们，成为我们的赞助商。在Web3这样一样去中心化的世界里，我们和赞助伙伴的合作不仅是商业上的往来，更是价值观的交汇。您的每一笔赞助将获得全面的商业回报，同时它也在为Web3
                      这样一个开放、多元、自由的社区添砖加瓦。
                    </p>
                    <p>
                      本次大会覆盖人群包括顶尖的技术人才、创业者、投资者、孵化器和项目方团队、DAO
                      的践行者、数字移民、艺术家和各类新奇自由的人士。他们彼此深度对话、相互联系和共同创造。这里是市场营销的佳地，大量优质、同频的参与者将成为您的潜在客户和合作伙伴。最初的商业孵化将在这里被创造，如同‘Twitter’在“西南偏南艺术节”上一鸣惊人，带动用户流量大幅增加后最终成为了全球最受欢迎的社交软件之一。我们也想打造的火热商业氛围，让一切发生。
                    </p>
                    <p>
                      不同于国内其他Web3大会的纯科技讨论，本次大会是科技与艺术、生活的结合。我们共设立了五大营地：大理社区营地、主题营地、艺术营地、赞助营地和共创集市。我们相信科技不应该是冰冷的，而应该是有温度的、和人性相结合的。我们尊重自然、尊重人性，珍惜理性和感性的交锋，并期待科技和艺术在这里碰撞交融出新奇和趣味。也因此，本次大会的参与者会更加多元，影响力也更为广泛。
                    </p>{' '}
                    <p>
                      本次大会选择在大理举办。大理以其适宜的气候和优美的自然环境吸引了国外内众多游客，也吸引了驻扎在此的各类Web3从业者和艺术家。大理的社区文化在国内无可取代，这里多元、包容、自由，是大家心中的“大理福尼亚”。现在，大理已经形成了Web3
                      、数字游民生活方式与本地文化融合的社区氛围。从某种意义上说，大理逐渐成为中国
                      Web3 ，尤其是 DAO
                      社区的中心之一。自然与科技，古老与创新，我们希望这次的大会能将大理变成融合的舞台。
                    </p>
                    <p>
                      瓦猫之夏筹备方不是一个以盈利为目的商业公司，我们是一个IRL以DAO运行的工作小组，通过志愿协作的方式，共同讨论和分担工作。您的赞助将帮助我们资助：
                    </p>
                    <ul className="font-bold text-xl ml--5">
                      <li>500-1000人的活动</li>
                      <li>街会的场地/营地和舞台空间/酒会休息区</li>
                      <li>视听支持（投影、音响等设备，IT工作人员）</li>
                      <li>音乐家和艺术家的演出</li>
                      <li>一个精彩的欢迎派对</li>
                    </ul>
                  </div>
                )}
              </div>

              <div
                className="faq_li text-[#000000] text-[1.3rem] mt-8"
                style={{
                  maxHeight: faqActive === 1 ? '105rem' : '2.6rem',
                  overflow: 'hidden'
                }}
                onClick={() => faqClick(1)}
              >
                <div className="flex flex-between inter-medium">
                  {t('sponsors.fq_title2')}
                  <img
                    className={faqActive === 1 ? 'roate-180' : 'roate-0'}
                    src="./arrow.png"
                    alt=""
                  />
                </div>
                {i18n.language == 'en' ? (
                  <div className="pt-2">
                    <h3 className="text-[1.2rem]  hero-kid-700 text-[#000] mt-10">
                      Diamond level sponsorship - for maximum marketing impact
                    </h3>
                    <p>
                      Diamond level sponsorships offer the highest visibility,
                      deepest integration opportunities, and seamless
                      promotional exposure by making your brand a top
                      promotional partner with WAGMI Summer throughout the
                      event.
                    </p>
                    <h3 className="text-[1.2rem]  hero-kid-700 text-[#000] mt-10">
                      WAGMI Platinum Level Sponsorship - Target Your Audience
                    </h3>
                    <p>
                      Platinum level sponsorship will give your brand maximum
                      exposure and engagement opportunities throughout the
                      Summer of Wagyu Cat street fair or specific themed camps
                      incorporated into the street fair promotional activities.
                    </p>
                    <h3 className="text-[1.2rem]  hero-kid-700 text-[#000] mt-10">
                      LFG Gold & Booth Level Sponsorship - Generate buzz with
                      uniquely positioned programs
                    </h3>
                    <p>
                      Waccat Summer offers an autonomous showcase that aligns
                      with your brand marketing objectives.
                    </p>
                    <h3 className="text-[1.2rem]  hero-kid-700 text-[#000] mt-10">
                      Customized Opportunities
                    </h3>
                    <p>
                      From official parties to lounges and art shows, Summer of
                      the Tile Cats offers a variety of customizable marketing
                      assets to meet your brand's needs and goals. Contact us to
                      develop a marketing plan that gets results and meets your
                      business goals.
                    </p>
                    <h3 className="text-[1.2rem]  hero-kid-700 text-[#000] mt-10">
                      PARTY Exclusive Sponsorship
                    </h3>
                    <p>
                      As a key promotional partner, special sponsorships and
                      exclusivity can be offered including within certain
                      categories. These categories include (but are not limited
                      to)
                    </p>
                    <ul className="font-bold text-xl ml--5">
                      <li>Tents and outdoor camping facilities</li>
                      <li>Audio equipment</li>
                      <li>Filming equipment</li>
                      <li>Fast food restaurants and casual dining</li>
                      <li>Craft beer</li>
                      <li>General consumer electronics</li>
                      <li>Hotel chains</li>
                      <li>Snacks and sweets (desserts)</li>
                      <li>Coffee</li>
                      <li>
                        Multiple non-alcoholic beverage categories, including
                      </li>

                      <li className="circle_li">Energy drinks</li>
                      <li className="circle_li">Carbonated soft drinks</li>
                      <li className="circle_li">Teas</li>
                      <li className="circle_li">Coconut water</li>
                      <li className="circle_li">
                        Other non-alcoholic beverages
                      </li>
                      <li className="circle_li">Bottled water</li>
                      <li>Wireless/Telecommunication Providers</li>
                      <li>Mobile device manufacturers</li>
                      <li>Distilled spirits</li>
                      <li>Wine</li>
                      <li>Car rental, car sharing and ground transportation</li>
                      <li>Travel services and vacation rentals</li>
                      <li>Charging stations</li>
                    </ul>
                    <p className="mt-8">
                      Warning: privacy protection, beware of scams.
                    </p>

                    <p>
                      Tile Cat Summer does not sell or transfer attendee
                      information to third parties for commercial purposes. Any
                      information that makes these claims is not associated with
                      the Street Fair, so please be aware of suspected
                      information scams.
                    </p>
                  
                  </div>
                ) : (
                  <div className="pt-2">
                    <h3 className="text-[1.2rem]  hero-kid-700 text-[#000] mt-10">
                      钻石级赞助 — 实现最大的营销影响
                    </h3>
                    <p>
                      钻石级赞助提供最高的可见度、最深入的整合机会，并通过使您的品牌与瓦猫之夏在整个活动中成为顶级推广合作伙伴，提供无缝的推广曝光。
                    </p>
                    <h3 className="text-[1.2rem]  hero-kid-700 text-[#000] mt-10">
                      WAGMI 白金级赞助 — 锁定您的目标受众
                    </h3>
                    <p>
                      白金级赞助将使您的品牌在整个瓦猫之夏街会或特定的主题营地期间获得最大的曝光和参与机会，并纳入街会宣传活动中。
                    </p>
                    <h3 className="text-[1.2rem]  hero-kid-700 text-[#000] mt-10">
                      LFG 黄金及展位级赞助 — 通过独特定位的方案引起轰动
                    </h3>
                    <p>
                      瓦猫之夏提供了自主的展示平台，使其与您的品牌营销目标相一致。
                    </p>
                    <h3 className="text-[1.2rem]  hero-kid-700 text-[#000] mt-10">
                      定制机会
                    </h3>
                    <p>
                      从官方派对到休息室和艺术演出，瓦猫之夏提供各种可定制的营销资产，以满足您的品牌需求和目标。请联系我们，制定一个能取得效果并满足您业务目标的营销计划。
                    </p>
                    <h3 className="text-[1.2rem]  hero-kid-700 text-[#000] mt-10">
                      PARTY 专项赞助商
                    </h3>
                    <p>
                      作为重要的推广合作伙伴，可以提供包括某些类别内的专项赞助和独家代理权等。这些类别包括（但不限于）：
                    </p>
                    <ul className="font-bold text-xl ml--5">
                      <li>帐篷和户外露营设施</li>
                      <li>音响设备</li>
                      <li>拍摄设备</li>
                      <li>快餐店和休闲餐厅</li>
                      <li>普通消费电子产品</li>
                      <li>连锁酒店</li>
                      <li>零食和糖果（甜点）</li>
                      <li>咖啡</li>
                      <li>多个非酒精饮料类别，包括</li>
                      <li className="circle_li">能量饮料</li>
                      <li className="circle_li">碳酸软饮料</li>
                      <li className="circle_li">茶类</li>
                      <li className="circle_li">椰子水</li>
                      <li className="circle_li">其他不含酒精的饮料</li>
                      <li className="circle_li">瓶装水</li>
                      <li>无线/电信供应商</li>
                      <li>移动设备制造商</li>
                      <li>蒸馏酒</li>
                      <li>葡萄酒</li>
                      <li>汽车租赁、共享汽车和地面运输</li>
                      <li>旅游服务和假期租赁</li>
                      <li>充电站</li>
                    </ul>
                    <p className="mt-8">警示：隐私保护，谨防受骗</p>

                    <p>
                      瓦猫之夏不会出于商业目的向第三方出售或转让参会者信息。任何提出这些主张的信息都与街会无关，请警惕可疑的信息诈骗。
                    </p>
                  </div>
                )}
              </div>

              <div
                className="faq_li text-[#000000] text-[1.3rem] mt-8"
                style={{
                  maxHeight: faqActive === 2 ? '15rem' : '2.6rem',
                  overflow: 'hidden'
                }}
                onClick={() => faqClick(2)}
              >
                <div className="flex flex-between inter-medium">
                  {t('sponsors.fq_title3')}
                  <img
                    className={faqActive === 2 ? 'roate-180' : 'roate-0'}
                    src="./arrow.png"
                    alt=""
                  />
                </div>
                <div className="pt-2">
                  <p style={{ lineHeight: '1.5' }}>
                    {t('sponsors.fq_content_3_1')}
                    <a
                      style={{
                        cursor: 'pointer',
                        textDecoration: 'underline',
                        color: '#000'
                      }}
                      target="_blank"
                      href="https://mirror.xyz/web3dali.eth/crowdfunds/0xa597fc52f7D46790ff204ca4D741143e087AA05b"
                    >
                      {t('sponsors.fq_content_3_2')}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-[2.5rem] about-title hero-kid-700 text-[#000] mt-30">
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
            <div className="sponsors-img">
              <img src="/z2.png" alt="" />
            </div>
            <div className="sponsors-img-empty"></div>
          </div>
          <div id="media" className="pt-45"></div>
          <h2 className="text-[2.5rem] about-title hero-kid-700 text-[#000] ">
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

            <div className="sponsors-img"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
