import usePagination from "../../hooks/usePagination/usePagination.tsx";
import EventList from "../EventList/EventList.tsx";

const PaginatedEvents = ({ items, itemsPerPage }) => {
  const { currentItems, currentPage, totalPages, changePage } = usePagination(
    items,
    itemsPerPage,
    10
  );
  console.log(currentItems);
  return (
    <div>
      {" "}
      <ul>
        {Array.isArray(currentItems) &&
          currentItems.map((eventItem) => {
            return (
              <li key={eventItem.id}>
                <p>{eventItem.title}</p>
              </li>
            );
          })}
      </ul>
      <EventList filteredEvents={currentItems} />
      <div>
        <button
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => changePage(index + 1)}
            // className={`pagination-btn ${index + 1 === currentPage ? "active-page" : ""}`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginatedEvents;
