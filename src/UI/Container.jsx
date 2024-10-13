const Container = ({ children, styleStringInTailwind }) => {
  return (
    <div
      className={
        styleStringInTailwind ? `p-10 ${styleStringInTailwind}` : "p-10"
      }
    >
      {children}
    </div>
  );
};

export default Container;
