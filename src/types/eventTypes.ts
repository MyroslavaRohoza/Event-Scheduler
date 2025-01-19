import {
  ButtonProps as MuiButtonProps,
  Button as MuiButton,
} from "@mui/material";

export type EventItem ={
  id?: string; 
  title: string;
  date: string;
  time: string; 
  category: string;
  description: string;
}

export type EventState = {
  items: Event[];
};

export type CustomButtonProps = MuiButtonProps & {
  type?: "button" | "submit" | "reset";
  handleBtnClick?: React.MouseEventHandler<HTMLButtonElement>;
  backgroundColor?: string;
};