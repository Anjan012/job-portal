import express from 'express';
import { register, login, updateProfile, logout } from '../controllers/user.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/profile/update").post(isAuthenticated, updateProfile); // protecting this route so that only authenticated users can access it
router.route("/logout").get(logout);

export default router;