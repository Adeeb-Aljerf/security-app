import { Shield, Lock, AlertTriangle, HelpCircle } from "lucide-react";
import { toast } from "react-toastify";

const Home = () => {
  const handleServiceClick = (service) => {
    toast.info(`سيتم إطلاق خدمة ${service} قريباً!`, {
      icon: "🚀",
    });
  };

  const services = [
    {
      icon: HelpCircle,
      title: "المنصة التعليمية",
      description:
        "منصة تعليمية متكاملة تقدم دورات وورش عمل في مجال الأمن السيبراني والحماية الرقمية",
    },
    {
      icon: Shield,
      title: "الدعم الرقمي للأفراد",
      description:
        "خدمات متخصصة للأفراد تشمل الحماية الشخصية والتوعية الأمنية والدعم التقني المستمر",
    },
    {
      icon: Lock,
      title: "المؤسسات والشركات",
      description:
        "حلول أمنية متكاملة للشركات والمؤسسات لحماية بياناتها وأنظمتها من التهديدات الإلكترونية",
    },
    {
      icon: AlertTriangle,
      title: "الاستشارات",
      description:
        "خدمات استشارية احترافية في مجال الأمن السيبراني وتقييم المخاطر وتطوير الاستراتيجيات الأمنية",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[#1a9078] mb-6">
              مرحباً بكم في آمن تماماً
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
              نحن نهتم بأمانك الرقمي ونساعدك في حماية خصوصيتك عبر حلول متكاملة
              وفعالة
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() =>
                  toast.success("سيتم تحويلك إلى صفحة التسجيل قريباً!")
                }
                className="bg-[#1a9078] text-white px-8 py-3 rounded-lg hover:bg-[#158970] transition-colors shadow-lg hover:shadow-xl"
              >
                ابدأ الآن
              </button>
              <button
                onClick={() => toast.info("شاهد الفيديو التعريفي قريباً!")}
                className="bg-white text-[#1a9078] px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl border border-[#1a9078]"
              >
                شاهد الفيديو
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                onClick={() => handleServiceClick(service.title)}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer"
              >
                <div className="bg-[#1a9078]/10 p-3 rounded-full w-fit mb-6">
                  <IconComponent className="h-8 w-8 text-[#1a9078]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
