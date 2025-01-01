import { cn } from "./cn";

describe("Cn를 테스트합니다.", () => {
  it("Cn는", () => {
    const result = cn(" text-primary-50 text-primary-100 ");
    expect(result).toBe("text-primary-100");
  });
  it("Cn는", () => {
    const result = cn(" text-primary-50 text-primary-100  text-size-5");
    expect(result).toBe("text-primary-100 text-size-5");
  });
});
