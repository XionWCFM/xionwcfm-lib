import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRef } from "react";
import "@testing-library/jest-dom";
import { Box } from "./box";

describe("Box", () => {
  it("should render as default div element", () => {
    render(<Box>Content</Box>);
    const element = screen.getByText("Content");
    expect(element.tagName).toBe("DIV");
  });

  it("should render as specified element", () => {
    render(<Box as="section">Content</Box>);
    const element = screen.getByText("Content");
    expect(element.tagName).toBe("SECTION");
  });

  it("should apply custom className", () => {
    render(<Box className="custom-class">Content</Box>);
    const element = screen.getByText("Content");
    expect(element).toHaveClass("custom-class");
  });

  it("should forward ref correctly", () => {
    function TestComponent() {
      const ref = useRef<HTMLDivElement>(null);
      return <Box ref={ref}>Content</Box>;
    }

    render(<TestComponent />);
    const element = screen.getByText("Content");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe("DIV");
  });

  it("should handle click events", async () => {
    const handleClick = vi.fn();
    render(<Box onClick={handleClick}>Clickable</Box>);

    await userEvent.click(screen.getByText("Clickable"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should handle keyboard events", async () => {
    const handleKeyDown = vi.fn();
    render(
      <Box tabIndex={0} onKeyDown={handleKeyDown}>
        Interactive
      </Box>,
    );

    const element = screen.getByText("Interactive");
    await userEvent.tab();
    expect(element).toHaveFocus();

    await userEvent.keyboard("[Enter]");
    expect(handleKeyDown).toHaveBeenCalledTimes(1);
  });

  it("should handle aria attributes", () => {
    render(
      <Box aria-label="Test label" aria-describedby="description">
        Accessible Content
      </Box>,
    );

    const element = screen.getByLabelText("Test label");
    expect(element).toHaveAttribute("aria-describedby", "description");
  });

  it("should handle data attributes", () => {
    render(
      <Box data-testid="test-box" data-custom="value">
        Content
      </Box>,
    );

    const element = screen.getByTestId("test-box");
    expect(element).toHaveAttribute("data-custom", "value");
  });

  it("should handle style prop", () => {
    render(<Box style={{ backgroundColor: "red" }}>Styled Content</Box>);

    const element = screen.getByText("Styled Content");
    expect(element).toHaveStyle({ backgroundColor: "red" });
  });
});
