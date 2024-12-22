import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ElementType, useRef } from "react";
import "@testing-library/jest-dom";
import type { BoxProps, BoxRef } from "./box";
import { Stack } from "./stack";

describe("Stack", () => {
  it("should render as default div element with flex column", () => {
    render(<Stack>Content</Stack>);
    const element = screen.getByText("Content");
    expect(element.tagName).toBe("DIV");
    expect(element).toHaveClass("@xui-flex", "@xui-flex-col");
  });

  it("should render as specified element", () => {
    render(<Stack as="section">Content</Stack>);
    const element = screen.getByText("Content");
    expect(element.tagName).toBe("SECTION");
    expect(element).toHaveClass("@xui-flex", "@xui-flex-col");
  });

  it("should apply custom className while preserving default classes", () => {
    render(<Stack className="custom-class">Content</Stack>);
    const element = screen.getByText("Content");
    expect(element).toHaveClass("custom-class", "@xui-flex", "@xui-flex-col");
  });

  it("should forward ref correctly", () => {
    function TestComponent() {
      const ref = useRef<HTMLDivElement>(null);
      return (
        <Stack<"div"> ref={ref} as="div">
          Content
        </Stack>
      );
    }

    render(<TestComponent />);
    const element = screen.getByText("Content");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe("DIV");
  });

  it("should handle click events", async () => {
    const handleClick = vi.fn();
    render(<Stack onClick={handleClick}>Clickable</Stack>);

    await userEvent.click(screen.getByText("Clickable"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should handle keyboard events", async () => {
    const handleKeyDown = vi.fn();
    render(
      <Stack tabIndex={0} onKeyDown={handleKeyDown}>
        Interactive
      </Stack>,
    );

    const element = screen.getByText("Interactive");
    await userEvent.tab();
    expect(element).toHaveFocus();

    await userEvent.keyboard("[Enter]");
    expect(handleKeyDown).toHaveBeenCalledTimes(1);
  });

  it("should handle aria attributes", () => {
    render(
      <Stack aria-label="Test stack" aria-describedby="description">
        Accessible Content
      </Stack>,
    );

    const element = screen.getByLabelText("Test stack");
    expect(element).toHaveAttribute("aria-describedby", "description");
  });

  it("should handle nested elements", () => {
    render(
      <Stack>
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </Stack>,
    );

    expect(screen.getByText("Child 1")).toBeInTheDocument();
    expect(screen.getByText("Child 2")).toBeInTheDocument();
    expect(screen.getByText("Child 3")).toBeInTheDocument();
  });
});
