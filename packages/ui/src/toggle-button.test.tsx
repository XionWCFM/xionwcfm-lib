import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ToggleButton } from "./toggle-button";
import "@testing-library/jest-dom";

describe("ToggleButton", () => {
  it("should render correctly with default props", () => {
    render(<ToggleButton value="test">Test Button</ToggleButton>);
    const button = screen.getByText("Test Button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("data-state", "unselected");
    expect(button).toHaveAttribute("role", "button");
    expect(button).toHaveAttribute("tabIndex", "0");
  });

  it("should render with selected state", () => {
    render(
      <ToggleButton value="test" selected>
        Test Button
      </ToggleButton>,
    );
    const button = screen.getByText("Test Button");

    expect(button).toHaveAttribute("data-state", "selected");
  });

  it("should handle click events", async () => {
    const handleClick = vi.fn();
    render(
      <ToggleButton value="test" onClick={handleClick}>
        Test Button
      </ToggleButton>,
    );
    const button = screen.getByText("Test Button");

    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should handle keyboard events", async () => {
    const handleKeyDown = vi.fn();
    render(
      <ToggleButton value="test" onKeyDown={handleKeyDown}>
        Test Button
      </ToggleButton>,
    );
    const button = screen.getByText("Test Button");

    // Space 키 테스트
    await userEvent.tab();
    expect(button).toHaveFocus();
    await userEvent.keyboard(" ");
    expect(handleKeyDown).toHaveBeenCalledTimes(1);

    // Enter 키 테스트
    await userEvent.keyboard("[Enter]");
    expect(handleKeyDown).toHaveBeenCalledTimes(2);
  });

  it("should apply custom className", () => {
    render(
      <ToggleButton value="test" className="custom-class">
        Test Button
      </ToggleButton>,
    );
    const button = screen.getByText("Test Button");

    expect(button).toHaveClass("custom-class");
  });

  it("should be disabled when disabled prop is true", () => {
    render(
      <ToggleButton value="test" disabled>
        Test Button
      </ToggleButton>,
    );
    const button = screen.getByText("Test Button");

    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-disabled", "true");
  });

  it("should not trigger click handler when disabled", async () => {
    const handleClick = vi.fn();
    render(
      <ToggleButton value="test" onClick={handleClick} disabled>
        Test Button
      </ToggleButton>,
    );
    const button = screen.getByText("Test Button");

    await userEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("should handle aria-label prop", () => {
    render(
      <ToggleButton value="test" aria-label="Test Label">
        Test Button
      </ToggleButton>,
    );
    const button = screen.getByLabelText("Test Label");

    expect(button).toBeInTheDocument();
  });
});
