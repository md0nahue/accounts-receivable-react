import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "jest-dom/extend-expect";

import InvoicesForm from "../InvoicesForm";

const middlewares = [];
const mockStore = configureStore(middlewares);

beforeEach(cleanup);

function renderWithStore(store) {
  return render(
    <Provider store={store}>
      <InvoicesForm />
    </Provider>
  );
}

describe("InvoicesForm Component", () => {
  it("Renders a form matching snapshot", () => {
    const store = mockStore({});
    const { container } = renderWithStore(store);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Dispatches action on "save" click', () => {
    const store = mockStore({});
    const { getByText } = renderWithStore(store);

    fireEvent.click(getByText("Save"));
    const actions = store.getActions();

    expect(actions.length).toEqual(1);
    expect(actions[0].type).toEqual("ADD_INVOICE");
  });
});
