import React from "react";
import {
  Button as MuiButton,
} from "@mui/material";
import { CustomButtonProps } from "../../types/eventTypes.ts";

const Button: React.FC<CustomButtonProps> = ({
  children,
  type = "submit",
  handleBtnClick,
  variant = "contained",
  backgroundColor,
  ...rest
}) => {
  return (
    <MuiButton
      onClick={handleBtnClick}
      variant={variant}
      type={type}
      {...rest}
      sx={{
        backgroundColor: backgroundColor,
        padding: "10px 30px",
      }}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
