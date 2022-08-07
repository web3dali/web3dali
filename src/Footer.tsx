import wamo from './assets/wamo.svg'

function Footer() {
  return (
    <>
      <div className="box-container flex-between pt-12 pb-8 border-b border-white">
        <div className="flex gap-4">
          <img src={wamo} alt="summer of wamo" />
          <div className="flex flex-col gap-2">
            <div>Summer of WAMO</div>
            <div className="text-sm">A Web3 Fest in Dali</div>
          </div>
        </div>
        <div className="flex items-center gap-x-8">
          <a href="#" className="text-white">
            中 / EN
          </a>
          <a href="#" className="text-white">
            Content
          </a>
          <a href="#" className="text-white">
            Venue
          </a>
          <a href="#" className="text-white">
            Speakers
          </a>
          <a href="#" className="text-white">
            NFT
          </a>
          <a href="#" className="text-white">
            SBT
          </a>
          <a href="#" className="text-white">
            About
          </a>
        </div>
      </div>
      <div className="flex-center text-white pt-8 pb-15">
        @ 2022 All Rights Reserved.
      </div>
    </>
  )
}

export default Footer
