import Button from "@mui/material/Button";

const PageTitleAndBtn = (props) => {
  return (
    <div className="flex flex-row justify-between mb-7 titleAndBtn">
      <h1 className="inline-block font-semibold text-2xl">{props.title}</h1>
      <Button variant="contained">Add Event</Button>
    </div>
  );
};

export default PageTitleAndBtn;
