import Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string().min(2).required().messages({
        'string.min':'*Brand must be at least 2 chars long',
        'string.empty':'*This field is required',
        }),
    year: Joi.number().min(2000).max(2026).required().messages({
        'number.base':'*Use only numbers',
        'number.max':'*You can not enter the year higher then 2026',
        'number.min':'*You can not enter the year lower then 2000',
        'number.empty':'*This field is required',
    }),
    price: Joi.number().required().messages({
        'number.base':'*Use only numbers',
        'number.empty':'*This field is required',
    }),
})
