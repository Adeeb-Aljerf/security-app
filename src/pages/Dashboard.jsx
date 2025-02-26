import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Eye,
  MessageCircle,
  Briefcase,
  Video,
  CheckSquare,
  Library,
  FileText,
  Calendar,
  TestTube,
  BookOpen,
  Book,
  Award,
  Users,
  Heart,
  FileSpreadsheet,
  UserPlus,
  HelpCircle,
} from "lucide-react";

const Dashboard = () => {
  const location = useLocation();
  const sidebarItems = [
    { path: "/dashboard", label: "الرئيسية", icon: Home },
    { path: "/dashboard/watch", label: "مشاهدة", icon: Eye },
    { path: "/dashboard/chat", label: "المحادثة", icon: MessageCircle },
    {
      path: "/dashboard/training-portfolio",
      label: "الحقيبة التدريبية",
      icon: Briefcase,
    },
    { path: "/dashboard/live", label: "مباشر", icon: Video },
    { path: "/dashboard/tasks", label: "المهام", icon: CheckSquare },
    {
      path: "/dashboard/interactive-library",
      label: "المكتبة التفاعلية",
      icon: Library,
    },
    { path: "/dashboard/tests", label: "الاختبارات", icon: FileText },
    { path: "/dashboard/schedule", label: "الجدول الزمني", icon: Calendar },
    { path: "/dashboard/lab", label: "المعمل", icon: TestTube },

    { path: "/dashboard/notes", label: "ملاحظات", icon: BookOpen },
    { path: "/dashboard/preparation", label: "التحضير", icon: Book },
    { path: "/dashboard/certificates", label: "الشهادات", icon: Award },
    { path: "/dashboard/followers", label: "المتابعون", icon: Users },
    { path: "/dashboard/wishlist", label: "قائمة الرغبات", icon: Heart },
    { path: "/dashboard/cv", label: "السيرة الذاتية", icon: FileSpreadsheet },
    {
      path: "/dashboard/become-trainer",
      label: "التقديم كمدرب",
      icon: UserPlus,
    },
    { path: "/dashboard/how-it-works", label: "كيف يعمل", icon: HelpCircle },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-72 bg-white shadow-xl h-full fixed right-0 border-l border-gray-200">
        <div className="h-full overflow-y-auto custom-scrollbar">
          <div className="p-6">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center justify-end gap-3 py-3 px-4 rounded-lg transition-all duration-300 mb-1 text-right
                    ${
                      isActive
                        ? "bg-indigo-50 text-indigo-600 font-semibold"
                        : "text-gray-600 hover:bg-gray-50 hover:text-indigo-600"
                    }`}
                >
                  <span className="text-[15px]">{item.label}</span>
                  <Icon
                    className={`w-5 h-5 ${
                      isActive ? "text-indigo-600" : "text-gray-400"
                    }`}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 mr-72">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">لوحة التحكم</h1>
          {/* Dashboard content goes here */}
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 20px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
