import React from "react";

function CurrencyTable({ rates }) {
  return (
    <table style={{ width: "60%", margin: "auto", textAlign: "center" }}>
      <thead>
        <tr>
          <th>Currency</th>
          <th>We Buy</th>
          <th>Exchange Rate</th>
          <th>We Sell</th>
        </tr>
      </thead>
      <tbody>
        {rates.map((rate) => (
          <tr key={rate.currency}>
            <td>{rate.currency}</td>
            <td>{rate.weBuy.toFixed(4)}</td>
            <td>{rate.exchangeRate.toFixed(4)}</td>
            <td>{rate.weSell.toFixed(4)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CurrencyTable;
