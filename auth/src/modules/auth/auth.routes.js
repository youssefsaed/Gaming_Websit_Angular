import { Router } from "express";
import { validation } from "../../../middleware/validation.js";
import * as  auth_Controller from './auth.controller.js'
import { logInSchema, signUpSchema } from "./auth.validation.js";
const router = Router()


router.post('/signUp',validation(signUpSchema), auth_Controller.signUp)
router.post('/logIn',validation(logInSchema), auth_Controller.logIn)




export default router