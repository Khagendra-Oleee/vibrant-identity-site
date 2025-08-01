import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

const Hero = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">
              Welcome to my portfolio
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-primary">
              Creative Developer &amp; Designer
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl">
              I craft beautiful and functional digital experiences, combining code and creativity to build remarkable products.
            </p>
            <div className="mt-8">
              <button
                onClick={() => setShowResume(true)}
                className="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-accent hover:bg-accent/90 transition-colors duration-200"
              >
                View Resume
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square">
              <motion.div 
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(212, 175, 55, 0.3), 0 0 60px rgba(212, 175, 55, 0.1)",
                    "0 0 40px rgba(212, 175, 55, 0.5), 0 0 100px rgba(212, 175, 55, 0.2)",
                    "0 0 20px rgba(212, 175, 55, 0.3), 0 0 60px rgba(212, 175, 55, 0.1)"
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/30 to-primary/30"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                  scale: [0.98, 1, 0.98],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div 
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-accent/30"
                animate={{
                  borderColor: ["rgba(212, 175, 55, 0.3)", "rgba(212, 175, 55, 0.6)", "rgba(212, 175, 55, 0.3)"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <motion.img
                  src="/lovable-uploads/f482f63a-6b6d-42d0-adaa-8b3469621f1d.png"
                  alt="Hero"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ 
                    scale: 1,
                    opacity: 1,
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    scale: {
                      duration: 1.5,
                      ease: "easeOut"
                    },
                    opacity: {
                      duration: 1
                    },
                    rotate: {
                      duration: 12,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                />
              </motion.div>
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  background: [
                    "radial-gradient(circle at 30% 30%, rgba(212, 175, 55, 0.2) 0%, transparent 60%)",
                    "radial-gradient(circle at 70% 70%, rgba(212, 175, 55, 0.2) 0%, transparent 60%)",
                    "radial-gradient(circle at 30% 30%, rgba(212, 175, 55, 0.2) 0%, transparent 60%)"
                  ]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showResume && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowResume(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6"
            >
              <div className="flex justify-between items-center sticky top-0 bg-white pb-4 mb-4 border-b">
                <h3 className="text-2xl font-bold text-primary">Resume</h3>
                <button
                  onClick={() => setShowResume(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative aspect-[3/4] w-full"
              >
                <img
                  src="/lovable-uploads/e9c424f0-0733-46ba-98db-e64aedeaef31.png"
                  alt="Resume"
                  className="w-full h-full object-contain rounded-lg"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
