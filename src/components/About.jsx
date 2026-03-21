import { motion } from 'framer-motion';
import myImage from '../assets/my-photo.png';

function About() {
  
  return (
    <section id="about" className="py-14 px-6 bg-gray-50 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        {/* We use whileInView to trigger animation when the user scrolls here */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} // Only animate once
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side: Image Placeholder */}
          <div className="aspect-square bg-indigo-100 rounded-2xl overflow-hidden">
            <img 
              src={myImage} 
              alt="ife-headshot" 
              className="w-full h-full object-cover object-top" 
            />
          </div>

          {/* Right Side: Text */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">About Me</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              I am a passionate Fullstack Developer based in Nigeria. I love 
              transforming complex problems into into well-structured systems, combining clean frontend architecture with reliable backend logic. 
            </p>
            <p className="text-gray-600 leading-relaxed">
              When I'm not coding, you'll find me exploring new web technologies or 
              contributing to open-source projects. My goal is to always build 
              applications that are functional and easy to use.
            </p>
            
            {/* Fun Fact with a hover animation */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="mt-8 p-4 bg-white rounded-lg shadow-sm border-l-4 border-indigo-600"
            >
              <p className="text-sm italic text-gray-500">
                "Code is like humor. When you have to explain it, it’s bad."
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;