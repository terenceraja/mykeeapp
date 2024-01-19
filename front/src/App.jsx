// ROUTE DEFINITION
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//IMPORT PAGES
import Cons from "./pages/Cons";
import Ptf from "./pages/Ptf";
import DetPtf from "./pages/DetPtf";
import Mvt from "./pages/Mvt";
import Log from "./pages/Log";
import Layout from "./pages/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Log /> },
        { path: "ptf", element: <Ptf /> },
        { path: "detPtf", element: <DetPtf /> },
        { path: "cons", element: <Cons /> },
        { path: "mvt", element: <Mvt /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
