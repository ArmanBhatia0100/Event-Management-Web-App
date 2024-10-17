import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CampaignIcon from "@mui/icons-material/Campaign";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  return (
    <div className="flex flex-col bg-gray-300 items-center p-3 justify-around text-sm">
      <div>
        <button type="button">
          <HomeIcon sx={{ fontSize: "2rem" }} />
        </button>
      </div>
      <div>
        <button type="button">
          <CalendarMonthIcon sx={{ fontSize: "2rem" }} />
        </button>
      </div>
      <div>
        <button type="button">
          <CampaignIcon sx={{ fontSize: "2rem" }} />
        </button>
      </div>
      <div>
        <button type="button">
          <AccountCircleIcon sx={{ fontSize: "2rem" }} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
