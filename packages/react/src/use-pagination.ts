import { useReducer } from "react";

type PaginationStatesType<T> = {
  currentPage: number;
  paginationItems: T[];
  totalPageCount: number;
  pageSize: number;
};

type PaginationActionType<T> =
  | {
      type: "NEXT_PAGE";
      payload: number;
    }
  | {
      type: "PREV_PAGE";
      payload: number;
    }
  | {
      type: "CHANGE_PAGE";
      payload: number;
    };

type PaginationOptionsType<T> = Partial<Pick<PaginationStatesType<T>, "currentPage" | "pageSize" | "totalPageCount">>;

const createInitialState = <T>(list: T[], options: Required<PaginationOptionsType<T>>): PaginationStatesType<T> => {
  return {
    currentPage: options.currentPage,
    paginationItems: list,
    pageSize: options.pageSize,
    totalPageCount: options?.totalPageCount,
  };
};

const changePage = <T>(state: PaginationStatesType<T>, nextPage: number): PaginationStatesType<T> => {
  const totalPageCount = Math.ceil(state.paginationItems.length / state.pageSize);
  const validNextPage = Math.max(1, Math.min(nextPage, totalPageCount));
  return {
    ...state,
    currentPage: validNextPage,
  };
};

const reducer = <T>(state: PaginationStatesType<T>, action: PaginationActionType<T>) => {
  switch (action.type) {
    case "NEXT_PAGE": {
      return changePage(state, state.currentPage + action.payload);
    }
    case "PREV_PAGE": {
      return changePage(state, state.currentPage - action.payload);
    }
    case "CHANGE_PAGE": {
      return changePage(state, action.payload);
    }
    default: {
      throw new Error("Invalid action type");
    }
  }
};

export const _getPaginationButtonList = <T>(state: PaginationStatesType<T>, buttonSize: number) => {
  const { currentPage } = state;
  const firstNum = Math.floor((currentPage - 1) / buttonSize) * buttonSize + 1;
  return Array.from({ length: buttonSize }).map((_, idx) => firstNum + idx);
};

const getPaginationList = <T>(
  states: Pick<PaginationStatesType<T>, "currentPage" | "pageSize" | "paginationItems">,
) => {
  const { currentPage, pageSize, paginationItems } = states;
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  return paginationItems.slice(start, end);
};

const DEFAULT_CURRENT_PAGE = 1;
const DEFAULT_PAGE_SIZE = 10;

const usePagination = <T>(list: T[], options?: PaginationOptionsType<T>) => {
  const {
    currentPage = DEFAULT_CURRENT_PAGE,
    pageSize = DEFAULT_PAGE_SIZE,
    totalPageCount = list.length,
  } = options ?? {};

  const initialState = createInitialState(list, { currentPage, pageSize, totalPageCount });
  const [state, dispatch] = useReducer(reducer, initialState);
  const getCurrentPageItemList = () => {
    return getPaginationList(state);
  };

  const goNextPage = (page: number) => {
    dispatch({ type: "NEXT_PAGE", payload: page });
  };

  const goPrevPage = (page: number) => {
    dispatch({ type: "PREV_PAGE", payload: page });
  };
};
