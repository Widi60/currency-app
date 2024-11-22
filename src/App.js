import React, { useState, useEffect } from "react";
import axios from "axios";
import CurrencyTable from "./components/CurrencyTable";
import "./App.css";

function App() {
  const [rates, setRates] = useState([]);
  const API_URL = "https://api.currencyfreaks.com/v2.0/rates/latest";
  const API_KEY = "a325e422bfb541a1a0f164e5f5e10367";

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(`${API_URL}?apikey=${API_KEY}`);
        const data = response.data.rates;

        const filteredRates = ["CAD", "IDR", "JPY", "CHF", "EUR", "GBP"].map(
          (currency) => ({
            currency,
            exchangeRate: parseFloat(data[currency]),
            weBuy: parseFloat(data[currency]) * 1.05,
            weSell: parseFloat(data[currency]) * 0.95,
          })
        );

        setRates(filteredRates);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };

    fetchRates();
  }, []);

  return (
    <div>
      <h1 sty>Currency Exchange Rates</h1>
      <CurrencyTable rates={rates} />
      <p>Rates are based from 1 USD.</p>
      <p>This application uses API from https://currencyfreaks</p>
    </div>
  );
}

export default App;
