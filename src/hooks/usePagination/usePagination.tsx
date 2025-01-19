import { useSelector, useDispatch } from "react-redux";
import { selectCurrentPage } from "../../state/pages/pagesSelectors.ts";
import { setCurrentPage } from "../../state/pages/pagesSlice.ts";

const usePagination = (items: any[], itemsPerPage: number, amountOfPages:number) => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);

  const totalPages = Math.ceil(10 / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      dispatch(setCurrentPage(page));
    }
  };

  return {
    currentItems,
    currentPage,
    totalPages,
    changePage,
  };
};

export default usePagination;
