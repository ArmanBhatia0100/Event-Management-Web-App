import Button from "@mui/material/Button";
import { useContext } from "react";
import { eventContext } from "../App";
import { Link } from "react-router-dom";

const PageTitleAndBtn = (props) => {
  return (
    <div className="flex flex-row justify-between mb-7 titleAndBtn">
      <h1 className="inline-block font-semibold text-2xl">{props.title}</h1>
      <Link to="/event-form">
        <Button variant="contained">Add Event</Button>
      </Link>
    </div>
  );
};

export default PageTitleAndBtn;
