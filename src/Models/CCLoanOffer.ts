export interface CCLoanOffer {
  monthlyPayment: number;
  term: number;
  apr: number;
  noAutoPay?: { [id: string]: number };
  note?: string;
}
