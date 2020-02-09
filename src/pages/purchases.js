import React, { useState } from "react";
import { navigate } from "@reach/router";

const RetrievePage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    setError(false);
    setLoading(true);
    e.preventDefault();
    try {
      const data = await fetch("/.netlify/functions/customer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });
      const customer = await data.json();

      if (!customer.error) {
        setLoading(false);
        navigate("/download", { state: { email } });
      } else {
        setLoading(false);
        setError(true);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto my-4">
      <h2 className="text-center">Restore Purchases</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
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

        <div className="flex items-center justify-between">
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading &&
              "opacity-50 cursor-not-allowed"}`}
            type="submit"
          >
            Retrieve Purchases
          </button>
        </div>
        {error && (
          <p className="mt-3 text-red-500">
            There is no user with purchases using that email
          </p>
        )}
      </form>
    </div>
  );
};

export default RetrievePage;
