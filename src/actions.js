export const types = {
  ADD_INVOICE: "ADD_INVOICE",
  TOGGLE_INVOICE_COMPLETED: "TOGGLE_INVOICE_COMPLETED"
};

let nextId = 10;
export function addInvoice(invoice) {
  return {
    type: types.ADD_INVOICE,
    payload: { ...invoice, id: String(++nextId) },
  };
}

export function toggleInvoiceCompleted(id) {
  return {
    type: types.TOGGLE_INVOICE_COMPLETED,
    payload: { id },
  };
}