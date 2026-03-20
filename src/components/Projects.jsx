import { motion } from 'framer-motion';
import { projects } from '../data/projects'; // Adjust path if needed

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each project card (0.2s)
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

function Projects() {
  return (
    <section id="projects" className="py-14 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Projects</h2>
          <p className="text-gray-500">A collection of projects I've built or contributed to.</p>
        </motion.div>

        {/* The Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} // Trigger slightly before it hits center
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10 }} // Lift effect on hover
              className="group bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-indigo-200 transition-colors shadow-sm"
            >
              {/* Project Image Placeholder */}
              <div className="aspect-video bg-gray-200 rounded-lg mb-6 overflow-hidden flex items-center justify-center">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110" 
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                    No Image Available
                  </div>
                )}
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tag) => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex items-center gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                >
                  Live Demo →
                </a>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-gray-500 hover:text-gray-700"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;