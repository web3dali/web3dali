import SpeakerCard from './SpeakerCard'
import { useTranslation, Trans } from 'react-i18next'

/*
Audrey Tang	阿树	Alen	
DRK Lab 创始人	Mest 创他人，原	Y2Z Ventures 	
imToken 创给人之一	Founder	
Chao	郭宇(日本)	郭宇(Secbit)	
Web3E究整	进休程字费，原字节跳动	安比实轮室创始人	
调深技术专家
CodeforeDAO 与Checks
Finance创始人
Jolestar	Kevin Owocki	李阳	
Starcoin 核心开发着	Gitcoin CEO/Founder	橙皮书创她人	
BlockChain& SmartContract&DAO Maximalism
刘力心	Ming	民道	
Keystone硬件转包 CEO	亮博建筑师，未开Vrch	dForce @始人	
Studio 创e人
潘超	Shawn	
定市放储专业哈测仪	MirrorDAD 贡献者	
SeeDAO 贡献者
WIA
唐晗	知县	
See DAO 发起人	UniPass创哈人	
Cryptoc 发起人
*/

const SPEAKERS = [
  ['知县', 'UniPass 创始人', 't1.png'],
  ['Kevin Owocki', 'Gitcoin CEO/Founder', 't21.png'],
  ['刘力心', 'Keystone CEO', 't8.png'],
  ['民道', 'dForce 创始人', 't5.png'],
]

function SpeakerBlock() {
  const { t } = useTranslation()

  return (
    <div className="box-container pb-10 max-w-[1140px]" id="speaker">
      <h1 className="text-[4rem] text-accent hero-kid-700">
        {t('venue.speakers')}
      </h1>
      <div className="grid grid-cols-4 gap-x-8">
        {SPEAKERS.map((p, i) =>
          <SpeakerCard key={i} name={p[0]} title={p[1]} image={`/speaker/${p[2]}`} />
        )}
      </div>
    </div>
  )
}

export default SpeakerBlock
