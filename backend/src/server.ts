import express from "express";
import dotenv from "dotenv"
import connectDB from "./config/db";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connectDB();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend running");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});