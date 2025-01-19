import { CategoryFilter } from "../CategoryFilter/CategoryFilter.tsx";
import EventFilter from "../EventFilter/EventFilter.tsx";
import EventForm from "../EventForm/EventForm.tsx";
import PaginatedEventsList from "../PaginatedEventsList/PaginatedEventsList.tsx";
import SearchBar from "../SearchBar/SearchBar.tsx";

const App = () => {
  return (
    <div>
      <EventForm />
      <SearchBar />
      <EventFilter />
      <CategoryFilter />
      <PaginatedEventsList />
    </div>
  );
};

export default App;
