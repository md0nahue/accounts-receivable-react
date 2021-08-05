export const lineItemFactory = (overrides = {}) => {
  return {
    name: "Anti-virus Software",
    description: "Subscription service for virus software.",
    discount_percent: null,
    price_cents: 20000,
    quantity: 1,
    ...overrides,
  };
};

let nextInvoiceId = 1;

export const invoiceFactory = (overrides = {}) => {
  return {
    id: String(nextInvoiceId++),
    client: "CircleCi",
    attn: "Bo <bo@circleci.com>",
    due_date: "10/10/2020",
    notes: "Send monthly invoices.",
    projects: [lineItemFactory()],
    services: [
      lineItemFactory({
        name: "Software Development",
        description: "Deploy new environment.",
        price_cents: 15000,
      }),
    ],
    ...overrides,
  };
};
