import { Router } from "express";
import UserRouter from "../controllers/UserControllers";

const routers = Router();

routers.use("/users", UserRouter);

export default routers;