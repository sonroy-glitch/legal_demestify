import React from "react";
import TopBar from "../components/top-bar";

const KnowTheJargon = () => {
  return (
    <div>
      <TopBar />
      <p className="text-center p-3 text-3xl font-bold bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgba(204,85,0,0.5))] text-transparent bg-clip-text ">
        Know The Basic Jargons
      </p>
      <div className="flex justify-center px-2 sm:px-4">
        <div className="flex flex-col items-center w-full max-w-[1100px]">
          {terms.map((term) => (
            <JargonContainer key={term.id} props={term} />
          ))}
        </div>
      </div>
    </div>
  );
};

const JargonContainer = ({ props }) => {
  return (
    <div className="flex flex-row items-center gap-4 rounded-lg p-6 sm:p-7 my-4 w-full max-w-[1000px] bg-neutral-900 shadow-md shadow-orange-600/30 hover:scale-105 transition">
      <p className="text-lg font-semibold p-3">{props.id}.</p>
      <div className="flex flex-col gap-2">
        <p className="text-xl font-bold">{props.title}</p>
        <p className="text-lg">{props.description}</p>
      </div>
    </div>
  );
};

const terms = [
  {
    id: 1,
    title: "Asset",
    description:
      "Anything owned that has value and can generate future benefit.",
  },
  {
    id: 2,
    title: "Liability",
    description:
      "A financial obligation or debt owed to others.",
  },
  {
    id: 3,
    title: "Equity",
    description:
      "Ownership value in a company after subtracting liabilities from assets.",
  },
  {
    id: 4,
    title: "Revenue",
    description:
      "Total income earned from business activities before expenses.",
  },
  {
    id: 5,
    title: "Profit",
    description:
      "The amount left after subtracting all expenses from revenue.",
  },
  {
    id: 6,
    title: "Cash Flow",
    description:
      "The net movement of money into and out of a business.",
  },
  {
    id: 7,
    title: "Liquidity",
    description:
      "How quickly an asset can be converted into cash without loss.",
  },
  {
    id: 8,
    title: "Collateral",
    description:
      "An asset pledged to secure a loan.",
  },
  {
    id: 9,
    title: "Credit Score",
    description:
      "A numerical measure of an individual’s creditworthiness.",
  },
  {
    id: 10,
    title: "Interest Rate",
    description:
      "The percentage charged for borrowing or earned on savings.",
  },
  {
    id: 11,
    title: "Amortization",
    description:
      "Gradual repayment of a loan over time through regular payments.",
  },
  {
    id: 12,
    title: "Capital Expenditure (CapEx)",
    description:
      "Money spent on acquiring or upgrading physical assets.",
  },
  {
    id: 13,
    title: "Operating Expense (OpEx)",
    description:
      "Day-to-day costs of running a business.",
  },
  {
    id: 14,
    title: "Return on Investment (ROI)",
    description:
      "A measure of profit earned relative to the money invested.",
  },
  {
    id: 15,
    title: "Net Worth",
    description:
      "Total assets minus total liabilities.",
  },
  {
    id: 16,
    title: "Diversification",
    description:
      "Spreading investments to reduce risk.",
  },
  {
    id: 17,
    title: "Inflation",
    description:
      "The general increase in prices over time, reducing purchasing power.",
  },
  {
    id: 18,
    title: "Depreciation",
    description:
      "Reduction in value of an asset over time due to use or wear.",
  },
  {
    id: 19,
    title: "Default",
    description:
      "Failure to meet the legal obligations of a loan.",
  },
  {
    id: 20,
    title: "Leverage",
    description:
      "Using borrowed funds to increase potential returns (and risks).",
  },
];


export default KnowTheJargon;
