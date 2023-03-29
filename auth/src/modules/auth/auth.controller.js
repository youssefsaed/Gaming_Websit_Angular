import { User } from "../../../databases/models/user.model.js";
import { errorHanddling } from "../../utils/catchError.js";
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken";


/////////////////////////////////////////////////////////////////////////signUp
export const signUp = errorHanddling(async (req, res, next) => {
    const { first_name, last_name, email, password, age } = req.body
    const exist = await User.findOne({ email })
    if (exist) return next(new Error("email is exist"))
    const HPassword = bcrypt.hashSync(password, 8)
    const newUser = new User({ first_name, last_name, email, password: HPassword, age })
    await newUser.save()
    return res.status(201).json({ message: "success" })
})

///////////////////////////////////////////////////////////////////////////logIn
export const logIn = errorHanddling(async (req, res, next) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) return next(new Error("email not exist"))
    const check = bcrypt.compareSync(password, user.password)
    if (!check) return next(new Error("invalid password"))
    const token = jwt.sign({ _id: user.id }, 'emailsignture', { expiresIn: '1d' })
    return res.json({ message: "success", token })
})

