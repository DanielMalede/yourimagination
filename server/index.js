import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

const startServer = async () => {
  app.listen(process.env.PORT, () =>
    console.log(`Server has started on port: ${process.env.PORT}`)
  );
};

startServer();
