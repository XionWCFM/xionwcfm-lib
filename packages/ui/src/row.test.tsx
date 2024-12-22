import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Row } from "./row";

describe("Row", () => {
  const user = userEvent.setup();

  it("renders children correctly", () => {
    render(<Row>Content</Row>);
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("renders left and right content correctly", () => {
    render(
      <Row left="Left Content" right="Right Content">
        Middle Content
      </Row>,
    );
    expect(screen.getByText("Left Content")).toBeInTheDocument();
    expect(screen.getByText("Middle Content")).toBeInTheDocument();
    expect(screen.getByText("Right Content")).toBeInTheDocument();
  });

  it("renders with custom element type", () => {
    render(
      <Row as="div" data-testid="custom-row">
        Content
      </Row>,
    );
    const row = screen.getByTestId("custom-row");
    expect(row.tagName).toBe("DIV");
  });

  it("renders with custom className", () => {
    render(<Row className="custom-class">Content</Row>);
    const content = screen.getByText("Content");
    expect(content.parentElement).toHaveClass("custom-class");
  });

  it("renders ReactNode elements correctly", () => {
    const LeftComponent = () => <div>Left Node</div>;
    const RightComponent = () => <div>Right Node</div>;

    render(
      <Row left={<LeftComponent />} right={<RightComponent />}>
        <div>Child Node</div>
      </Row>,
    );

    expect(screen.getByText("Left Node")).toBeInTheDocument();
    expect(screen.getByText("Child Node")).toBeInTheDocument();
    expect(screen.getByText("Right Node")).toBeInTheDocument();
  });

  it("maintains proper layout structure", () => {
    render(
      <Row left="Left" right="Right">
        Center
      </Row>,
    );

    const container = screen.getByText("Center").parentElement;
    expect(container).toHaveClass("@xui-flex");
    expect(container).toHaveClass("@xui-w-full");
    expect(container).toHaveClass("@xui-justify-between");
    expect(container).toHaveClass("@xui-items-center");
  });
});
