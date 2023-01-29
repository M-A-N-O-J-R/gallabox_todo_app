import * as ReactDOM from "react-dom";
import React from "react";
import DisplayItems from "../../display-items/display-items";
import { type Todo } from "../../../models/Todo";

// eslint-disable-next-line no-undef
describe("Display Item component Tests", () => {
  let container: HTMLDivElement;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(
      <DisplayItems
        todos={[]}
        setTodos={function (value: React.SetStateAction<Todo[]>): void {
          throw new Error("Function not implemented.");
        }}
        completedItems={[]}
        setCompletedItems={function (
          value: React.SetStateAction<Todo[]>
        ): void {
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
    const divs = container.querySelector("[data-test='display-items']");
    expect(divs).toBeInTheDocument();
  });
});
