import { useTranslation } from 'react-i18next'

function addIcs() {
  window.open('data:text/calendar;charset=utf8,' + getCalenderFile());
}

const getCalenderFile = () => {
  const startDateTime = "20220819T090000";
  const endDateTime = "20220820T210000";
  const location = "大理市银桥镇大丽线新邑村委会七社8号";
  const title = '瓦猫之夏'
  const description = '大理 Web3 街(gāi)会'
  const icsMSG = 'BEGIN:VCALENDAR\nPRODID:-//Microsoft Corporation//Outlook 16.0 MIMEDIR//EN\nVERSION:2.0\nMETHOD:REQUEST\nX-MS-OLK-FORCEINSPECTOROPEN:TRUE\nBEGIN:VEVENT\nDESCRIPTION:' + description + '\nDTSTART;TZID="China/Beijing":' + startDateTime + '\nDTEND;TZID="China/Beijing":' + endDateTime + '\nLOCATION:' + location + '\nSUMMARY;LANGUAGE=zh-cn:' + title + '\nX-MICROSOFT-CDO-BUSYSTATUS:TENTATIVE\nX-MICROSOFT-CDO-IMPORTANCE:1\nX-MICROSOFT-CDO-INTENDEDSTATUS:BUSY\nX-MICROSOFT-DISALLOW-COUNTER:FALSE\nX-MS-OLK-CONFTYPE:0\nBEGIN:VALARM\nTRIGGER:-PT15M\nACTION:DISPLAY\nDESCRIPTION:Reminder\nEND:VALARM\nEND:VEVENT\nEND:VCALENDAR\n';
  return icsMSG;
}

function Hero() {
  const { t } = useTranslation()
  return (
    <>
      <div className="text-[#FFF] flex flex-col mt-[5%]">
        <div>{t('hero.event')}</div>
        <div className="text-5xl font-bold py-8 hero-kid-800">
          {t('hero.summer')}
        </div>

        <div className="text-4xl font-bold py-5">{t('hero.dali')}</div>
        <div className="text-[1.25rem]">{t('hero.dali')}</div>
        <div className="text-[1.25rem]">{t('hero.farm')}</div>
      </div>
      <div className="flex gap-x-8 pt-12">
        <a href="https://www.huodongxing.com/event/6661890942400" target="blank" className="btn btn-accent px-[2rem]">
          {t('hero.buy')}
        </a>
        <a onClick={addIcs} className="btn btn-accent btn-accent-lg">
          {t('hero.calendar')}
        </a>
      </div>
    </>
  )
}

export default Hero
