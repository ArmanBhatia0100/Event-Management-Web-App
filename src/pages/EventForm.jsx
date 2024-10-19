import React, { useState, useContext } from "react";
import { eventContext } from "../App";
import { useNavigate, Link } from "react-router-dom";

/**
 * @returns the Event form to add the event details by the users
 */
const EventForm = () => {
  // This context will bring the context function to add the events.
  const { getContextValue } = useContext(eventContext);

  // default empty state of the form
  const [formData, setFormData] = useState({
    eventName: "",
    eventDate: "",
    venue: "",
    hostName: "",
  });

  // This function will navigate the page to "/" once the form is submitted.
  const navigate = useNavigate();

  //  Handles the changes to the form elemenst
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // onSubmit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // validForm function will check the form is valid or not.
    if (validateForm()) {
      // getContextValue function will take the data from the user and pass it to the eventContext in the App.js
      getContextValue(formData);

      // This will reset the form values.
      setFormData({
        eventName: "",
        eventDate: "",
        venue: "",
        hostName: "",
      });
      navigate("/");
    } else {
      alert("Please fill out all the fields.");
    }
  };

  const validateForm = () => {
    const { eventName, eventDate, venue, hostName } = formData;
    return eventName && eventDate && venue && hostName;
  };

  return (
    <div className="bg-white shadow-md mx-auto mt-10 p-6 rounded-lg max-w-md">
      <h2 className="mb-4 font-bold text-2xl text-center">
        Event Registration Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium text-gray-700 text-sm">
            Event Name
          </label>
          <input
            type="text"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            className="block border-gray-300 shadow-sm mt-1 px-3 py-2 border focus:border-blue-500 rounded-md focus:ring-blue-500 w-full focus:outline-none"
            placeholder="Enter event name"
            required
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700 text-sm">
            Date
          </label>
          <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            className="block border-gray-300 shadow-sm mt-1 px-3 py-2 border focus:border-blue-500 rounded-md focus:ring-blue-500 w-full focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700 text-sm">
            Venue
          </label>
          <input
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            className="block border-gray-300 shadow-sm mt-1 px-3 py-2 border focus:border-blue-500 rounded-md focus:ring-blue-500 w-full focus:outline-none"
            placeholder="Enter venue"
            required
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700 text-sm">
            Host Name
          </label>
          <input
            type="text"
            name="hostName"
            value={formData.hostName}
            onChange={handleChange}
            className="block border-gray-300 shadow-sm mt-1 px-3 py-2 border focus:border-blue-500 rounded-md focus:ring-blue-500 w-full focus:outline-none"
            placeholder="Enter host name"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 shadow-sm mt-4 px-6 py-2 rounded-md focus:ring-2 focus:ring-blue-500 font-semibold text-white focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
