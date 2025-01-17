import Button from "../Button/Button.tsx";

const EventListItem = ({
  item: { title, category, time, date, description },
}) => {
  return (
    <li>
      <h3>{title}</h3>
      <p>
        <strong>Category:</strong> {category}
      </p>
      <p>
        <strong>Date:</strong> <time dateTime={date}>{date}</time>
      </p>
      <p>
        <strong>Time:</strong> <time>{time}</time>
      </p>
      <p>{description}</p>
      <Button>Edit</Button>
      <Button>Delete</Button>
    </li>
  );
};

export default EventListItem;
