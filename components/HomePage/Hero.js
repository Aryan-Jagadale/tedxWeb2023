export default function Hero() {
  return (
    <div className="bg-black flex justify-center items-center relative"
    >
      <video src="hero.mp4" autoPlay muted loop className="xl:h-[90vh] w-screen xl:object-cover">
      </video>
      <img src="stamp.png" className="absolute bottom-4 right-0 w-16 md:w-24 xl:w-32" />
    </div>
  )
}
