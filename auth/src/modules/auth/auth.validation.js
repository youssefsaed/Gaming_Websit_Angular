import Joi from 'joi';

export const signUpSchema = {
    body: Joi.object().required().keys({
        first_name: Joi.string().min(3).max(10).required(),
        last_name: Joi.string().min(3).max(10).required(),
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp('[a-zA-Z0-9]{5,20}')).required(),
        age: Joi.number().min(10).max(90).required()
    })
}

export const logInSchema = {
    body: Joi.object().required().keys({
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp('[a-zA-Z0-9]{5,20}')).required(),
    })
}