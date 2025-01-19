import { useSelector } from "react-redux";
import { selectFilteredEvents } from "../../state/filter/filterSelectors.ts";
import { selectItemPerPage } from "../../state/pages/pagesSelectors.ts";
import { selectEvents } from "../../state/events/eventSelectors.ts";

const PaginatedWithData = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const PaginatedComponent = (props: P) => {
    const itemsPerPage = useSelector(selectItemPerPage);
    const items = useSelector(selectFilteredEvents);
    const totalItems = useSelector(selectEvents).length;

    return (
      <WrappedComponent
        {...props}
        items={items}
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
      />
    );
  };

  return PaginatedComponent;
};

export default PaginatedWithData;
