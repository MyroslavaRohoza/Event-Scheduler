import usePagination from "../../hooks/usePagination/usePagination.tsx";
import { PaginatedEventsType } from "../../types/eventTypes.ts";
import EventList from "../EventList/EventList.tsx";
import { Button, ButtonGroup, Stack } from "@mui/material";

const PaginatedEvents = ({
  items,
  itemsPerPage,
  totalItems,
}: PaginatedEventsType) => {
  const { currentItems, currentPage, totalPages, changePage } = usePagination(
    items,
    itemsPerPage,
    totalItems
  );

  return (
    <div>
      <EventList filteredEvents={currentItems} />
      <Stack spacing={2} direction="row" justifyContent="center" mt={2}>
        <Button
          variant="outlined"
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <ButtonGroup variant="outlined">
          {Array.from({ length: totalPages }, (_, index) => (
            <Button
              key={index + 1}
              onClick={() => changePage(index + 1)}
              variant={index + 1 === currentPage ? "contained" : "outlined"}
            >
              {index + 1}
            </Button>
          ))}
        </ButtonGroup>
        <Button
          variant="outlined"
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage >= totalPages}
        >
          Next
        </Button>
      </Stack>
    </div>
  );
};

export default PaginatedEvents;
