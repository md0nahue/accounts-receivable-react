export const types = {
  ADD_INVOICE: "ADD_INVOICE"
};

export function addInvoice(invoice) {
  return { type: types.ADD_INVOICE, payload: invoice };
}
