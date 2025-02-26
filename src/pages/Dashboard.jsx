import React from "react";
import { Link, useLocation, Routes, Route } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  Paper,
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Badge,
  Container,
  Chip,
  Stack,
  Tooltip,
} from "@mui/material";
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
  TrendingUp,
  Clock,
} from "lucide-react";

const StatsCard = ({ title, value, progress, color, icon: Icon }) => (
  <Card
    elevation={0}
    sx={{
      borderRadius: 2,
      background: "linear-gradient(135deg, #fff 0%, #f8f9fa 100%)",
      transition: "transform 0.2s",
      "&:hover": {
        transform: "translateY(-4px)",
        boxShadow: 3,
      },
    }}
  >
    <CardContent>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Avatar sx={{ bgcolor: `${color}.light`, color: `${color}.main` }}>
          <Icon size={20} />
        </Avatar>
        <Typography variant="h6" color="text.secondary">
          {title}
        </Typography>
      </Box>
      <Typography
        variant="h3"
        color={`${color}.main`}
        sx={{ mb: 1, textAlign: "right" }}
      >
        {value}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <LinearProgress
          variant="determinate"
          value={progress}
          color={color}
          sx={{
            flexGrow: 1,
            height: 8,
            borderRadius: 4,
          }}
        />
        <Typography variant="body2" color="text.secondary">
          {progress}%
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

const ActivityItem = ({ title, time, type, icon: Icon }) => (
  <ListItem
    sx={{
      py: 2,
      px: 3,
      transition: "background-color 0.2s",
      "&:hover": {
        bgcolor: "action.hover",
        borderRadius: 1,
      },
    }}
  >
    <ListItemAvatar>
      <Avatar
        sx={{
          bgcolor: type === "video" ? "primary.light" : "secondary.light",
          color: type === "video" ? "primary.main" : "secondary.main",
        }}
      >
        <Icon size={20} />
      </Avatar>
    </ListItemAvatar>
    <ListItemText
      primary={
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 500, textAlign: "right" }}
        >
          {title}
        </Typography>
      }
      secondary={
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="flex-end"
        >
          <Clock size={14} />
          <Typography variant="caption">{time}</Typography>
        </Stack>
      }
      sx={{ textAlign: "right" }}
    />
  </ListItem>
);

const DashboardHome = () => {
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 700 }}>
            لوحة التحكم
          </Typography>
        </Grid>

        {/* Stats Cards */}
        <Grid item xs={12} md={4}>
          <StatsCard
            title="إجمالي الدورات"
            value="24"
            progress={70}
            color="primary"
            icon={BookOpen}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatsCard
            title="الدورات المكتملة"
            value="18"
            progress={85}
            color="success"
            icon={CheckSquare}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatsCard
            title="الشهادات المكتسبة"
            value="12"
            progress={50}
            color="secondary"
            icon={Award}
          />
        </Grid>

        {/* Recent Activity */}
        <Grid item xs={12} md={8}>
          <Card elevation={0} sx={{ borderRadius: 2 }}>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 3,
                }}
              >
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<TrendingUp size={16} />}
                >
                  عرض الكل
                </Button>
                <Typography variant="h6">النشاطات الأخيرة</Typography>
              </Box>
              <List>
                <ActivityItem
                  title="أكملت الدرس الثالث من دورة الأمن السيبراني"
                  time="منذ ساعتين"
                  type="video"
                  icon={Video}
                />
                <Divider variant="inset" component="li" />
                <ActivityItem
                  title="أنجزت الاختبار النهائي بنجاح"
                  time="منذ 3 ساعات"
                  type="test"
                  icon={FileText}
                />
                <Divider variant="inset" component="li" />
                <ActivityItem
                  title="بدأت دورة جديدة في تطوير الويب"
                  time="منذ 5 ساعات"
                  type="course"
                  icon={Book}
                />
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Upcoming Tasks */}
        <Grid item xs={12} md={4}>
          <Card elevation={0} sx={{ borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 3 }}>
                المهام القادمة
              </Typography>
              <Stack spacing={2}>
                {[
                  {
                    title: "تسليم المشروع النهائي",
                    deadline: "غداً",
                    priority: "عالي",
                  },
                  {
                    title: "اختبار منتصف الفصل",
                    deadline: "خلال يومين",
                    priority: "متوسط",
                  },
                  {
                    title: "مراجعة الدرس السابق",
                    deadline: "خلال 3 أيام",
                    priority: "منخفض",
                  },
                ].map((task, index) => (
                  <Paper
                    key={index}
                    elevation={0}
                    sx={{
                      p: 2,
                      bgcolor: "background.default",
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Chip
                      label={task.priority}
                      size="small"
                      color={
                        task.priority === "عالي"
                          ? "error"
                          : task.priority === "متوسط"
                          ? "warning"
                          : "success"
                      }
                    />
                    <Box sx={{ textAlign: "right" }}>
                      <Typography variant="subtitle2">{task.title}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        {task.deadline}
                      </Typography>
                    </Box>
                  </Paper>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

const Dashboard = () => {
  const location = useLocation();

  const handleNavigation = (path, label) => {
    if (label !== "الرئيسية") {
      toast.success("🚀 هذه الميزة قادمة قريباً!");
      return;
    }
  };

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
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <Box
        component="nav"
        sx={{
          width: "280px",
          flexShrink: 0,
          position: "fixed",
          right: 0,
          top: "64px",
          height: "calc(100vh - 64px)",
          bgcolor: "background.paper",
          borderLeft: 1,
          borderColor: "divider",
          overflowY: "auto",
          zIndex: 1000,
          boxShadow: 1,
        }}
      >
        <List sx={{ p: 2 }}>
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <ListItem
                key={item.path}
                component={Link}
                to={item.label === "الرئيسية" ? item.path : "#"}
                onClick={() => handleNavigation(item.path, item.label)}
                sx={{
                  mb: 0.5,
                  py: 1.5,
                  px: 2,
                  borderRadius: 1,
                  bgcolor: isActive ? "action.selected" : "transparent",
                  color: isActive ? "primary.main" : "text.primary",
                  "&:hover": {
                    bgcolor: "action.hover",
                  },
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <ListItemText
                  primary={item.label}
                  sx={{ textAlign: "right" }}
                />
                <Icon size={20} style={{ marginLeft: 12 }} />
              </ListItem>
            );
          })}
        </List>
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginTop: "64px",
          marginRight: "280px",
          p: 3,
          bgcolor: "#f5f5f5",
          minHeight: "calc(100vh - 64px)",
        }}
      >
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<DashboardHome />} />
          </Routes>
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
