import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { ToggleButton } from "./toggle-button";
import { ToggleButtonMultipleGroup } from "./toggle-button-multiple-group";
import "@testing-library/jest-dom";

describe("ToggleButtonMultipleGroup", () => {
  const TestComponent = ({ allowToggle }: { allowToggle: boolean }) => {
    const [value, setValue] = useState<string[]>([]);
    return (
      <ToggleButtonMultipleGroup value={value} onChange={setValue} allowToggle={allowToggle}>
        <ToggleButton value="1">1</ToggleButton>
        <ToggleButton value="2">2</ToggleButton>
        <ToggleButton value="3">3</ToggleButton>
      </ToggleButtonMultipleGroup>
    );
  };

  it("should render buttons correctly", () => {
    render(<TestComponent allowToggle={true} />);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  describe("when allowToggle is true", () => {
    it("should toggle selected state on click", async () => {
      render(<TestComponent allowToggle={true} />);
      const button1 = screen.getByText("1");

      // 초기 상태 확인
      expect(button1).toHaveAttribute("data-state", "unselected");

      // 첫 번째 클릭 (선택)
      await userEvent.click(button1);
      expect(button1).toHaveAttribute("data-state", "selected");

      // 두 번째 클릭 (토글 해제)
      await userEvent.click(button1);
      expect(button1).toHaveAttribute("data-state", "unselected");
    });

    it("should allow multiple buttons to be selected", async () => {
      render(<TestComponent allowToggle={true} />);
      const button1 = screen.getByText("1");
      const button2 = screen.getByText("2");
      const button3 = screen.getByText("3");

      await userEvent.click(button1);
      await userEvent.click(button2);
      await userEvent.click(button3);

      expect(button1).toHaveAttribute("data-state", "selected");
      expect(button2).toHaveAttribute("data-state", "selected");
      expect(button3).toHaveAttribute("data-state", "selected");
    });

    it("should allow deselecting individual buttons", async () => {
      render(<TestComponent allowToggle={true} />);
      const button1 = screen.getByText("1");
      const button2 = screen.getByText("2");

      // 두 버튼 선택
      await userEvent.click(button1);
      await userEvent.click(button2);

      // button1만 선택 해제
      await userEvent.click(button1);

      expect(button1).toHaveAttribute("data-state", "unselected");
      expect(button2).toHaveAttribute("data-state", "selected");
    });
  });

  describe("when allowToggle is false", () => {
    it("should not allow deselecting buttons", async () => {
      render(<TestComponent allowToggle={false} />);
      const button1 = screen.getByText("1");

      await userEvent.click(button1);
      expect(button1).toHaveAttribute("data-state", "selected");

      // 다시 클릭해도 선택 해제되지 않음
      await userEvent.click(button1);
      expect(button1).toHaveAttribute("data-state", "selected");
    });

    it("should allow selecting multiple buttons without deselection", async () => {
      render(<TestComponent allowToggle={false} />);
      const button1 = screen.getByText("1");
      const button2 = screen.getByText("2");

      await userEvent.click(button1);
      await userEvent.click(button2);

      expect(button1).toHaveAttribute("data-state", "selected");
      expect(button2).toHaveAttribute("data-state", "selected");

      // 다시 클릭해도 선택 해제되��� 않음
      await userEvent.click(button1);
      expect(button1).toHaveAttribute("data-state", "selected");
    });
  });

  it("should handle keyboard interactions", async () => {
    render(<TestComponent allowToggle={true} />);
    const button1 = screen.getByText("1");

    // Tab으로 포커스
    await userEvent.tab();
    expect(button1).toHaveFocus();

    // Space로 선택
    await userEvent.keyboard(" ");
    expect(button1).toHaveAttribute("data-state", "selected");

    // Enter로 선택 해제
    await userEvent.keyboard("[Enter]");
    expect(button1).toHaveAttribute("data-state", "unselected");
  });
});
