import {
  CategoryIcon,
  DashboardIcon,
  InstitutiionIcon,
  NotificationsIcon,
  ReportIcon,
  SitesIcon,
  UsersIcon,
} from "./assets/constants";

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
    path: "/admin/dashboard/user",
  },
  {
    id: 3,
    name: "Categories",
    path: "/admin/dashboard/category",
  },
  {
    id: 4,
    name: "e-Resources",
    path: "/admin/dashboard/eresource",
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

export const SiteUsageListData = [
  {
    id: 1,
    site: "DVL Dental",
    siteUrl: "https://dvldental.com",
    category: "Medical",
    accessCount: 44,
  },
  {
    id: 2,
    site: "DVL Dental",
    siteUrl: "https://github.com",
    category: "Programming",
    accessCount: 44,
  },
  {
    id: 3,
    site: "DVL Dental",
    siteUrl: "https://dvldental.com",
    category: "Medical",
    accessCount: 44,
  },
  {
    id: 4,
    site: "DVL Dental",
    siteUrl: "https://netlify.com",
    category: "Medical",
    accessCount: 44,
  },
  {
    id: 5,
    site: "DVL Dental",
    siteUrl: "https://dvldental.com",
    category: "Medical",
    accessCount: 44,
  },
  {
    id: 6,
    site: "DVL Dental",
    siteUrl: "https://stack.com",
    category: "Entertainment",
    accessCount: 44,
  },
  {
    id: 7,
    site: "DVL Dental",
    siteUrl: "https://dvldental.com",
    category: "Technology",
    accessCount: 44,
  },
  {
    id: 8,
    site: "DVL Dental",
    siteUrl: "https://hashnode.com",
    category: "Programming",
    accessCount: 44,
  },
  {
    id: 9,
    site: "DVL Dental",
    siteUrl: "https://dvldental.com",
    category: "Medical",
    accessCount: 44,
  },
  {
    id: 10,
    site: "DVL Dental",
    siteUrl: "https://dvldental.com",
    category: "Programming",
    accessCount: 44,
  },
];
