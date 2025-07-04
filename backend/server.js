const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ✅ CORS configuration
app.use(cors({
  origin: "https://my-portfolio-one-alpha-96.vercel.app", // frontend URL
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());

const contactRoute = require("./routes/contact");
app.use("/api/contact", contactRoute);

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server started on port ${PORT}`);
});