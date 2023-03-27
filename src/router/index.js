import Home from "../features/home/home";
import About from "../features/about/about";
import Contact from "../features/contact/contact";
import Support from "../features/support/support";

export const ROUTERS = [
  {
    id: 1,
    navigate: "/home",
    element: <Home />,
  },
  {
    id: 2,
    navigate: "/about",
    element: <About />,
  },
  {
    id: 3,
    navigate: "/contact",
    element: <Contact />,
  },
  {
    id: 4,
    navigate: "/support",
    element: <Support />,
  },
];
