import express, { Request, Response } from "express";
import colors from "colors";

const app = express();

const PORT = process.env.PORT || 5000;
const ENV = process.env.NODE_ENV || "development";

app.get("/", (req: Request, res: Response) => {
  res.send("Api Is Running");
});

app.listen(PORT, () => console.log(colors.yellow.bold(`Server Running in ${ENV} mode on port ${PORT}`)));
