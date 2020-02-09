const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const info = require("../bookInfo");

exports.handler = async (event, context) => {
  try {
    const body = JSON.parse(event.body);

    await stripe.charges.create({
      amount: info.price * 100, // "9900" --> $99.00
      currency: "usd",
      source: body.source,
      description: info.title
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
