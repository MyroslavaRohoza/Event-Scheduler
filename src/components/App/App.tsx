import css from "./App.module.css";
import { CategoryFilter } from "../CategoryFilter/CategoryFilter.tsx";
import EventFilter from "../EventFilter/EventFilter.tsx";
import EventForm from "../EventForm/EventForm.tsx";
import PaginatedEventsList from "../PaginatedEventsList/PaginatedEventsList.tsx";
import SearchBar from "../SearchBar/SearchBar.tsx";

const App = () => {
  return (
    <div className={css.appContainer}>
      <EventForm />
      <div>
        <SearchBar />
        <EventFilter />
        <CategoryFilter />
      </div>
      <PaginatedEventsList />
    </div>
  );
};

export default App;
