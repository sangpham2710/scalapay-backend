import express from "express";
import oauthController from "../controllers/oauth.js";
import { authenticateClient } from '../middlewares/authenticateClient.js';

const router = express.Router();

router.route("/authorize").get(oauthController.authorize);
router.route("/token").get(authenticateClient, oauthController.token);

export default router;
