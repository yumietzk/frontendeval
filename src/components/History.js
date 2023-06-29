import React from 'react';

export default function History({ prevCounts }) {
  const renderHistory = () => {
    // [{10, 0}, {100, 10}, {-100, 110}, {1, 10}, {10, 11}]

    return prevCounts.map((item, i) => {
      if (i === 0) return null;

      const action = prevCounts[i - 1].action;
      const beforeState = prevCounts[i - 1].count;
      const afterState = item.count;
      const history = `${action} (${beforeState} → ${afterState})`;

      return <li key={`${i}-${action}`}>{history}</li>;
    });
  };

  return (
    <>
      <div>History</div>
      <ul>{renderHistory().reverse()}</ul>
    </>
  );
}
