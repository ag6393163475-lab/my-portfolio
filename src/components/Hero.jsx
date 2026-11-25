
function Hero() {
  return (
    <section id="home"
      className="min-h-screen bg-[#0b0b12]
      flex flex-col justify-center items-center
      text-center px-6 pt-24">

      <p className="text-purple-400 mb-4 tracking-widest uppercase text-sm">
        Welcome to my portfolio
      </p>

      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
        Hi, I'm <span className="text-purple-500">Anshika Gupta</span>
      </h1>

      <h2 className="text-xl md:text-3xl text-gray-300 mb-6">
        Full Stack Developer | AI/ML Enthusiast
      </h2>

      <p className="max-w-2xl text-gray-400 leading-8 mb-8">
        I build web applications, solve challenging
        problems and explore the world of Artificial
        Intelligence and Machine Learning.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <a href="#projects"
          className="bg-purple-600 hover:bg-purple-700
          text-white px-7 py-3 rounded-full transition">
          View My Work
        </a>

        <a href="#contact"
          className="border border-purple-500 text-purple-400
          hover:bg-purple-500 hover:text-white
          px-7 py-3 rounded-full transition">
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Hero;
