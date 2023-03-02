import Joi from "joi"

export const RegisterFormSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "Este campo es requerido",
    "any.required": "Este campo es requerido",
  }),
  username: Joi.string().required().messages({
    "string.empty": "Este campo es requerido",
    "any.required": "Este campo es requerido",
  }),
  email: Joi.string().required().messages({
    "string.empty": "Este campo es requerido",
    "any.required": "Este campo es requerido",
  }),
  password: Joi.string().required().messages({
    "string.empty": "Este campo es requerido",
    "any.required": "Este campo es requerido",
  }),
})
