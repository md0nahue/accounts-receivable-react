export const calculateSubtotal = (items) => {
  return items.reduce((sum, item) => {
    return sum + item.row_total;
  }, 0);
};

export const calculateTotals = (invoice) => {
  invoice['projects'] = calculateDiscounts(invoice.projects)
  invoice['services'] = calculateDiscounts(invoice.services)
  const projectsSubtotal = calculateSubtotal(invoice.projects) 
  const servicesSubtotal = calculateSubtotal(invoice.services)
  const totalDollars = projectsSubtotal + servicesSubtotal;
  invoice['total_dollars'] = totalDollars
  return invoice;
};

export const calculateDiscounts = (section) => {
  return section.map(item => {
    const rowTotalCents = item.price_cents * item.quantity;
    const discount = item.discount_percent ? rowTotalCents * (item.discount_percent / 100) : 0;
    const discountedPrice = rowTotalCents - discount
    item['row_total_no_discount'] = rowTotalCents / 100
    item['row_total'] = (rowTotalCents - discount) / 100
    return item;
  });
};
