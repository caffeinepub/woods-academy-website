import { Toaster } from "@/components/ui/sonner";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { ThemeProvider } from "next-themes";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import AcademicsPage from "./pages/AcademicsPage";
import AchievementsPage from "./pages/AchievementsPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import AdminPage from "./pages/AdminPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import ContactPage from "./pages/ContactPage";
import FacultyPage from "./pages/FacultyPage";
import GalleryPage from "./pages/GalleryPage";
import HomePage from "./pages/HomePage";
import InfrastructurePage from "./pages/InfrastructurePage";
import NewsPage from "./pages/NewsPage";

function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

// Root route — no layout, just an outlet
const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

// Layout route — wraps all main pages with Header/Footer
const layoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "layout",
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/",
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/about",
  component: AboutPage,
});

const academicsRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/academics",
  component: AcademicsPage,
});

const admissionsRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/admissions",
  component: AdmissionsPage,
});

const facultyRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/faculty",
  component: FacultyPage,
});

const infrastructureRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/infrastructure",
  component: InfrastructurePage,
});

const activitiesRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/activities",
  component: ActivitiesPage,
});

const achievementsRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/achievements",
  component: AchievementsPage,
});

const galleryRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/gallery",
  component: GalleryPage,
});

const newsRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/news",
  component: NewsPage,
});

const contactRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/contact",
  component: ContactPage,
});

// Admin route — no Header/Footer, standalone
const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  component: AdminPage,
});

const routeTree = rootRoute.addChildren([
  layoutRoute.addChildren([
    indexRoute,
    aboutRoute,
    academicsRoute,
    admissionsRoute,
    facultyRoute,
    infrastructureRoute,
    activitiesRoute,
    achievementsRoute,
    galleryRoute,
    newsRoute,
    contactRoute,
  ]),
  adminRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  );
}
