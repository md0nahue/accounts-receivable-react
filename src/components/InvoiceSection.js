import React from "react";

export function InvoiceSection({ items, title }) {
  if (!items?.length) {
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
            <th scope="col">Discount</th>
            <th scope="col">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>${(item.price_cents / 100)}</td>
              <td>{item.quantity}</td>
              <td>{item.discount_percent ? `${item.discount_percent}%` : ''}</td>
              <td>
                {item.discount_percent ? (
                  <>
                    <span className="strikethrough">
                      {`$${item.row_total_no_discount}`}
                    </span>
                    {` $${item.row_total}`}
                  </>
                ) : (
                  `$${item.row_total_no_discount}`
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
