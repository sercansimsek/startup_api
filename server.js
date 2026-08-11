import express from "express";
import { apiRouter } from "./routes/apiRoutes.js";
import cors from "cors";

const PORT = 8000;

const app = express();

app.use(cors());
app.use("/api", apiRouter);
app.use((req, res) => {
  const errMsg = {
    message: "Endpoint not found. Please check the API documentation.",
  };
  res.statusCode = 404;
  return res.json(errMsg);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
