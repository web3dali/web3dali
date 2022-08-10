function SpeakerCard(props: any) {
  const { name, title, image } = props;
  return (
    <>
      <div className="bg-white text-black items-center rounded-2xl flex flex-col py-6 px-6">
        <img
          className="rounded-full w-32 h-32"
          src={image}
          alt=""
        />
        <div className="text-xl py-6 font-bold">{name}</div>
        <div className="text-xl pb-4">{title}</div>
      </div>
    </>
  )
}

export default SpeakerCard
