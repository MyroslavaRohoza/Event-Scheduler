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
