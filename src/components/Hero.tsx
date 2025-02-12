
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
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
                onClick={() => window.open("/resume.pdf", "_blank")}
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
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-accent to-primary opacity-20"
                animate={{
                  opacity: [0.2, 0.3, 0.2],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <img
                src="/lovable-uploads/f482f63a-6b6d-42d0-adaa-8b3469621f1d.png"
                alt="Hero"
                className="w-full h-full object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent mix-blend-overlay"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
