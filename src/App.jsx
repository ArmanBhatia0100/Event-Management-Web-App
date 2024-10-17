import "./App.css";
import Announcements from "./pages/Announcements";
import Events from "./pages/Events";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/events",
    element: <Events></Events>,
  },
  {
    path: "/announcements",
    element: <Announcements></Announcements>,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
