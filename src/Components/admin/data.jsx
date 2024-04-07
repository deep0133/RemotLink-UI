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
    name: "Messages",
    path: "/admin/messages",
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
  id: 4,
  first_name: "Harsh",
  last_name: "Jain",
  email: "jainharsh8506@gmail.com",
  phone_number: "8506833512",
  gender: "Rather Not to Say",
  description: "",
  address: "C-2/3 First Floor Krishna Nagar",
  city: "",
  state: "",
  pin_code: null,
  profile_photo: null,
  library_membership_no: null,
  batch: "",
  facebook: "",
  twitter: "",
  linkedin: "",
  instagram: "",
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
  category: {
    id: 5,
    name: "CS",
    description: "free time all time",
    created_at: "2024-02-14T12:23:12.475149+05:30",
    lft: 3,
    rght: 6,
    tree_id: 3,
    level: 2,
    institution: 1,
    parent: 4,
  },
  favourites: [
    {
      id: 10,
      name: "Temp",
      base_url: "https://html.themeholy.com/mediax",
      image: "/media/Screenshot_19_6fIMJTc.png",
      description: "cdscs",
      created_at: "2024-02-07T22:14:00.147708+05:30",
      institution: 1,
      category: null,
    },
    {
      id: 6,
      name: "Angle Orthodontist",
      base_url: "https://meridian.allenpress.com/angle-orthodontist",
      image: "/media/Screenshot_18.png",
      description: "temporary",
      created_at: "2023-12-27T15:36:25.226138+05:30",
      institution: 1,
      category: 6,
    },
    {
      id: 5,
      name: "Expert review of respiratory medicine",
      base_url: "https://www.tandfonline.com/journals/ierx20",
      image: "/media/Screenshot_19.png",
      description: "FT",
      created_at: "2023-12-27T15:11:36.524110+05:30",
      institution: 1,
      category: null,
    },
    {
      id: 3,
      name: "example",
      base_url: "http://example.com",
      image: "/media/Screenshot_20.png",
      description: "ewe",
      created_at: "2023-12-21T02:07:23.565319+05:30",
      institution: 1,
      category: 1,
    },
    {
      id: 1,
      name: "dvldental",
      base_url: "https://dvldental.com",
      image: "/media/Screenshot_21.png",
      description: "fdvf",
      created_at: "2023-12-19T19:51:47.372352+05:30",
      institution: 1,
      category: 1,
    },
  ],
  created_at: "2023-12-19T19:49:18.940974+05:30",
  is_admin: false,
};
