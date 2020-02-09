const stripe = require("stripe")("sk_test_JKHpUM2h5n1ieuqUosguuRX200fpwwisSa");
const info = require("../bookInfo");

exports.handler = async event => {
  try {
    const body = JSON.parse(event.body);

    const customer = await stripe.customers.create({
      name: body.name,
      email: body.email,
      source: body.source
    });

    await stripe.charges.create({
      amount: info.price * 100, // "9900" --> 99
      currency: "usd",
      customer: customer.id,
      description: info.title
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, customer })
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 400,
      body: JSON.stringify({ error })
    };
  }
};
