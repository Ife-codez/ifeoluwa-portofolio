import { motion } from 'framer-motion';

const experience = [
  {
    company: "Aerglo-Technology.",
    role: "Frontend Developer",
    period: "2025 - Present",
    description: "Built and maintained responsive user interfaces, integrated APIs, and implemented structured error handling for a production web application.",
  },
];

const education = [
  {
    school: "Federal University of Agriculture Abeokuta",
    degree: "BSc in Computer Science",
    period: "2021 - 2025",
  },
];

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

function Resume() {
  return (
    <section id="resume" className="py-14 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Experience Column */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <span className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm">1</span>
              Experience
            </h2>
            <div className="space-y-8 border-l-2 border-gray-200 ml-4 pl-8 relative">
              {experience.map((job, index) => (
                <motion.div 
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-10.25 top-1 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm" />
                  
                  <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">{job.period}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-1">{job.role}</h3>
                  <p className="text-gray-500 font-medium mb-3">{job.company}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{job.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <span className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm">2</span>
              Education
            </h2>
            <div className="space-y-8 border-l-2 border-gray-200 ml-4 pl-8 relative">
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={itemVariants}
                  className="relative"
                >
                  <div className="absolute -left-10.25 top-1 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm" />
                  
                  <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">{edu.period}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-1">{edu.degree}</h3>
                  <p className="text-gray-500 font-medium">{edu.school}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Download Button */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12"
            >
              <a 
                href="/your-resume.pdf" 
                download 
                className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors shadow-lg"
              >
                Download Full CV
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Resume;