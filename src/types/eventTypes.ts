import { ButtonProps as MuiButtonProps } from "@mui/material";

export type EventItem = {
  id?: string;
  title: string;
  date: string;
  time: string;
  category: string;
  description: string;
};

export type EventState = {
  items: EventItem[];
};
export type EventInitState = {
  eventList: EventItem[];
  error: string | null;
  editEventId: number | null;
};

export type FilterInitState = {
  eventTitle: string;
  selectedCategory: string;
  dateRange: {
    startDate: string;
    endDate: string;
  };
};

export type PagesInitState = {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
};

export type CustomButtonProps = MuiButtonProps & {
  type?: "button" | "submit" | "reset";
  handleBtnClick?: React.MouseEventHandler<HTMLButtonElement>;
  backgroundColor?: string;
};

export type PaginatedEventsType = EventState & {
  itemsPerPage: number;
  totalItems: number;
};
