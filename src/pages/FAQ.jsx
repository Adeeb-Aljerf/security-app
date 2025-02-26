import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { toast } from "react-toastify";

const faqs = [
  {
    question: "كيف أحمي حساباتي على مواقع التواصل الاجتماعي؟",
    answer:
      "استخدم كلمات مرور قوية وفريدة لكل حساب، فعّل المصادقة الثنائية، وتجنب مشاركة معلوماتك الشخصية مع أي شخص",
  },
  {
    question: "ما هي علامات الابتزاز الإلكتروني؟",
    answer:
      "تشمل العلامات تلقي رسائل تهديد، طلبات مالية غير مبررة، أو محاولات ابتزاز باستخدام معلومات أو صور شخصية",
  },
  {
    question: "ماذا أفعل إذا تعرضت للاختراق؟",
    answer:
      "غيّر كلمات المرور فوراً، أبلغ عن الحادث للجهات المختصة، وتواصل مع فريق الدعم لدينا للمساعدة",
  },
  {
    question: "كيف أتأكد من أمان موقع إلكتروني؟",
    answer:
      "تحقق من وجود شهادة SSL (قفل أخضر)، تأكد من صحة عنوان URL، واستخدم أدوات فحص الروابط المتوفرة لدينا",
  },
  {
    question: "ما هي أفضل طرق حماية الأطفال على الإنترنت؟",
    answer:
      "استخدم برامج الرقابة الأبوية، علّم أطفالك عن مخاطر الإنترنت، وراقب نشاطهم عبر الإنترنت بشكل منتظم",
  },
  {
    question: "كيف أحمي بياناتي من السرقة؟",
    answer:
      "استخدم برامج حماية موثوقة، قم بتحديث أنظمتك باستمرار، واحتفظ بنسخ احتياطية منتظمة لبياناتك المهمة",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleMoreHelp = () => {
    toast.info("سيتم توجيهك إلى صفحة الدعم الفني قريباً!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#1a9078] mb-6">
            الأسئلة الشائعة
          </h1>
          <p className="text-xl text-gray-600">
            إجابات على أكثر الأسئلة شيوعاً حول الأمن الرقمي
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-right"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-[#1a9078]" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[#1a9078]" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-[#1a9078]/10">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">لم تجد إجابة لسؤالك؟</p>
          <button
            onClick={handleMoreHelp}
            className="bg-[#1a9078] text-white px-8 py-3 rounded-lg hover:bg-[#158970] transition-colors shadow-md hover:shadow-lg"
          >
            تواصل مع فريق الدعم
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
