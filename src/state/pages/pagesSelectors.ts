import { RootState } from "../rootReducer.ts";

export const selectCurrentPage = (state: RootState) => state.pages.currentPage;

export const selectItemPerPage = (state: RootState) => state.pages.itemsPerPage;

export const selectTotalItems = (state: RootState) => state.pages.totalItems;
