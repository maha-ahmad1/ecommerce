import {
  Dashboard,
  Kanban,
  Profile,
  Products,
  SignIn,
  SignUp,
  Inbox
} from "components/svg";

export const MENU_ITEMS = [
  {
    title: "Dashboard",
    icon: <Dashboard />,
    link: "#",
  },
  {
    title: "Kanban",
    icon: <Kanban />,
    link: "#",
    badge: "Pro",

  },
  {
    title: "Inbox",
    icon: <Inbox />,
    link: "#",
    badge: "3",
  },
  {
    title: "Profile",
    icon: <Profile />,
    link: "#",
  },
  {
    title: "Products",
    icon: <Products />,
    link: "#",
    badge: "5",
  },
  {
    title: "Sign In",
    icon: <SignIn />,
    link: "#",
  },
  {
    title: "Sign Up",
    icon: <SignUp />,
    link: "#",
  },
];
export default MENU_ITEMS;
