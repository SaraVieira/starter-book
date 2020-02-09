// custom typefaces
import "typeface-montserrat";
import "typeface-merriweather";
import "firacode";

import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY);

export const wrapRootElement = ({ element }) => {
  return <Elements stripe={stripePromise}>{element}</Elements>;
};
