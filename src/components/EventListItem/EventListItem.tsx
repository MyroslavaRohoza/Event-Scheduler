const EventListItem = ({ title, category, time, date, description }) => {
  return (
    <li>
      <span>{title}</span>
      <span>{category}</span>
      <span>{time}</span>
      <span>{date}</span>
      <p>{description}</p>
    </li>
  );
};

export default EventListItem;
