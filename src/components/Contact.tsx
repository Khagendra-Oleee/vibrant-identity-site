
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/9704497129`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            Get in Touch
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? I'd love to help bring your ideas to life.
            Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-accent/10 group"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">Email</h3>
                  <a href="mailto:contact@example.com" className="text-gray-600 hover:text-accent transition-colors">
                    contact@example.com
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-accent/10 group"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">Address</h3>
                  <p className="text-gray-600">
                    123 Main Street, New York, NY 10001
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-accent/10 group"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">Phone</h3>
                  <a href="tel:+1234567890" className="text-gray-600 hover:text-accent transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg border border-accent/10 overflow-hidden"
          >
            <div className="p-8 relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <div className="relative z-10 space-y-6">
                <h3 className="text-2xl font-bold text-primary">Ready to Start Your Project?</h3>
                <p className="text-gray-600">
                  I'm currently available for freelance work and exciting collaborations. 
                  Whether you need a website, mobile app, or custom software solution, 
                  let's discuss how we can bring your vision to life.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                    Custom development tailored to your needs
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                    Fast response and regular updates
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                    Clear communication throughout the project
                  </li>
                </ul>
                <motion.div
                  className="flex justify-center pt-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.button
                    onClick={handleWhatsAppClick}
                    className="relative inline-flex items-center px-8 py-4 bg-accent text-white rounded-full text-lg font-medium overflow-hidden group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white opacity-20"
                      animate={{
                        scale: [1, 2],
                        opacity: [0.2, 0],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                    />
                    <span className="relative flex items-center">
                      Contact Me
                      <Send className="ml-2 -mr-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
