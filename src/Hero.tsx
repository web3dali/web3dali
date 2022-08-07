function Hero() {
  return (
    <>
      <div className="flex flex-col mt-48">
        <div>Event</div>
        <div className="text-5xl font-bold py-8 hero-kid-800">
          Summer of WAMO
        </div>
        <div className="text-4xl font-bold py-5">Dali Web3 Fest</div>
        <div className="text-[1.25rem]">August 19-20th, 2022</div>
        <div className="text-[1.25rem]">@DaLi Flowers of Lifetime Farm</div>
      </div>
      <div className="flex gap-x-8 pt-12">
        <a href="" className="btn btn-accent">
          Buy ticket
        </a>
        <a href="" className="btn btn-accent btn-accent-lg">
          Add to Calendar
        </a>
      </div>
    </>
  )
}

export default Hero
