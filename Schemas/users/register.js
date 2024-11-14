import joi from "joi-oid";

const schema = joi.object({
    username: joi.string().required(),
    password: joi.string().alphanum().required().messages({
        'string.alphanum':'Only alphanumeric values'
    }),
    email: joi.string().email().required().messages({
        'string.email':'invalid email format'
    }),
    address: joi.string().required(),
    phone: joi.number().required().messages({
'number':'Only numerical values'
    })
})

export default schema