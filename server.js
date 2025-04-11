const express = require("express");
const app = express();
app.use(express.json()); // Allows your server to read JSON data

// Fake data (replace with a database later)
const cars = [
  { id: 1, make: "Toyota", model: "Camry", year: 2020, price: 24000 },
  { id: 2, make: "Honda", model: "Civic", year: 2021, price: 22000 }
];

// Get all cars
app.get("/api/cars", (req, res) => {
  res.json(cars);
});

// Get a specific car by ID
app.get("/api/cars/:id", (req, res) => {
  const car = cars.find(c => c.id === parseInt(req.params.id));
  if (!car) {
    res.status(404).json({ error: "Car not found" });
  } else {
    res.json(car);
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});