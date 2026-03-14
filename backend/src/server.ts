import express from "express";
import dotenv from "dotenv"
import connectDB from "./config/db";

import router from "./routes/routes";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connectDB();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", router);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});