import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import ProductDesignCaseStudy from "./pages/ProductDesignCaseStudy";
import CaseStudy from "./pages/CaseStudy";
import HolidayHubCaseStudy from "./pages/HolidayHubCaseStudy";
import CheapReatsCaseStudy from "./pages/CheapReatsCaseStudy";
import AboutPage from "./pages/AboutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/product-design",
    Component: ProductDesignCaseStudy,
  },
  {
    path: "/harmonia",
    Component: CaseStudy,
  },
  {
    path: "/holiday-hub",
    Component: HolidayHubCaseStudy,
  },
  {
    path: "/cheapreats",
    Component: CheapReatsCaseStudy,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
]);