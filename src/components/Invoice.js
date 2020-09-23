import React from "react";
import { connect } from "react-redux";
import InvoiceSection from "./InvoiceSection";

const mapStateToProps = (state, { match }) => {
  return {
    invoice: state.invoices.find((invoice) => invoice.id === match.params.id),
  };
};

function Invoice(props) {
  if (props.invoice) {
    return (
      <div className="Invoice">
        <h2>{props.invoice.client} Invoice</h2>
        <div>
          <strong>Attn: </strong>
          {props.invoice.attn}
        </div>
        <div>
          <strong>Due Date: </strong>
          {props.invoice.due_date}
        </div>
        <div>
          <strong>Notes: </strong>
          {props.invoice.notes}
        </div>
        <br />
        <InvoiceSection title="Projects" items={props.invoice.projects} />
        <br />
        <InvoiceSection title="Services" items={props.invoice.services} />
        <div>
          <strong>Total: </strong>
          $1,000,000
        </div>
      </div>
    );
  } else {
    return (
      <div className="Invoice">
        <h3>Select an invoice</h3>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Invoice);
