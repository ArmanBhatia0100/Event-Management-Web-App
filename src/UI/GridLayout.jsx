const GridLayout = (props) => {
  return (
    <div className="border grid grid-cols-[8%_auto] min-h-screen">
      {props.children}
    </div>
  );
};
export default GridLayout;
