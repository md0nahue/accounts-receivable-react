import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    invoices: state.invoices,
  };
};

function InvoiceList(props) {
  return (
    <ul className="InvoiceList nav nav-pills flex-column">
      {props.invoices.map((invoice) => {
        return (
          <li className="nav-item" key={invoice.id}>
            <NavLink to={`/invoices/${invoice.id}`} className="nav-link">
              {invoice.client}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default connect(mapStateToProps)(InvoiceList);
