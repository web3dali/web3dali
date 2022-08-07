function SpeakerCard() {
  return (
    <>
      <div className="bg-white text-black items-center rounded-2xl flex flex-col py-6 px-20">
        <img
          className="rounded-full w-32 h-32"
          src="https://api.lorem.space/image/album?w=150&h=150"
          alt=""
        />
        <div className="text-xl py-6 font-bold">User Name</div>
        <div className="text-xl pb-16">Introduce</div>
        <div className="text-xl">@twitter</div>
      </div>
    </>
  )
}

export default SpeakerCard
