import React from "react";
import ReactDom from "react-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "jest-dom/extend-expect";

import InvoiceList from "../InvoiceList";

const middlewares = [];
const mockStore = configureStore(middlewares);

beforeEach(cleanup);

describe("InvoiceList Component", () => {
  it("Renders a list of provided invoices", () => {
    let invoices = [
      { id: 1, client: "Test Double 1" },
      { id: 2, client: "Test Double 2" },
      { id: 3, client: "Test Double 3" }
    ];
    let store = mockStore({ invoices });

    let { container } = render(
      <Provider store={store}>
        <InvoiceList />
      </Provider>
    );

    let invoiceList = container.querySelector(".InvoiceList");
    expect(invoiceList.children.length).toEqual(invoices.length);
    expect(container.firstChild).toMatchSnapshot();
  });
});
