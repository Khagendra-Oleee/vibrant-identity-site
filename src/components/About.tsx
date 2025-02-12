
import { motion } from "framer-motion";
import { Code2, Laptop, Brain, PenTool } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-accent/10 rounded-full animate-pulse" />
              <div className="absolute inset-4 bg-accent/20 rounded-full animate-pulse delay-75" />
              <div className="absolute inset-8 bg-accent/30 rounded-full animate-pulse delay-150" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Code2 className="w-24 h-24 text-accent" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Passionate about creating impactful digital solutions
            </h2>
            <p className="text-gray-600">
              With a strong foundation in both development and design, I bring a unique perspective to every project. My expertise spans across various technologies and frameworks, allowing me to create comprehensive solutions that meet both technical requirements and user needs.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Laptop, text: "Full Stack Development" },
                { icon: Brain, text: "AI/ML Solutions" },
                { icon: Code2, text: "Clean Architecture" },
                { icon: PenTool, text: "UI/UX Design" },
              ].map(({ icon: Icon, text }, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-gray-700"
                >
                  <Icon className="w-5 h-5 text-accent" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
