
function About() {
  return (
    <section id="about"
      className="bg-[#0b0b12] text-white py-24 px-8">

      <div className="max-w-4xl mx-auto">

        <h2 className="text-4xl font-bold mb-8">
          About <span className="text-purple-500">Me</span>
        </h2>

        <div className="bg-white/5 border border-white/10
          rounded-2xl p-8 hover:border-purple-500/50
          transition">

          <p className="text-gray-300 leading-8">
            I am Anshika Gupta, a Computer Science student
            specializing in AI/ML. I am passionate about
            Full Stack Development, Data Structures and
            Algorithms, and Artificial Intelligence.
          </p>

          <p className="text-gray-300 leading-8 mt-4">
            Currently, I am improving my problem-solving
            skills and building real-world projects
            using modern technologies.
          </p>

        </div>
      </div>
    </section>
  );
}

export default About;
