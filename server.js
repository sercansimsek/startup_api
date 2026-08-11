import express from "express";
import { apiRouter } from "./routes/apiRoutes.js";

const PORT = 8000;

const app = express();

app.use("/api", apiRouter);
app.use((req, res) => {
  const errMsg = {
    message: "Endpoint not found. Please check the API documentation.",
  };
  res.statusCode = 404;
  return res.json(errMsg);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
