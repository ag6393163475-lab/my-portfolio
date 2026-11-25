
function Skills() {
  const skills = [
    "C++", "Python", "JavaScript", "React.js",
    "Node.js", "Express.js", "MongoDB",
    "HTML", "CSS", "Git & GitHub", "DSA", "OOPS"
  ];

  return (
    <section id="skills"
      className="bg-[#0b0b12] text-white py-24 px-8">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold mb-12 text-center">
          Technical <span className="text-purple-500">Skills</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          {skills.map((skill, index) => (
            <div key={index}
              className="bg-white/5 border border-white/10
              rounded-xl p-6 text-center text-gray-300
              hover:border-purple-500 hover:text-purple-400
              hover:-translate-y-2 transition duration-300">

              {skill}

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Skills;
