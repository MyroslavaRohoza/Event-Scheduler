import EventForm from "../EventForm/EventForm.tsx";
import EventList from "../EventList/EventList.tsx";
import SearchBar from "../SearchBar/SearchBar.tsx";

type AppProps = {};

const App = () => {
  return (
    <div>
      <EventForm />
      <SearchBar />
      <EventList />
    </div>
  );
};

export default App;
