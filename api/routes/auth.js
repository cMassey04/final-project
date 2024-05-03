import express from "express";
import { register, login } from "../controller/auth.js"; 

// Create an instance of Express Router
const router = express.Router();

// Route to handle user registration
router.post("/register", register);

// Route to handle user login
router.post("/login", login);

// Export the router
export default router;