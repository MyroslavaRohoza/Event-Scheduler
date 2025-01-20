import React from "react";
import { useSelector } from "react-redux";
import { selectFilteredEvents } from "../../state/filter/filterSelectors.ts";
import { selectItemPerPage } from "../../state/pages/pagesSelectors.ts";
import { selectEvents } from "../../state/events/eventSelectors.ts";
import { EventState, PagesInitState } from "../../types/eventTypes.ts";

export type PaginatedProps = Pick<EventState, "items"> &
  Pick<PagesInitState, "itemsPerPage" | "totalItems">;

const PaginatedWithData = (
  WrappedComponent: React.ComponentType<PaginatedProps>
) => {
  const PaginatedComponent = (
    props: Omit<PaginatedProps, keyof PaginatedProps>
  ) => {
    const itemsPerPage = useSelector(selectItemPerPage);
    const items = useSelector(selectFilteredEvents) || []; 
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
