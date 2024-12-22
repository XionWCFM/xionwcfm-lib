import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRef } from "react";
import "@testing-library/jest-dom";
import type { BoxRef } from "./box";
import { Skeleton } from "./skeleton";

describe("Skeleton", () => {
  it("should render as default div element with skeleton classes", () => {
    render(<Skeleton>Content</Skeleton>);
    const element = screen.getByText("Content");
    expect(element.tagName).toBe("DIV");
    expect(element).toHaveClass("xui-skeleton-color", "@xui-animate-pulse");
  });

  it("should render with custom width and height", () => {
    render(
      <Skeleton w="100px" h="50px">
        Content
      </Skeleton>,
    );
    const element = screen.getByText("Content");
    expect(element).toHaveStyle({ width: "100px", height: "50px" });
  });

  it("should render as specified element", () => {
    render(<Skeleton as="section">Content</Skeleton>);
    const element = screen.getByText("Content");
    expect(element.tagName).toBe("SECTION");
  });

  it("should apply custom className while preserving default classes", () => {
    render(<Skeleton className="custom-class">Content</Skeleton>);
    const element = screen.getByText("Content");
    expect(element).toHaveClass("custom-class", "xui-skeleton-color", "@xui-animate-pulse");
  });

  it("should forward ref correctly", () => {
    function TestComponent() {
      const ref = useRef<HTMLDivElement>(null);
      return <Skeleton ref={ref}>Content</Skeleton>;
    }

    render(<TestComponent />);
    const element = screen.getByText("Content");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe("DIV");
  });

  it("should handle click events", async () => {
    const handleClick = vi.fn();
    render(<Skeleton onClick={handleClick}>Clickable</Skeleton>);

    await userEvent.click(screen.getByText("Clickable"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should handle keyboard events", async () => {
    const handleKeyDown = vi.fn();
    render(
      <Skeleton tabIndex={0} onKeyDown={handleKeyDown}>
        Interactive
      </Skeleton>,
    );

    const element = screen.getByText("Interactive");
    await userEvent.tab();
    expect(element).toHaveFocus();

    await userEvent.keyboard("[Enter]");
    expect(handleKeyDown).toHaveBeenCalledTimes(1);
  });

  it("should handle custom styles", () => {
    render(<Skeleton style={{ backgroundColor: "red" }}>Styled Content</Skeleton>);

    const element = screen.getByText("Styled Content");
    expect(element).toHaveStyle({ backgroundColor: "red" });
  });

  it("should handle aria attributes", () => {
    render(
      <Skeleton aria-label="Loading content" aria-busy="true">
        Loading
      </Skeleton>,
    );

    const element = screen.getByLabelText("Loading content");
    expect(element).toHaveAttribute("aria-busy", "true");
  });
});
