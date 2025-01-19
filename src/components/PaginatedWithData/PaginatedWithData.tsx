import { useSelector } from "react-redux";
import { selectFilteredEvents } from "../../state/filter/filterSelectors.ts";
import { selectItemPerPage } from "../../state/pages/pagesSelectors.ts";

const PaginatedWithData = (WrappedComponent) => {
  const itemsPerPage = useSelector(selectItemPerPage);

  const items = useSelector(selectFilteredEvents);
  return (
    <WrappedComponent
      items={items}
      itemsPerPage={itemsPerPage}
    />
  );
};

export default PaginatedWithData;
