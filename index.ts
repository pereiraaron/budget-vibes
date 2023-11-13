import express, { Request, Response } from "express";
import colors from "colors";
import transactionRoutes from "./src/routes/transactionRoutes";
import cors from "cors";

const PORT = process.env.PORT || 5000;
const ENV = process.env.NODE_ENV || "development";
const API_VERSION = process.env.API_VERSION || "v1";

const app = express();

//Use Predefined Middleware

// Allow requests from any origin
app.use(cors());

// Middleware to parse JSON in request bodies
app.use(express.json());

app.use(`/api/${API_VERSION}/transactions`, transactionRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Api Is Running");
});

app.listen(PORT, () => console.log(colors.yellow.bold(`Server Running in ${ENV} mode on port ${PORT}`)));
