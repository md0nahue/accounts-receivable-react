export const types = {
  ADD_INVOICE: "ADD_INVOICE",
};

let nextId = 10;
export function addInvoice(invoice) {
  return {
    type: types.ADD_INVOICE,
    payload: { ...invoice, id: String(++nextId) },
  };
}
