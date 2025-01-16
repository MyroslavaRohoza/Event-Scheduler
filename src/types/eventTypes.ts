export type Event = {
  id: number;
  text: string;
  completed: boolean;
};

export type EventState = {
  items: Event[];
};
