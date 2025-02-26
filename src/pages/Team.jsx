import { toast } from "react-toastify";

const teamMembers = [
  {
    name: "م.حسن",
    role: "المؤسس والرئيس التنفيذي",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: "خبير في أمن المعلومات مع خبرة تزيد عن 15 عاماً في مجال الأمن السيبراني",
  },
  {
    name: "م. سارة القحطاني",
    role: "مديرة التطوير التقني",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: "متخصصة في تطوير حلول الأمن الرقمي وحماية البيانات",
  },
  {
    name: "م. أديب الجرف",
    role: "المسؤول عن تصميم واجهة المستخدم",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: "خبير في تحليل التهديدات الأمنية والاستجابة للحوادث السيبرانية",
  },
  {
    name: "أ. نورة السعيد",
    role: "مديرة التوعية الأمنية",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: "متخصصة في برامج التوعية الأمنية وتثقيف المستخدمين",
  },
];

const Team = () => {
  const handleContactMember = (name) => {
    toast.info(`سيتم إضافة خاصية التواصل مع ${name} قريباً!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-indigo-600 mb-6">
            فريق العمل
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نخبة من الخبراء المتخصصين في مجال الأمن السيبراني
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-indigo-600 mb-4">{member.role}</p>
                <p className="text-gray-600 mb-6">{member.bio}</p>
                <button
                  onClick={() => handleContactMember(member.name)}
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  تواصل معي
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
