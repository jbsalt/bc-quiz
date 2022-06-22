import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../../../components/button";

const onClickMock = jest.fn();

describe("Button", () => {
  it("renders text children", () => {
    render(<Button>Test button</Button>);
    expect(screen.getByText("Test button")).toBeInTheDocument();
  });
  it("renders html children", () => {
    render(
      <Button>
        <div data-testid="test-child">Test button</div>
      </Button>
    );
    expect(screen.getByText("Test button")).toBeInTheDocument();
    expect(screen.getByTestId("test-child")).toBeInTheDocument();
  });
  it("fires the onClick prop when clicked", () => {
    expect(onClickMock).not.toBeCalled();
    render(<Button onClick={onClickMock}>Test button</Button>);
    userEvent.click(screen.getByText("Test button"));
    expect(onClickMock).toBeCalledTimes(1);
  });
  it("disabled the button with disabled prop", () => {
    render(
      <Button onClick={onClickMock} disabled>
        Test button
      </Button>
    );
    expect(screen.getByText("Test button").closest("button")).toBeDisabled();
  });
  it("renders a <button> element by default", () => {
    render(<Button>Test button</Button>);
    expect(
      screen.queryByText("Test button").closest("button")
    ).toBeInTheDocument();
    expect(
      screen.queryByText("Test button").closest("a")
    ).not.toBeInTheDocument();
  });
  it("renders a link when href prop is passed", () => {
    render(<Button href="/test">Test button</Button>);
    expect(
      screen.queryByText("Test button").closest("button")
    ).not.toBeInTheDocument();
    expect(screen.queryByText("Test button").closest("a")).toBeInTheDocument();
  });
});
