import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Center } from "./center";

describe("Center", () => {
  it("should handle aria attributes", () => {
    render(
      <Center aria-label="Test label" aria-describedby="description">
        Accessible Content
      </Center>,
    );

    const element = screen.getByLabelText("Test label");
    expect(element).toHaveAttribute("aria-describedby", "description");
  });
});
