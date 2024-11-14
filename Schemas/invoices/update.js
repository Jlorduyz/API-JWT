import joi from "joi-oid";

const schema = joi.object({

    description: joi.string().messages({
        'string':'Please enter a description',
    }),
    value: joi.number().messages({
        'number': 'enter a numeric value'
    })
})

export default schema