import { RootState } from "../store.ts";

export const selectCurrentPage = (state: RootState) => state.pages.currentPage;

export const selectItemPerPage = (state: RootState) => state.pages.itemsPerPage;

