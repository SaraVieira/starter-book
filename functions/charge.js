const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event, context) => {
  try {
    const body = JSON.parse(event.body);

    await stripe.charges.create({
      amount: "9900", // "9900" --> $99.00
      currency: "usd",
      source: body.source,
      description: "My great book"
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: true })
    };
  }
};
