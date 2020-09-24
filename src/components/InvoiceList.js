import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

function InvoiceList({ invoices }) {
  return (
    <ul className="InvoiceList nav nav-pills flex-column">
      {invoices.map((invoice) => (
        <li className="nav-item" key={invoice.id}>
          <NavLink to={`/invoices/${invoice.id}`} className="nav-link">
            {invoice.client}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    invoices: state.invoices,
  };
};

export default connect(mapStateToProps)(InvoiceList);
