import React from "react";
import { render, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { MemoryRouter, Route } from "react-router-dom";

import { invoiceFactory } from "../../testUtils/factories";
import { Invoice } from "../Invoice";

jest.mock("../InvoiceSection", () => ({
  InvoiceSection: (props) => `InvoiceSection:${JSON.stringify(props)}`,
}));

const mockStore = configureStore();

describe("Invoice", () => {
  it("Renders an invoice matching url 'id' param", () => {
    const invoices = [
      invoiceFactory({ id: "1", client: "Microsoft" }),
      invoiceFactory({ id: "2", client: "Netflix" }),
      invoiceFactory({ id: "3", client: "Facebook" }),
    ];

    const store = mockStore({ invoices });

    const { asFragment } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/invoices/2"]}>
          <Route path="/invoices/:id">
            <Invoice />
          </Route>
        </MemoryRouter>
      </Provider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("Renders invoice total", () => {
    const invoices = [invoiceFactory({ id: "1", client: "Microsoft" })];

    const store = mockStore({ invoices });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/1"]}>
          <Route path="/:id">
            <Invoice />
          </Route>
        </MemoryRouter>
      </Provider>,
    );

    const totalDiv = screen.queryByTestId(`invoice-1-total`);

    expect(totalDiv).toBeTruthy();
    expect(totalDiv.textContent).toEqual("Total: $350");
  });
});
