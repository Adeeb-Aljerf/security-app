import { toast } from "react-toastify";
import adeeb from "../assets/team/adeeb.jpg";
import salim from "../assets/team/salim.jpg";
import baraa from "../assets/team/baraa.jpg";
import hayan from "../assets/team/hayan.jpg";
import feras from "../assets/team/feras.jpg";
import hasan from "../assets/team/hasan.jpg";
import judy from "../assets/team/judy.jpg";
import reda from "../assets/team/reda.jpg";
import rama from "../assets/team/rama.jpg";

const teamMembers = [
  {
    name: "Hasan Alhussein",
    role: "المؤسس والرئيس التنفيذي",
    image: hasan,
    bio: "خبير في أمن المعلومات مع خبرة تزيد عن 15 عاماً في مجال الأمن السيبراني",
  },
  {
    name: "Adeeb Aljerf",
    role: "المسؤول عن تصميم واجهة المستخدم",
    image: adeeb,
    bio: "متخصصة في تطوير حلول الأمن الرقمي وحماية البيانات",
  },

  {
    name: "Feras Elisas",
    role: "مديرة التوعية الأمنية",
    image: feras,
    bio: "متخصصة في برامج التوعية الأمنية وتثقيف المستخدمين",
  },
  {
    name: "Hayan Barakat",
    role: "مديرة التوعية الأمنية",
    image: hayan,
    bio: "متخصصة في برامج التوعية الأمنية وتثقيف المستخدمين",
  },
  {
    name: "Reda Nakshbandi",
    role: "مديرة التوعية الأمنية",
    image: reda,
    bio: "متخصصة في برامج التوعية الأمنية وتثقيف المستخدمين",
  },

  {
    name: "Salim Al-Bitar",
    role: "المسؤول عن تصميم واجهة المستخدم",
    image: salim,
    bio: "خبير في تحليل التهديدات الأمنية والاستجابة للحوادث السيبرانية",
  },

  {
    name: "Rama Alsabagh",
    role: "مديرة التوعية الأمنية",
    image: rama,
    bio: "متخصصة في برامج التوعية الأمنية وتثقيف المستخدمين",
  },
  {
    name: "Baraa Alshhada",
    role: "مديرة التوعية الأمنية",
    image: baraa,
    bio: "متخصصة في برامج التوعية الأمنية وتثقيف المستخدمين",
  },
  {
    name: "judy mohammad Al-Mukhelf",
    role: "مديرة التوعية الأمنية",
    image: judy,
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
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1 h-[420px] relative"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-center">
                  {member.name}
                </h3>
                {/* <p className="text-indigo-600">{member.role}</p> */}
                <div className="absolute bottom-6 left-6 right-6">
                  <button
                    onClick={() => handleContactMember(member.name)}
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    تواصل معي
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
