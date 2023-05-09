import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./DB/index.js";
import postRouter from "./routes/postRouter.js";
import dalleRouter from "./routes/dalleRouter.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/posts", postRouter);
app.use("/dalle", dalleRouter);

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGO_URI);
    app.listen(process.env.PORT, () =>
      console.log(`Server has started on port: ${process.env.PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
