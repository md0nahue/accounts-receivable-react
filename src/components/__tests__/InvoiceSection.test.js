import React from "react";
import { render, screen } from "@testing-library/react";
import { InvoiceSection } from "../InvoiceSection";

describe("InvoiceSection", () => {
  it("Renders a placeholder if no items prop given", () => {
    const { container } = render(<InvoiceSection />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <p>
        This section is empty!
      </p>
    `);
  });

  it("Renders a placeholder if empty items list given", () => {
    const { container } = render(<InvoiceSection items={[]} />);

    expect(screen.queryByText("This section is empty!")).not.toBeNull();
    expect(container.firstChild).toMatchInlineSnapshot(`
      <p>
        This section is empty!
      </p>
    `);
  });

  it("Does not render a placeholder if empty items list is not empty", () => {
    render(<InvoiceSection items={[1]} />);

    expect(screen.queryByText("This section is empty!")).toBeNull();
  });

  it("renders a given title as H5 heading", () => {
    render(<InvoiceSection items={[1]} title="Test Title" />);

    const heading = screen.queryByRole("heading");

    expect(heading).toBeDefined();
    expect(heading).toHaveTextContent("Test Title");
    expect(heading.tagName).toEqual("H5");
  });

  it("renders a matching snapshot", () => {
    const lineItems = [
      {
        name: "Job Many",
        description: "decribe many",
        price_cents: 10000,
        discount_percent: 10,
        quantity: 10,
      },
      {
        name: "Job Few",
        description: "describe few",
        price_cents: 10000,
        discount_percent: null,
        quantity: 1,
      },
      {
        name: "Job None",
        description: "describe none",
        price_cents: 10000,
        discount_percent: null,
        quantity: 0,
      },
    ];

    const { asFragment } = render(
      <InvoiceSection items={lineItems} title="Line Items Section" />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
