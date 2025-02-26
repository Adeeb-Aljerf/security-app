import { motion } from "framer-motion";
import amanosTraining from "../assets/teaching/img-1.jpg";
import digitalSecurity from "../assets/teaching/img-2.jpg";
import aleppoUniversity from "../assets/teaching/img-3.jpg";
import digitalBasics from "../assets/teaching/img-4.jpg";

const Portfolio = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const portfolioItems = [
    {
      id: 1,
      title: "جامعة الامانوس عفرين",
      description: "تدريب الأمن الرقمي",
      image: amanosTraining,
    },
    {
      id: 2,
      title: "تعزيز الأمان الرقمي",
      description: "تعزيز الأمان الرقمي في الجامعات السورية",
      image: digitalSecurity,
    },
    {
      id: 3,
      title: "جامعة حلب الحرة",
      description: "التدريب وزيادة الوعي في الأمن الرقمي ",
      image: aleppoUniversity,
    },
    {
      id: 4,
      title: "تدريب في اساسيات الأمن الرقمي",
      description: "منظمة بيتنا",
      image: digitalBasics,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl font-bold text-center text-gray-900 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          معرض التدريب
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <motion.div
                className="relative h-64"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="p-6 text-right">
                <motion.h3
                  className="text-xl font-semibold text-gray-900 mb-2"
                  whileHover={{ x: -5 }}
                >
                  {item.title}
                </motion.h3>
                {item.description && (
                  <motion.p
                    className="text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {item.description}
                  </motion.p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
