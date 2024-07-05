import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { InvoiceList } from "../InvoiceList";

const mockStore = configureStore();

describe("InvoiceList", () => {
  it("Renders a list of provided invoices", () => {
    const invoices = [
      { id: "1", completed: true, client: "Test Double 1" },
      { id: "2", completed: false, client: "Test Double 2" },
      { id: "3", completed: false, client: "Test Double 3" },
    ];
    const store = mockStore({ invoices });

    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <InvoiceList />
        </MemoryRouter>
      </Provider>,
    );

    const invoiceList = container.querySelector(".InvoiceList");

    const blueCircle = document.querySelector('.blue-circle');
    expect(blueCircle).toBeInTheDocument();
    expect(blueCircle).toHaveTextContent('2');

    // Test must account for the new incomplete invoices row
    expect(invoiceList.children.length).toEqual(invoices.length + 1);
    expect(container.firstChild).toMatchSnapshot();
  });
});
