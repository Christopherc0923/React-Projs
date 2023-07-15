const express = require("express");
const stripe = require("stripe")("");
const app = express();
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());
// Serve the 'index.html' file from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Redirect all requests to 'index.html' in the 'public' directory
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Handle POST request to create Stripe session
app.post("/create-stripe-session", async (req, res) => {
  try {
    const cartItem = req.body; // Assuming the cartItem data is received in the request body

    // Process the cartItem data and create a Stripe session using the Stripe API
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: cartItem.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100, // Convert the price to cents
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: "http://localhost:3000/React-Projs/cart/success", // Redirect URL after successful payment
      cancel_url: "http://localhost:3000/React-Projs/cart/cancel", // Redirect URL if payment is canceled
    });

    // Return the session information as a JSON response
    res.json({ id: session.id });
  } catch (error) {
    console.error("An error occurred:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the Stripe session." });
  }
});

app.listen(5500, () => {
  console.log("Server started on port 5500");
});
