import React, { useState } from "react";
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
  Container,
  Chip,
  Stack,
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
  Menu,
  X,
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
        <Avatar sx={{ bgcolor: `${color}20`, color: color }}>
          <Icon size={20} />
        </Avatar>
        <Typography variant="h6" color="text.secondary">
          {title}
        </Typography>
      </Box>
      <Typography variant="h3" sx={{ mb: 1, textAlign: "right", color: color }}>
        {value}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            flexGrow: 1,
            height: 8,
            borderRadius: 4,
            "& .MuiLinearProgress-bar": {
              backgroundColor: color,
            },
          }}
        />
        <Typography variant="body2" color="text.secondary">
          {progress}%
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

const ActivityItem = ({ title, time, type, icon: Icon, color }) => (
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
          bgcolor: `${color}20`,
          color: color,
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
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            sx={{ mb: { xs: 2, md: 4 }, fontWeight: 700, color: "#1a9078" }}
          >
            لوحة التحكم
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <StatsCard
            title="إجمالي الدورات"
            value="24"
            progress={70}
            color="#FF6B6B"
            icon={BookOpen}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StatsCard
            title="الدورات المكتملة"
            value="18"
            progress={85}
            color="#4ECDC4"
            icon={CheckSquare}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StatsCard
            title="الشهادات المكتسبة"
            value="12"
            progress={50}
            color="#FFB900"
            icon={Award}
          />
        </Grid>

        <Grid item xs={12} lg={8}>
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
                  sx={{
                    color: "#1a9078",
                    borderColor: "#1a9078",
                    "&:hover": {
                      borderColor: "#158970",
                      backgroundColor: "rgba(26, 144, 120, 0.04)",
                    },
                  }}
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
                  color="#FF6B6B"
                />
                <Divider variant="inset" component="li" />
                <ActivityItem
                  title="أنجزت الاختبار النهائي بنجاح"
                  time="منذ 3 ساعات"
                  type="test"
                  icon={FileText}
                  color="#4ECDC4"
                />
                <Divider variant="inset" component="li" />
                <ActivityItem
                  title="بدأت دورة جديدة في تطوير الويب"
                  time="منذ 5 ساعات"
                  type="course"
                  icon={Book}
                  color="#FFB900"
                />
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} lg={4}>
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
                    color: "#FF6B6B",
                  },
                  {
                    title: "اختبار منتصف الفصل",
                    deadline: "خلال يومين",
                    priority: "متوسط",
                    color: "#4ECDC4",
                  },
                  {
                    title: "مراجعة الدرس السابق",
                    deadline: "خلال 3 أيام",
                    priority: "منخفض",
                    color: "#FFB900",
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
                      sx={{
                        bgcolor: task.color,
                        color: "white",
                      }}
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (path, label) => {
    if (label !== "الرئيسية") {
      toast.success("🚀 هذه الميزة قادمة قريباً!");
      setIsMobileMenuOpen(false);
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
      <Box
        component="nav"
        className={isMobileMenuOpen ? "open" : ""}
        sx={{
          width: { xs: "100%", md: "280px" },
          flexShrink: 0,
          position: "fixed",
          right: { xs: "-100%", md: 0 },
          top: "64px",
          height: "calc(100vh - 64px)",
          bgcolor: "background.paper",
          borderLeft: { xs: 0, md: 1 },
          borderColor: "divider",
          overflowY: "auto",
          zIndex: 1000,
          boxShadow: 1,
          transition: "right 0.3s ease",
          "&.open": {
            right: 0,
          },
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
                  bgcolor: isActive ? "#1a9078" : "transparent",
                  color: isActive ? "white" : "text.primary",
                  "&:hover": {
                    bgcolor: isActive ? "#158970" : "action.hover",
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

      <IconButton
        sx={{
          display: { xs: "flex", md: "none" },
          position: "fixed",
          right: 16,
          bottom: 16,
          zIndex: 1100,
          bgcolor: "#1a9078",
          color: "white",
          "&:hover": { bgcolor: "#158970" },
        }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X /> : <Menu />}
      </IconButton>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginTop: "64px",
          marginRight: { xs: 0, md: "280px" },
          p: { xs: 1, sm: 2, md: 3 },
          bgcolor: "#f5f5f5",
          minHeight: "calc(100vh - 64px)",
          transition: "margin-right 0.3s ease",
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
