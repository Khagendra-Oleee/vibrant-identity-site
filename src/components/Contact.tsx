
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/9704497129`, "_blank");
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            Get in Touch
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-primary">
            Let's Work Together
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? I'd love to help bring your ideas to life.
            Let's create something amazing together.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center px-8 py-4 bg-accent text-white rounded-full text-lg font-medium hover:bg-accent/90 transition-colors duration-200"
          >
            Contact Me
            <Send className="ml-2 -mr-1 h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
