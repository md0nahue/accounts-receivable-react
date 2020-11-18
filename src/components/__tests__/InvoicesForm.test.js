import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { render, fireEvent, screen } from "@testing-library/react";

import { InvoicesForm } from "../InvoicesForm";

const mockStore = configureStore();

function renderWithStore(store) {
  return render(
    <MemoryRouter>
      <Provider store={store}>
        <InvoicesForm />
      </Provider>
    </MemoryRouter>
  );
}

describe("InvoicesForm", () => {
  it("Renders a form matching snapshot", () => {
    const store = mockStore({});
    const { container } = renderWithStore(store);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Dispatches action on "save" click', () => {
    const store = mockStore({});
    renderWithStore(store);

    fireEvent.click(screen.getByText("Save"));
    const actions = store.getActions();

    expect(actions.length).toEqual(1);
    expect(actions[0].type).toEqual("ADD_INVOICE");
  });
});
