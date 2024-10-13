const GridLayout = (props) => {
  return (
    <div className="grid grid-cols-[8%_auto] min-h-screen gap-3">
      {props.children}
    </div>
  );
};
export default GridLayout;
