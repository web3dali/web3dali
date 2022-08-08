import './App.css'

import Hero from './Hero'
import Footer from './Footer'
import ConnectBtn from './ConnectBtn'
import wamo from './assets/wamo.svg'
import SpeakerCard from './SpeakerCard'

function App() {
  return (
    <div className="App">
      <div className="hero-bg absolute top-0 left-0 w-full h-[980px] -z-1"></div>
      <div className="box-container h-[980px]">
        <div className="h-16 flex-between">
          <div className="brand flex gap-4">
            <img src={wamo} alt="" />
            <span className="text-sm">Summer of WAMO</span>
          </div>
          <div className="menu flex items-center gap-6 text-sm">
            <a href="#">中/EN</a>
            <a href="#">Content</a>
            <a href="#">Venue</a>
            <a href="#">Speakers</a>
            <a href="#">NFT</a>
            <a href="#">SBT</a>
            <a href="#">About</a>
          </div>
          <ConnectBtn />
        </div>
        {/* <!-- Hero --> */}
        <Hero />
      </div>
      <div className="bg-[#6ce4D1] py-32 relative">
        <div className="box-container blockquote relative">
          <div className="text-white text-2xl max-w-[988px] mx-auto">
            <em className="max-w-[1025px]">
              We want to share this diverse creativity of Dali with all our Web3
              friends and invite you all to come here to party, connect and have
              a good time.
            </em>
          </div>
        </div>
        <div className="text-white text-2xl max-w-[988px] mx-auto mt-8">
          <em>
            {' '}
            In the spirit of WAMO, we will be hosting the Summer of WAMO | Dali
            Web3 Fest in this August, 19-20th.
          </em>
        </div>
      </div>

      <div className="content p-8 bg-white h-[1024px]">
        <div className="box-container">
          <h1 className="text-[4rem] text-primary hero-kid-700">Content</h1>
        </div>
      </div>

      <div className="venue p-8 ">
        <div className="box-container">
          <h1 className="text-[4rem] text-accent hero-kid-700">Venue</h1>
          <p className="text-black font-bold">
            DaLi Flowers for Lifetime Farm, 大理市银桥镇大丽线新邑村委会七社8号{' '}
          </p>
          <p className="text-black">
            Since the pandemic, Web3 developer, enthusiasts and digital nomads
            have grown exponentially in Dali. To some extent, Dali has gradually
            become the Web3 center of China, especially for DAOs.
          </p>
          <img src="/wamo_venue.png" className="w-full" alt="" />
        </div>
        <div className="box-container pt-16">
          <h1 className="text-[4rem] text-accent hero-kid-700">Speakers</h1>

          <div className="grid grid-cols-4 gap-x-8">
            <SpeakerCard />
            <SpeakerCard />
            <SpeakerCard />
            <SpeakerCard />
          </div>
        </div>
      </div>

      {/* <!-- Footer --> */}
      <Footer />
    </div>
  )
}

export default App
