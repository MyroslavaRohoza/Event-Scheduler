import { useSelector } from "react-redux";
import EventFilter from "../EventFilter/EventFilter.tsx";
import EventForm from "../EventForm/EventForm.tsx";
import PaginatedEvents from "../PaginatedEvents/PaginatedEvents.tsx";
import PaginatedEventsList from "../PaginatedEventsList/PaginatedEventsList.tsx";
import SearchBar from "../SearchBar/SearchBar.tsx";
import { selectItemPerPage } from "../../state/pages/pagesSelectors.ts";
import { selectFilteredEvents } from "../../state/filter/filterSelectors.ts";

const App = () => {
  const itemsPerPage = useSelector(selectItemPerPage);
  const items = useSelector(selectFilteredEvents);
  return (
    <div>
      <EventForm />
      <SearchBar />
      <EventFilter />
      {/* <PaginatedEventsList /> */}
      <PaginatedEvents items={items} itemsPerPage={4} />
    </div>
  );
};

export default App;
