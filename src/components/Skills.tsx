
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Front-end",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 88 },
      { name: "React", level: 85 },
    ],
  },
  {
    title: "Back-end",
    skills: [
      { name: "Node.js", level: 82 },
      { name: "Python", level: 80 },
      { name: "SQL", level: 75 },
      { name: "MongoDB", level: 78 },
    ],
  },
  {
    title: "AI/ML",
    skills: [
      { name: "TensorFlow", level: 70 },
      { name: "PyTorch", level: 65 },
      { name: "Scikit-learn", level: 75 },
      { name: "NLP", level: 68 },
    ],
  },
  {
    title: "UI/UX",
    skills: [
      { name: "Figma", level: 85 },
      { name: "Adobe XD", level: 80 },
      { name: "Wireframing", level: 88 },
      { name: "Prototyping", level: 82 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            Expertise
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Technical Skills
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(212, 175, 55, 0.15)",
              }}
              className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 relative overflow-hidden border border-accent/10"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent pointer-events-none" />
              <h3 className="text-xl font-semibold text-primary mb-6 relative">
                {category.title}
              </h3>
              <div className="space-y-6 relative">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    whileHover={{
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 font-medium">{skill.name}</span>
                      <span className="text-accent font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden relative">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          ease: "easeOut",
                        }}
                        className="h-full bg-gradient-to-r from-accent to-accent/80 rounded-full relative"
                      >
                        <motion.div
                          className="absolute top-0 right-0 h-full w-1 bg-white/50"
                          animate={{
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
