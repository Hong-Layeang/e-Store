import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";

dotenv.config();
const PORT = process.env.PORT;

connectDB();

const app = express();

app.use(express.json()); // allows us to accept JSON data in the req.body

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    console.log("Server started at http://localhost:" + PORT);
});

