
import * as ReactDOM from "react-dom";
import React from "react";
import type { Todo } from "../../../models/Todo";
import CompletedItems from "../../completed-items/completed-items";

// eslint-disable-next-line no-undef
describe("Completed Items component Tests", () => {
  let container: HTMLDivElement;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(
     <CompletedItems todos={[]} setTodos={function (value: React.SetStateAction<Todo[]>): void {
        throw new Error("Function not implemented.");
      } } completedItems={[]} setCompletedItems={function (value: React.SetStateAction<Todo[]>): void {
        throw new Error("Function not implemented.");
      } }/>,
      container
    );
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("Renders correctlt initial document", () => {
    const divs = container.querySelector("[data-test='completed-items']");
    expect(divs).toBeInTheDocument();
  });
});
