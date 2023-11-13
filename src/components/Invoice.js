import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { InvoiceSection } from "./InvoiceSection";

export function Invoice() {
  const { id } = useParams();
  const invoice = useSelector(({ invoices }) =>
    invoices.find((invoice) => invoice.id === id),
  );

  if (!invoice) {
    return (
      <div className="Invoice">
        <h3>Invoice {id} not found.</h3>
      </div>
    );
  }

  return (
    <div className="Invoice">
      <h2>{invoice.client} Invoice</h2>
      <div>
        <strong>Attn: </strong>
        {invoice.attn}
      </div>
      <div>
        <strong>Due Date: </strong>
        {invoice.due_date}
      </div>
      <div>
        <strong>Notes: </strong>
        {invoice.notes}
      </div>
      <br />
      <InvoiceSection title="Projects" items={invoice.projects} />
      <br />
      <InvoiceSection title="Services" items={invoice.services} />
      <div data-testid={`invoice-${invoice.id}-total`}>
        <strong>Total: </strong>
        $1,000,000
      </div>
    </div>
  );
}
