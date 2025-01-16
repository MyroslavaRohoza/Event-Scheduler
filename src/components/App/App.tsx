import EventForm from "../EventForm/EventForm.tsx";
import EventList from "../EventList/EventList.tsx";

type AppProps = {};

const App = () => {
  return (
    <div>
      <EventForm />
      <EventList />
    </div>
  );
};

export default App;
