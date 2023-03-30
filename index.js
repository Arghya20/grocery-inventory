const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ---------------------------------
let groceryItems = ["Mango", "6"];

app.post("/api/groceries", (req, res) => {
  const { name, quantity } = req.body;

  if (!name || !quantity) {
    return res
      .status(400)
      .json({ message: "Both name and quantity are required" });
  }

  const newItem = { name, quantity };
  groceryItems.push(newItem);

  res.status(201).json(newItem);
});

// ---------------------------------
app.get("/api/groceries", (req, res) => {
  res.json(groceryItems);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
// the code
