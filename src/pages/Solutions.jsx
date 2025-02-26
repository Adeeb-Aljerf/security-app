import {
  Shield,
  Lock,
  AlertTriangle,
  FileSearch,
  UserCheck,
  MessageSquare,
} from "lucide-react";
import { toast } from "react-toastify";

const solutions = [
  {
    icon: Shield,
    title: "فحص الروابط المشبوهة",
    description: "أداة متقدمة لفحص الروابط والتأكد من سلامتها قبل فتحها",
  },
  {
    icon: Lock,
    title: "حماية الحسابات",
    description: "إرشادات وأدوات لتأمين حساباتك على مواقع التواصل الاجتماعي",
  },
  {
    icon: AlertTriangle,
    title: "مكافحة الابتزاز",
    description: "خطوات عملية للتعامل مع حالات الابتزاز الإلكتروني",
  },
  {
    icon: FileSearch,
    title: "فحص الملفات",
    description: "تحليل الملفات للكشف عن البرمجيات الخبيثة",
  },
  {
    icon: UserCheck,
    title: "التحقق من الهوية",
    description: "أدوات للتحقق من هوية الحسابات والمواقع",
  },
  {
    icon: MessageSquare,
    title: "استشارات فورية",
    description: "دعم مباشر من خبراء الأمن السيبراني",
  },
];

const Solutions = () => {
  const handleStartService = (service) => {
    toast.info(`سيتم إطلاق خدمة ${service} قريباً!`, {
      icon: "🚀",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#1a9078] mb-6">
            الحلول السريعة
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            حلول فعالة وسريعة لحماية أمنك الرقمي
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="bg-[#1a9078]/10 p-3 rounded-full w-fit mb-6">
                  <IconComponent className="h-8 w-8 text-[#1a9078]" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  {solution.description}
                </p>
                <button
                  onClick={() => handleStartService(solution.title)}
                  className="w-full bg-[#1a9078] text-white py-3 px-4 rounded-lg hover:bg-[#158970] transition-colors flex items-center justify-center gap-2"
                >
                  <IconComponent className="h-5 w-5" />
                  ابدأ الآن
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
