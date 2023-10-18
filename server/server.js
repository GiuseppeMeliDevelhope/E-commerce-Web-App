const axios = require("axios");
const express = require("express");
const app = express();
const url= "https://fakestoreapi.com/products"
app.get("/products", async (req, res) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    const data = response.data;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});