import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { navigate } from "@reach/router";
import info from "../../bookInfo";

const BuyPage = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    const { error, token } = await stripe.createToken(
      elements.getElement(CardElement)
    );

    if (error) {
      setLoading(false);
      console.error(error);
      return;
    }
    try {
      const data = await fetch("/.netlify/functions/charge", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ source: token.id, name, email })
      }).then(response => response.json());
      setLoading(false);
      navigate("/download", { state: { email } });
    } catch (e) {
      setLoading(false);
      console.error(e);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto my-4">
      <h2 className="text-center">Buy {info.title}</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Name"
          >
            Name
          </label>
          <input
            required
            value={name}
            onChange={e => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Name"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Card Details
          </label>
          <CardElement />
        </div>
        <div className="flex items-center justify-between">
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading &&
              "opacity-50 cursor-not-allowed"}`}
            type="submit"
          >
            Pay {info.price}$
          </button>
        </div>
      </form>
    </div>
  );
};

export default BuyPage;
