import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./reset.css";
import Home from "./home/index.jsx";
import Sobre from "./sobre/index.jsx";
import Projetos from "./projetos/index.jsx";
import Contato from "./contatos/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sobre",
    element: <Sobre />,
  },
  {
    path: "/projetos",
    element: <Projetos />,
  },
  {
    path: "/contato",
    element: <Contato />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
