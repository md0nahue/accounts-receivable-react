import React from "react";

function InvoiceSection({ items, title }) {
  if (!items) {
    return <p>This section is empty!</p>;
  }

  return (
    <>
      <h5>{title}</h5>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Unit Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>${item.price_cents / 100}</td>
              <td>{item.quantity}</td>
              <td>${(item.price_cents * item.quantity) / 100}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default InvoiceSection;
