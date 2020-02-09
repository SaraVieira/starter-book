import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const BuyPage = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async e => {
    e.preventDefault();

    const { error, token } = await stripe.createToken(
      elements.getElement(CardElement)
    );

    if (error) {
      console.error(error);
      return;
    }

    const response = await fetch("/.netlify/functions/charge", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ source: token.id })
    }).then(response => response.json());

    console.log(response);
  };

  return (
    <div style={{ padding: 50 }}>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" style={{ marginTop: 20 }}>
          Pay
        </button>
      </form>
    </div>
  );
};

export default BuyPage;
