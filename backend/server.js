const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");
dotenv.config();

const connectDB = require("./config/db.js");
const productRoutes = require("./routes/productRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const orderRoutes = require("./routes/orderRoutes.js");
const uploadRoutes = require("./routes/uploadRoutes.js");
const port = process.env.PORT || 5000;

connectDB(); // Connect to MongoDB
const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser middleware
app.use(cookieParser());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/api/config/paypal", (req, res) => ({
  clientId: process.env.PAYPAL_CLIENT_ID,
}));

// const __dirname = path.resolve(); // Set __dirname to current directory
// app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
app.use("/uploads", express.static("uploads"));

if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static(path.join("frontend", "build")));

  // any route that is not api will be redirected to index.html
  app.get("*", (req, res) =>
    res.sendFile(path.resolve("frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
