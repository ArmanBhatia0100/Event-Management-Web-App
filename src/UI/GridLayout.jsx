const GridLayout = (props) => {
  return (
    <div className="grid grid-cols-[8%_auto] min-h-screen">
      <div></div>
      {props.children}
    </div>
  );
};
export default GridLayout;
