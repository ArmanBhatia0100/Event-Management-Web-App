import "./App.css";
import Announcements from "./pages/Announcements";
import Events from "./pages/Events";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createContext, useState } from "react";
import EventForm from "./pages/eventForm";

const events = [
  { eventName: "Event 1", eventDate: new Date() },
  { eventName: "Event 2", eventDate: new Date() },
  { eventName: "Event 3", eventDate: new Date() },
  { eventName: "Event 1", eventDate: new Date() },
  { eventName: "Event 2", eventDate: new Date() },
  { eventName: "Event 3", eventDate: new Date() },
];
export const eventContext = createContext();

const router = createBrowserRouter([
  // This is the home page
  {
    path: "/",
    element: <Home events={events}></Home>,
  },
  // this is the event page
  {
    path: "/events",
    element: <Events></Events>,
  },
  // this is the annoucncement page
  {
    path: "/announcements",
    element: <Announcements></Announcements>,
  },
  {
    path: "/event-form",
    element: <EventForm></EventForm>,
  },
]);

function App() {
  const [allEvents, setAllEvents] = useState(events);

  function getContextValue(values) {
    setAllEvents((preEvents) => {
      return [values, ...preEvents];
    });
  }
  return (
    <eventContext.Provider
      value={{ events: allEvents, getContextValue: getContextValue }}
    >
      <RouterProvider router={router}></RouterProvider>
    </eventContext.Provider>
  );
}

export default App;
