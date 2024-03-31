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

const a = {
  id: 3,
  first_name: "Stage",
  last_name: "User",
  email: "stage1@gmail.com",
  phone_number: "9876543210",
  gender: "Male",
  description: "I am a Final year student with some cource and some data",
  address: "HNo-5, Sterrt Number 5, Delhi",
  city: "Delhi",
  state: "Delhi",
  pin_code: 110051,
  profile_photo: "/media/download.jpeg",
  library_membership_no: "123456789598",
  batch: "2019",
  facebook: "https://www.facebook.com/",
  twitter: "https://twitter.com/",
  linkedin: "https://in.linkedin.com/",
  instagram: "https://www.instagram.com/",
  institution: {
    id: 1,
    name: "Staging Institution",
    phone_number: "9876543210",
    second_phone_number: "0987654321",
    email: "stage@gmail.com",
    address: "Staging Institution, College of Engineering, Delhi",
    tagline: "Right place to start your career",
    logo: null,
    landing_page_image: null,
    slider1: null,
    slider2: null,
    slider3: null,
    subdomain: 1,
  },
  course: null,
  category: null,
  favourites: [],
  created_at: "2023-12-19T19:40:09.012440+05:30",
  is_admin: true,
};
