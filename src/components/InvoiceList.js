import React from "react";
import PropTypes from "prop-types";
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

InvoiceList.propTypes = {
  invoices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      client: PropTypes.string.isRequired,
    })
  ).isRequired,
};

function mapStateToProps(state) {
  return {
    invoices: state.invoices,
  };
}

export default connect(mapStateToProps)(InvoiceList);
