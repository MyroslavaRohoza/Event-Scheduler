import { useSelector } from "react-redux";
import { selectFilteredEvents } from "../../state/filter/filterSelectors.ts";
import {
  selectItemPerPage,
  selectTotalItems,
} from "../../state/pages/pagesSelectors.ts";

interface PaginatedWithDataProps {
  items: any[];
  itemsPerPage: number;
}

const PaginatedWithData = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const PaginatedComponent = (props: P) => {
    const itemsPerPage = useSelector(selectItemPerPage);
    const items = useSelector(selectFilteredEvents);
    const totalItems = useSelector(selectTotalItems);

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
