
function Projects() {
  const projects = [
    {
      name: "Hospital Management System",
      description: "A backend application to manage patient records.",
      tech: "Node.js • MongoDB • Express.js"
    },
    {
      name: "Lost and Found",
      description: "A platform to report and find lost items.",
      tech: "Node.js • Express • MongoDB"
    },
    {
      name: "Rick & Morty Explorer",
      description: "Explore characters through an external API.",
      tech: "React • API • React Router"
    }
  ];

  return (
    <section id="projects"
      className="bg-[#0b0b12] text-white py-24 px-8">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-12 text-center">
          Featured <span className="text-purple-500">Projects</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div key={index}
              className="bg-white/5 border border-white/10
              rounded-2xl p-7 hover:border-purple-500
              hover:-translate-y-2 transition duration-300">

              <h3 className="text-xl font-bold mb-4">
                {project.name}
              </h3>

              <p className="text-gray-400 mb-6 leading-7">
                {project.description}
              </p>

              <p className="text-purple-400 text-sm">
                {project.tech}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;
