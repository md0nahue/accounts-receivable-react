import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { InvoiceSection } from "./InvoiceSection";
import { useDispatch } from "react-redux";
import { toggleInvoiceCompleted } from "../actions";
import { calculateTotals } from "../utils/invoiceHelpers";

export function Invoice() {
  const dispatch = useDispatch();
  const { id } = useParams();
  let invoice = useSelector(({ invoices }) =>
    invoices.find((invoice) => invoice.id === id),
  );

  const toggleCompleted = () => {
    dispatch(toggleInvoiceCompleted(invoice.id));
  };

  if (!invoice) {
    return (
      <div className="Invoice">
        <h3>Invoice {id} not found.</h3>
      </div>
    );
  }

  invoice = calculateTotals(invoice)
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
        ${invoice.total_dollars}
      </div>
      <div>
        {invoice.completed ? 
        (<button
           className="button incomplete"
           onClick={toggleCompleted}
         >
           Mark as incomplete
        </button>) :
        (<button
           className="button complete"
           onClick={() => toggleCompleted()}
         >
           Mark as complete
         </button>)
      }
      </div>
    </div>
  );
}
