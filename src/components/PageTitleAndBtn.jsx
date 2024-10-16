import Button from "@mui/material/Button";

const PageTitleAndBtn = (props) => {
  return (
    <div className="titleAndBtn flex flex-row justify-between mb-7 ">
      <h1 className="text-2xl inline-block font-semibold">{props.title}</h1>
      <Button variant="contained">Add Event</Button>
    </div>
  );
};

export default PageTitleAndBtn;
