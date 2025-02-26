import { Shield, Target, Users, Lightbulb } from 'lucide-react';
import { toast } from 'react-toastify';

const About = () => {
  const handleLearnMore = (section) => {
    toast.info(`سيتم إضافة المزيد من المعلومات عن ${section} قريباً!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-indigo-600 mb-6">من نحن</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نحن فريق متخصص في الأمن الرقمي نسعى لحماية مجتمعنا من المخاطر الإلكترونية من خلال حلول مبتكرة وفعالة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              icon: Shield,
              title: "رؤيتنا",
              description: "نسعى لبناء مجتمع رقمي آمن حيث يمكن للجميع استخدام التكنولوجيا بثقة وأمان"
            },
            {
              icon: Target,
              title: "مهمتنا",
              description: "توفير الحماية والتوعية الرقمية لجميع فئات المجتمع من خلال حلول مبتكرة وفعالة"
            },
            {
              icon: Users,
              title: "قيمنا",
              description: "نؤمن بالشفافية والنزاهة والمسؤولية في حماية خصوصية وأمن مستخدمينا"
            },
            {
              icon: Lightbulb,
              title: "نهجنا",
              description: "نتبع أحدث التقنيات والممارسات العالمية في مجال الأمن السيبراني لضمان أفضل حماية"
            }
          ].map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all transform hover:-translate-y-1"
                onClick={() => handleLearnMore(item.title)}
              >
                <div className="bg-indigo-50 p-3 rounded-full w-fit mb-6">
                  <IconComponent className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.description}</p>
                <button className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors">
                  اقرأ المزيد ←
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;