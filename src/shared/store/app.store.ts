import { create } from "zustand";
import { DEFAULT_PAGE_SIZE } from "../constants/pagination.constants";

interface AppStoreState {
  pageSize: number;
  setPageSize: (pageSize: number) => void;
}

export const useAppStore = create<AppStoreState>((set) => ({
  pageSize: DEFAULT_PAGE_SIZE,
  setPageSize: (pageSize) => set({ pageSize }),
}));
