import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles.css";
import Layout from "./components/Layout.jsx";
import Home from "./home/index.jsx";
import Sobre from "./sobre/index.jsx";
import Projetos from "./projetos/index.jsx";
import Contato from "./contatos/index.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/sobre", element: <Sobre /> },
      { path: "/projetos", element: <Projetos /> },
      { path: "/contato", element: <Contato /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
