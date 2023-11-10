import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { render, screen, fireEvent} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

    expect(container).toMatchSnapshot();
  });

  it('does not dispatch on "save" with form default values', () => {
    const store = mockStore({});
    renderWithStore(store);

    userEvent.click(screen.getByText("Save"));
    const actions = store.getActions();

    expect(actions.length).toEqual(0);
  });

  it('Dispatches action on submit if client picked', async () => {
    const store = mockStore({});
    renderWithStore(store);

    await userEvent.selectOptions(screen.getByLabelText("Client"), "CircleCi");

		const form = screen.getByRole("form");
		fireEvent.submit(form);

    const actions = store.getActions();
    expect(actions.length).toEqual(1);
    expect(actions[0].type).toEqual("ADD_INVOICE");
  });
});
