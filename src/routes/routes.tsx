import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { adminRoutes } from "./admin.routes";
import Login from "../pages/Login";
import Register from "../pages/Register";
// import About from "../pages/About";
// import Contact from "../pages/Contact";
// import AdminDashboard from "../pages/admin/AdminDashboard";
// import CreateStudent from "../pages/admin/CreateStudent";
// import CreateFaculty from "../pages/admin/CreateFaculty";
// import CreateAdmin from "../pages/admin/CreateAdmin";
// import { adminPaths } from "./admin.routes";
// import CreateStudent from "../pages/admin/CreateStudent";
// import CreateAdmin from "../pages/admin/CreateAdmin";
// import CreateFaculty from "../pages/admin/CreateFaculty";
// import AdminDashboard from "../pages/admin/AdminDashboard";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
//   {
//     path: "/admin",
//     element: <App />,
//     children: adminPaths,
//   },
//   {
//     path: "create-student",
//     element: <CreateStudent />,
//   },
//   {
//     path: "create-admin",
//     element: <CreateAdmin />,
//   },
//   {
//     path: "create-faculty",
//     element: <CreateFaculty />,
//   },
// ]);

// const adminPaths2 = [
//   {
//     name: "Dashboard",
//     path: "dashboard",
//     element: <AdminDashboard />,
//   },
//   {
//     name: "User Management",
//     children: [
//       {
//         name: "Create Admin",
//         path: "create-admin",
//         element: <CreateAdmin />,
//       },
//       {
//         name: "Create Faculty",
//         path: "create-faculty",
//         element: <CreateFaculty />,
//       },
//       {
//         name: "Create Student",
//         path: "create-student",
//         element: <CreateStudent />,
//       },
//       {
//         name: "Create Member",
//         path: "create-member",
//         element: <CreateStudent />,
//       },
//     ],
//   },
// ];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: adminRoutes,
  },
  {
    path: "/faculty",
    element: <App />,
    children: adminRoutes,
  },
  {
    path: "/student",
    element: <App />,
    children: adminRoutes,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
export default router;
