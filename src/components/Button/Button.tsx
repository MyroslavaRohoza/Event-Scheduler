const Button = ({ children, buttonType = "button", handleBtnClick }) => {
  return (
    <button type={buttonType} onClick={handleBtnClick}>
      {children}
    </button>
  );
};

export default Button;
