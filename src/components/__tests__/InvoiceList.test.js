import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "jest-dom/extend-expect";

import InvoiceList from "../InvoiceList";

const middlewares = [];
const mockStore = configureStore(middlewares);

beforeEach(cleanup);

describe("InvoiceList Component", () => {
  it("Renders a list of provided invoices", () => {
    const invoices = [
      { id: 1, client: "Test Double 1" },
      { id: 2, client: "Test Double 2" },
      { id: 3, client: "Test Double 3" },
    ];
    const store = mockStore({ invoices });

    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <InvoiceList />
        </MemoryRouter>
      </Provider>
    );

    const invoiceList = container.querySelector(".InvoiceList");
    expect(invoiceList.children.length).toEqual(invoices.length);
    expect(container.firstChild).toMatchSnapshot();
  });
});
