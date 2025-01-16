import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";


const userRouter = Router();

userRouter.route("/register").post(
    upload.fields([
        {
            name: "avator",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxcount: 1
        }
    ]),
    registerUser
)

//router.route("/login").post(resgisterUser);

export default userRouter;