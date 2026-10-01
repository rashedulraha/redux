import RootLayout from "@/Components/layout/RootLayout";
import About from "@/Page/About/About";
import Service from "@/Page/Service/Service";

import HomePage from "@/Page/home/HomePage";

import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,

    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/service",
        Component: Service,
      },
    ],
  },
]);

export default router;
