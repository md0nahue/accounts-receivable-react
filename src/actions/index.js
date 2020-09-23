import { ADD_INVOICE } from "../constants/types";

export const addInvoice = function (invoice) {
  return { type: ADD_INVOICE, payload: invoice };
};
