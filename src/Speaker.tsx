import SpeakerCard from './SpeakerCard'
import { useTranslation, Trans } from 'react-i18next'

const SPEAKERS = [
  ['知县', 'UniPass Founder', 't1.png'],
  ['Kevin Owocki', 'Gitcoin CEO/Founder', 't21.png'],
  ['刘力心', 'Keystone CEO', 't8.png'],
  ['民道', 'dForce Founder', 't5.png'],
]

function SpeakerBlock() {
  const { t } = useTranslation()

  return (
    <div className="box-container pb-10" id="speaker">
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
