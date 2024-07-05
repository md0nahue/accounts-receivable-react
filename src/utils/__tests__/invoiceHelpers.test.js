import { calculateSubtotal, calculateTotals, calculateDiscounts } from '../invoiceHelpers';
describe('invoiceHelpers', () => {
  describe('calculateSubtotal', () => {
    it('should calculate the subtotal of given items', () => {
      const items = [
        { row_total: 100 },
        { row_total: 200 },
        { row_total: 300 },
      ];
      const result = calculateSubtotal(items);
      expect(result).toBe(600);
    });

    it('should return 0 for an empty items array', () => {
      const items = [];
      const result = calculateSubtotal(items);
      expect(result).toBe(0);
    });
  });

  describe('calculateDiscounts', () => {
    it('should calculate the discounts and return the updated items', () => {
      const section = [
        { price_cents: 10000, quantity: 1, discount_percent: 10 },
        { price_cents: 20000, quantity: 2, discount_percent: 20 },
        { price_cents: 30000, quantity: 3, discount_percent: 0 },
      ];
      const result = calculateDiscounts(section);
      expect(result).toEqual([
        { price_cents: 10000, quantity: 1, discount_percent: 10, row_total_no_discount: 100, row_total: 90 },
        { price_cents: 20000, quantity: 2, discount_percent: 20, row_total_no_discount: 400, row_total: 320 },
        { price_cents: 30000, quantity: 3, discount_percent: 0, row_total_no_discount: 900, row_total: 900 },
      ]);
    });

    it('should return the same items if no discount is applied', () => {
      const section = [
        { price_cents: 10000, quantity: 1, discount_percent: 0 },
      ];
      const result = calculateDiscounts(section);
      expect(result).toEqual([
        { price_cents: 10000, quantity: 1, discount_percent: 0, row_total_no_discount: 100, row_total: 100 },
      ]);
    });
  });

  describe('calculateTotals', () => {
    it('should calculate the total dollars for the given invoice', () => {
      const invoice = {
        projects: [
          { price_cents: 10000, quantity: 1, discount_percent: 10 },
          { price_cents: 20000, quantity: 2, discount_percent: 20 },
        ],
        services: [
          { price_cents: 30000, quantity: 3, discount_percent: 0 },
        ],
      };
      const result = calculateTotals(invoice);
      expect(result.total_dollars).toBe(1310); // 90 + 320 + 900
    });

    it('should return 0 total dollars for an invoice with no projects or services', () => {
      const invoice = {
        projects: [],
        services: [],
      };
      const result = calculateTotals(invoice);
      expect(result.total_dollars).toBe(0);
    });
  });
});