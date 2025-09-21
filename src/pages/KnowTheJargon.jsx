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
    title: "Plaintiff",
    description:
      "The person or group who files a case in court, claiming they were wronged.",
  },
  {
    id: 2,
    title: "Defendant",
    description:
      "The person or group being accused or sued in a legal case.",
  },
  {
    id: 3,
    title: "Breach of Contract",
    description:
      "When someone fails to follow or honor the terms of an agreement.",
  },
  {
    id: 4,
    title: " Arbitration",
    description:
      "A private process where a neutral person decides the outcome instead of a court.",
  },
  {
    id: 5,
    title: " Indemnity",
    description:
      "A promise to protect or compensate someone if they suffer a loss or damage.",
  },
  {
    id: 6,
    title: " Jurisdiction",
    description:
      "The authority a court has to hear a case and make legal decisions.",
  },
  {
    id: 7,
    title: "Litigation",
    description:
      "The formal process of taking legal action and resolving disputes in court.",
  },
  {
    id: 8,
    title: "Mediation",
    description:
      "A process where a neutral third person helps parties reach a mutual agreement.",
  },

  {
    id: 9,
    title: "Settlement",
    description:
      "An agreement between parties to resolve a dispute without going to trial.",
  },
  {
    id: 10,
    title: "Tort",
    description:
      "A wrongful act (other than breaking a contract) that causes harm or injury.",
  },
  {
    id: 11,
    title: "Liability",
    description:
      "The legal responsibility a person has if something goes wrong or causes harm.",
  },
  {
    id: 12,
    title: " Damages",
    description:
      "Money a court orders someone to pay for harm, loss, or injury they caused.",
  },
  {
    id: 13,
    title: "Consideration",
    description:
      "Something valuable exchanged between parties that makes a contract valid.",
  },
  {
    id: 14,
    title: "Clause",
    description:
      "A specific section or condition written into a legal contract or document.",
  },
  {
    id: 15,
    title: "Force Majeure",
    description:
      "A clause excusing duties if unexpected events (like disasters) make them impossible.",
  },
  {
    id: 16,
    title: "Intellectual Property (IP)",
    description:
      "Legal rights over creations like inventions, art, music, or brand names.",
  },
  {
    id: 17,
    title: "Non-Disclosure Agreement (NDA)",
    description:
      "A contract that requires people to keep shared information secret.",
  },
  {
    id: 18,
    title: "Warranty",
    description:
      "A legal promise that a product or service will meet certain standards.",
  },
  {
    id: 19,
    title: "Lease",
    description:
      "A legal contract that allows someone to use property (like a house) for rent.",
  },
  {
    id: 20,
    title: "Termination",
    description:
      "The official ending of a legal contract, agreement, or employment.",
  },
];

export default KnowTheJargon;
