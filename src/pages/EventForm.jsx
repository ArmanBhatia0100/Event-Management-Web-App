// src/components/EventForm.jsx

import React, { useState, useContext } from "react";
import { eventContext } from "../App";
import { useNavigate, Link } from "react-router-dom";

const EventForm = () => {
  const { getContextValue } = useContext(eventContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    eventName: "",
    eventDate: "",
    venue: "",
    hostName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      getContextValue(formData);
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
          <Link to="/">home</Link>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
