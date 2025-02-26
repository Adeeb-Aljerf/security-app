import amanosTraining from "../assets/teaching/img-1.jpg";
import digitalSecurity from "../assets/teaching/img-2.jpg";
import aleppoUniversity from "../assets/teaching/img-3.jpg";
import digitalBasics from "../assets/teaching/img-4.jpg";

const Portfolio = () => {
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
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          معرض التدريب
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-64">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-right">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-gray-600">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
