import PropTypes from "prop-types";
import React, { useState } from "react";

/**
 * @param {String} titre title of account
 * @param {String} montant the global amount of account
 * @param {String} description the description of account
 * @component
 */

function Compte({ titre, montant, description }) {
  const [transactions, setTransactions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleTransactions = () => {
    if (isOpen) {
      setTransactions([]);
    } else {
      const mockTransactions = [
        {
          id: 1,
          date: "2025-01-01",
          amount: 10000,
          description: "Transaction 1",
        },
        {
          id: 2,
          date: "2025-01-02",
          amount: 20000,
          description: "Transaction 2",
        },
        {
          id: 3,
          date: "2025-01-03",
          amount: 30000,
          description: "Transaction 3",
        },
      ];
      setTransactions(mockTransactions);
    }
    setIsOpen(!isOpen);
  };

  return (
    <section className="compte">
      <div>
        <h3> {titre} </h3>
        <p className="compte-montant"> {montant} </p>
        <p className="compte-description"> {description} </p>
      </div>
      <div className="cta">
        <button className="buttonTrans" onClick={toggleTransactions}>
          {isOpen ? "Hide transactions" : "View transactions"}
        </button>
      </div>
      {isOpen && transactions.length > 0 && (
        <div className="transactions">
          <h4>Transactions</h4>
          <ul>
            {transactions.map((transaction) => (
              <li key={transaction.id}>
                {transaction.date} - {transaction.amount} -{" "}
                {transaction.description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

Compte.propTypes = {
  titre: PropTypes.string.isRequired,
  montant: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Compte;
