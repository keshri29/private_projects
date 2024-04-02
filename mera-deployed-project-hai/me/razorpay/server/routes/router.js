import express from "express";
import {checkout} from "../controllers/paymentcontroller.js";

const router = express.Router();

router.route("/checkout",checkout);
export default router;