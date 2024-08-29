import { render, screen } from "@testing-library/react";
import { _getPaginationButtonList } from "./use-pagination";

describe("Usepagination를 테스트합니다.", () => {
  it("Usepagination는", () => {
    const result = _getPaginationButtonList(
      { currentPage: 5, pageSize: 10, paginationItems: [], totalPageCount: 10 },
      5,
    );
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
  it("Usepagination는", () => {
    const result = _getPaginationButtonList(
      { currentPage: 6, pageSize: 10, paginationItems: [], totalPageCount: 10 },
      5,
    );
    expect(result).toEqual([6, 7, 8, 9, 10]);
  });
});
