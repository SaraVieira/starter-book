const stripe = require("stripe")("sk_test_JKHpUM2h5n1ieuqUosguuRX200fpwwisSa");

exports.handler = async event => {
  try {
    const body = JSON.parse(event.body);

    const costumers = await stripe.customers.list({
      limit: 1,
      email: body.email
    });
    if (costumers.data.length) {
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true })
      };
    } else {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "No user available" })
      };
    }
  } catch (error) {
    console.error(error);
    return {
      statusCode: 400,
      body: JSON.stringify({ error })
    };
  }
};
