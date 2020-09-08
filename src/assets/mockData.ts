import { CCLoanOffer } from "../Models/CCLoanOffer";

export const cards: CCLoanOffer[] = [
  {
    monthlyPayment: 29900,
    term: 6,
    noAutoPay: {id: 1},
    apr: 1,
    note: 'This is a 24 months, 26% APR plan, with a 0% APR benefit if paid in full within 6 months'
  },
  {
    monthlyPayment: 39900,
    term: 12,
    noAutoPay: {apr : 0.17, monthlyPayment: 150},
    apr: 1,
    note: 'This is a 24 months, 26% APR plan, with a 0% APR benefit if paid in full within 12 months'
  },
  {
    monthlyPayment: 49900,
    term: 18,
    noAutoPay: {id: 1},
    apr: 1,
    note: 'This is a 24 months, 26% APR plan, with a 0% APR benefit if paid in full within 18 months'
  },
  {
    monthlyPayment: 59900,
    term: 6,
    noAutoPay: {apr : 0.17, monthlyPayment: 150},
    apr: 1,
    note: 'This is a 24 months, 26% APR plan, with a 0% APR benefit if paid in full within 12 months'
  }
];