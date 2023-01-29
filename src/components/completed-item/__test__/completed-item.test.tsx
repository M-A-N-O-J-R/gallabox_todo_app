
import * as ReactDOM from "react-dom";
import React from "react";
import CompletedItem from "../compled-item";
import type { Todo } from "../../../models/Todo";

// eslint-disable-next-line no-undef
describe("Completed Item component Tests", () => {
  let container: HTMLDivElement;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(
      <CompletedItem
        todo={{ id: 12, todo: "Buy Milk" }}
        handleDelete={function (id: number): void {
          throw new Error("Function not implemented.");
        }}
        handleSave={function (todo: Todo): void {
          throw new Error("Function not implemented.");
        }}
        handleChange={function (todo: Todo): void {
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
    const divs = container.querySelector("[data-test='completed-item']");
    expect(divs).toBeInTheDocument();
  });
});
