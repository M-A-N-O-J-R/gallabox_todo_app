import AddItem from "../add-item";
import * as ReactDOM from "react-dom";
import React from "react";

// eslint-disable-next-line no-undef
describe("Add component Tests", () => {
  let container: HTMLDivElement;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(
      <AddItem
        todo={""}
        setTodo={function (value: React.SetStateAction<string>): void {
          throw new Error("Function not implemented.");
        }}
        handleSubmit={function (e: React.FormEvent<EventTarget>): void {
          throw new Error("Function not implemented.");
        }}
      />,
      container
    );
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("Renders correctlt initial document", () => {
    const divs = container.querySelector("[data-test='add-item']");
    expect(divs).toBeInTheDocument();
    expect(container.querySelector("[data-test='input']")).toBeInTheDocument();
  });
});
