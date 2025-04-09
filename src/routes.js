import express from "express";
import {
	create,
	manageScreen,
	remove,
	splashScreen,
	updateStatus,
} from "./controllers/ToDoController.js";

const router = express.Router();

router.get("/", splashScreen);
router.get("/tasks", manageScreen);
router.post("/tasks/create", create);
router.post("/tasks/complete/:id", updateStatus);
router.post("/tasks/delete/:id", remove);

export default router;
