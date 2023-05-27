import React, { useState } from 'react';

export default function MortgageForm() {
  const [state, setState] = useState({
    amount: '',
    interestRate: '',
    loan: '',
  });
  const [mortgage, setMortgage] = useState('');

  const { amount, interestRate, loan } = state;

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setState({ ...state, [key]: value });
  };

  const calculateMortgage = (amount, interestRate, years) => {
    const monthlyInterestRate = interestRate / 12;
    const numOfPayments = 12 * years;

    // const mortgage =
    //   amount *
    //   ((monthlyInterestRate * (1 + monthlyInterestRate)) ** numOfPayments /
    //     (((1 + monthlyInterestRate) ^ numOfPayments) - 1));
    // return mortgage;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mortgage = calculateMortgage(amount, interestRate, loan);
    // setMortgage(mortgage);
    console.log(mortgage);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Principal loan amount
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={handleChange}
          />
        </label>
        <label>
          Interest rate
          <input
            type="number"
            name="interestRate"
            value={interestRate}
            onChange={handleChange}
          />{' '}
          %
        </label>
        <label>
          Length of loan
          <input
            type="number"
            name="loan"
            value={loan}
            onChange={handleChange}
          />{' '}
          years
        </label>
        <button type="submit">Calculate</button>
      </form>

      <p>Your monthly mortgage payment will be ${mortgage}.</p>
    </div>
  );
}
