import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import DashboardLayout from "../layout/DashboardLayout";
import SecretLoginPage from "../pages/SecretLoginPage";
import SkillsTableInDashboard from "../pages/dashboardPages/SkillsTableInDashboard";
import ProjectsTableInDashboard from "../pages/dashboardPages/ProjectsTableInDashbooard";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Blog from "../pages/blog/Blog";
import SingleBlogCard from "../pages/blog/SingleBlogCard";
import ShowBlogDetails from "../pages/blog/ShowBlogDetails";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/skills",
        element: <HomePage />,
      },
      {
        path: "/projects",
        element: <HomePage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: `blogDetails/:id`,
        element: <ShowBlogDetails />,
      },
      {
        path: "/login",
        element: <SecretLoginPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "skillsTable",
        element: <SkillsTableInDashboard />,
      },
      {
        path: "projectsTable",
        element: <ProjectsTableInDashboard />,
      },

      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);
export default Routes;
