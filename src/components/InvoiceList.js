import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export function InvoiceList() {
  const invoices = useSelector((state) => state.invoices);

  return (
    <ul className="InvoiceList nav nav-pills flex-column">
      {invoices.map((invoice) => (
        <li className="nav-item" key={invoice.id}>
          <NavLink to={`/invoices/${invoice.id}`} className="nav-link">
            #{invoice.id} {invoice.client}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
