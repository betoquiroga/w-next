import Joi from "joi"

export const LoginFormSchema = Joi.object({
  username: Joi.string().required().messages({
    "string.empty": "Este campo es requerido",
    "any.required": "Este campo es requerido",
  }),
  password: Joi.string().required().messages({
    "string.empty": "Este campo es requerido",
    "any.required": "Este campo es requerido",
  }),
})
