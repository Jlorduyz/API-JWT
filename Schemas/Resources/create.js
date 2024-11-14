import joi from "joi-oid";

const  schema = joi.object({
    name: joi.string().required().messages({
        'string':'is required'
    }),
    type: joi.string().required(),
    value: joi.number().required().messages({
        'number':'enter a numeric value'
    }),
    username: joi.objectId().required(),
})

export default schema