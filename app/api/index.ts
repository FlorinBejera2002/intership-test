import express from "express";
import recipesRouter from "./recipes";

const app = express();
const port = process.env.PORT || 3001;

app.use("/api/recipes", recipesRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
