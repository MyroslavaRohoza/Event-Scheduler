import { useSelector } from "react-redux";
import { selectFilteredEvents } from "../../state/filter/filterSelectors";
import { selectItemPerPage } from "../../state/pages/pagesSelectors";

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

    return <WrappedComponent {...props} items={items} itemsPerPage={itemsPerPage} />;
  };

  return PaginatedComponent;
};

export default PaginatedWithData;
