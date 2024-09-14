import { act, renderHook } from "@testing-library/react";
import { useDraft } from "./use-draft";

describe("Usedraft를 테스트합니다.", () => {
  it("Usedraft는 초기값만 전달된 상태에서 props으로 전달받은 초기값을 반환합니다.", () => {
    const { result } = renderHook(() => useDraft("initialValue"));
    const [value, setState] = result.current;
    act(() => setState((prev) => prev));
    expect(value).toBe("initialValue");
  });
});
