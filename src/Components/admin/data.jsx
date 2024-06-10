import {
  CategoryIcon,
  DashboardIcon,
  InstitutiionIcon,
  NotificationsIcon,
  ReportIcon,
  SitesIcon,
  UsersIcon,
} from "./assets/constants";
import { AiTwotoneMessage } from "react-icons/ai";
import { FaQuestionCircle } from "react-icons/fa";
export const sidebarData = [
  {
    icon: <DashboardIcon />,
    name: "Dashboard",
    path: "/admin/dashboard",
  },
  {
    icon: <CategoryIcon />,
    name: "Categories",
    path: "/admin/category",
  },
  {
    icon: <UsersIcon />,
    name: "Users",
    path: "/admin/users",
  },
  {
    icon: <SitesIcon />,
    name: "Sites",
    path: "/admin/sites",
  },
  {
    icon: <ReportIcon />,
    name: "Reports",
    path: "/admin/reports",
  },
  {
    icon: <NotificationsIcon />,
    name: "Notifications",
    path: "/admin/notifications",
  },
  {
    icon: <InstitutiionIcon />,
    name: "Institutiion Details",
    path: "/admin/institution",
  },

  {
    icon: <AiTwotoneMessage />,
    name: "Quote",
    path: "/admin/quote",
  },

  {
    icon: <FaQuestionCircle />,
    name: "FAQ",
    path: "/admin/faq",
  },
];

export const DashBoardRightMenu = [
  {
    id: 1,
    name: "Overall",
    path: "/admin/dashboard",
  },
  {
    id: 2,
    name: "User Categories",
    path: "/admin/dashboard/usercategory",
  },
  {
    id: 3,
    name: "Categories",
    path: "/admin/dashboard/categories",
  },
  {
    id: 4,
    name: "e-Resources",
    path: "/admin/dashboard/resources",
  },
];

export const CategroyRightMenu = [
  {
    id: 1,
    name: "Site Categories",
    path: "/admin/category",
  },
  {
    id: 2,
    name: "User Categories",
    path: "/admin/category/user",
  },
];

export const ReportsRightMenu = [
  {
    id: 1,
    name: "User Reports",
    path: "/admin/reports",
  },
  {
    id: 2,
    name: "Site Usage Reports",
    path: "/admin/reports/site/usage",
  },
];

export const NotificationRightMenu = [
  {
    id: 1,
    name: "Announcement",
    path: "/admin/notifications",
  },
  {
    id: 2,
    name: "Latest News ",
    path: "/admin/notifications/latest-news",
  },
  {
    id: 3,
    name: "Important Links",
    path: "/admin/notifications/important-links",
  },
];
