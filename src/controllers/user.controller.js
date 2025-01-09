// controllers/user.controller.js
import { asyncHandler } from "../utils/asynHandler.js";

// Register a user
const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "ok"
    });
});

export { registerUser };
