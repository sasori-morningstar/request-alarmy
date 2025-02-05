import express from "express"
import getRequest from "./controlers.js"
const router = express.Router()

router.get("/request", getRequest)

export default router