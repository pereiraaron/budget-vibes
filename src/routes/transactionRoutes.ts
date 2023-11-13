import express from "express";
import {
  createTransaction,
  deleteTransactionById,
  getAllTransactions,
  getTransactionById,
  updateTransactionById,
} from "../controllers/transactionControllers";

const router = express.Router();

//Transaction Routes
router
  .get("/", getAllTransactions)
  .post("/", createTransaction)
  .get("/:transactionId", getTransactionById)
  .put("/:transactionId", updateTransactionById)
  .delete("/:transactionId", deleteTransactionById);

export default router;
