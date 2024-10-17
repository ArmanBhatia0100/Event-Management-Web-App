import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CampaignIcon from "@mui/icons-material/Campaign";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed flex flex-col justify-around items-center bg-gray-300 p-3 min-h-screen text-sm">
      <div>
        <Link to="/">
          <HomeIcon sx={{ fontSize: "2rem" }} />
        </Link>
      </div>
      <div>
        <Link to="/events">
          <CalendarMonthIcon sx={{ fontSize: "2rem" }} />
        </Link>
      </div>
      <div>
        <Link to="/announcements">
          <CampaignIcon sx={{ fontSize: "2rem" }} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
