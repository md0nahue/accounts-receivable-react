import { types } from "./actions";

const initialState = { invoices: [], activeInvoiceId: -1 };

export default function invoices(state = initialState, action) {
  switch (action.type) {
    case types.ADD_INVOICE:
      return { ...state, invoices: [...state.invoices, action.payload] };
    case types.TOGGLE_INVOICE_COMPLETED:
      const updatedInvoices = state.invoices.map(invoice =>
        invoice.id === action.payload.id
          ? { ...invoice, completed: !invoice.completed }
          : invoice
      );
      return {
        ...state,
        invoices: updatedInvoices,
      };
    default:
      return state;
  }
}
