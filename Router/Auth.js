import {Router} from 'express';
import singIn from "../Controllers/Auth/singIn.js";
import PasswordValidation from "../Middlewares/PasswordValidation.js";
import AccountNotExist from "../Middlewares/AccountNotExist.js";
import GenerateToken from "../Middlewares/GenerateToken.js";

const router = Router();

router.post("/signIn",AccountNotExist,PasswordValidation,GenerateToken, singIn);

export default router

