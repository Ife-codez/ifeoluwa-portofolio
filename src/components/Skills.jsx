import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Nuxt.js", "Tailwind CSS", "JavaScript (ES6+)", "Framer Motion"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"]
  },
  {
    title: "Tools & Others",
    skills: ["Git & GitHub", "Vite", "Postman", "Figma", "Vercel"]
  }
];

// Animation variants for the staggered appearance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 } 
  },
};

function Skills() {
  return (
    <section id="skills" className="py-14 px-6 bg-white scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full" />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-10"
        >
          {skillCategories.map((category, idx) => (
            <div key={idx} className="space-y-6">
              <h3 className="text-lg font-bold text-gray-800 border-b border-gray-100 pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "#4f46e5", 
                      color: "#fff" 
                    }}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium transition-colors cursor-default shadow-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;