import { Request, Response } from "express";

export const getAllTransactions = async (req: Request, res: Response) => {
  try {
    res.json({ request: "getAllTransactions" });
  } catch (error) {}
};

export const createTransaction = async (req: Request, res: Response) => {
  try {
    res.json({ request: "createTransaction" });
  } catch (error) {}
};

export const getTransactionById = async (req: Request, res: Response) => {
  try {
    res.json({ request: "getTransactionById" });
  } catch (error) {}
};

export const updateTransactionById = async (req: Request, res: Response) => {
  try {
    res.json({ request: "updateTransactionById" });
  } catch (error) {}
};

export const deleteTransactionById = async (req: Request, res: Response) => {
  try {
    res.json({ request: "deleteTransactionById" });
  } catch (error) {}
};
