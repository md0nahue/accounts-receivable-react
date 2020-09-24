import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import InvoiceSection from "./InvoiceSection";

function Invoice({ invoice }) {
  if (!invoice) {
    return (
      <div className="Invoice">
        <h3>Select an invoice</h3>
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
      <div>
        <strong>Total: </strong>
        $1,000,000
      </div>
    </div>
  );
}

const BillablePropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  discount_percent: PropTypes.number,
  price_cents: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
});

Invoice.propTypes = {
  invoice: PropTypes.shape({
    id: PropTypes.string.isRequired,
    client: PropTypes.string.isRequired,
    attn: PropTypes.string.isRequired,
    due_date: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired,
    projects: PropTypes.arrayOf(BillablePropType).isRequired,
    services: PropTypes.arrayOf(BillablePropType).isRequired,
  }),
};

function mapStateToProps(state, props) {
  return {
    invoice: state.invoices.find(
      (invoice) => invoice.id === props.match.params.id
    ),
  };
}

export default connect(mapStateToProps)(Invoice);
