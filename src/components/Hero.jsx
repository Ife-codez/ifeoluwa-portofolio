import { motion } from 'framer-motion'

function Hero() {
  return (
    // Changed min-h-screen to min-h-[90vh] to help reduce the massive gap to the next section
    <section id="hero" className="min-h-fit md:min-h-screen flex items-center justify-center px-6 py-20 md:py-0">
      <div className="max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text Content */}
        <div className="space-y-2 ">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-indigo-600 font-medium text-sm tracking-widest uppercase mb-4"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4"
          >
            Ifeoluwa Adelekan
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl font-semibold text-gray-400 mb-6"
          >
            Fullstack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-500 text-lg leading-relaxed mb-10 max-w-xl"
          >
            I build robust, high-performance web applications from the ground up. I focus on writing clean, maintainable code that scales with your vision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-4 flex-wrap"
          >
            <a
              href="#projects"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-indigo-600 hover:text-indigo-600 transition-colors"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>

        {/* Right Side: Animated Tech Cards */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex justify-center items-center relative h-100"
        >
          {/* Decorative Background Glow */}
          <div className="absolute w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />

          {/* Floating Cards - Each one moves slightly differently */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 p-4 bg-white shadow-xl rounded-xl border border-gray-100 flex items-center gap-3 z-20"
          >
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 font-bold">F</div>
            <span className="font-medium text-gray-700">Frontend Architecture</span>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-20 left-0 p-4 bg-white shadow-xl rounded-xl border border-gray-100 flex items-center gap-3 z-10"
          >
            <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600 font-bold">S</div>
            <span className="font-medium text-gray-700">Scalable Backends</span>
          </motion.div>

          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="p-8 bg-indigo-600 rounded-3xl shadow-2xl text-white text-center z-0"
          >
            <div className="text-4xl mb-2">🚀</div>
            <div className="font-bold text-xl">Fullstack</div>
            <div className="text-indigo-100 text-sm">Solutions</div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero