import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import WaterList from "./components/pages/WaterList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Login /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "list", element: <WaterList /> },
    ],
  },
]);

export default router;
