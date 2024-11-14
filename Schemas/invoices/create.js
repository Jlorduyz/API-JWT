import joi from "joi-oid";

const schema = joi.object({
    date: joi.date().messages({
        'date':' data format is : YYYY-MM-DD',
    }),
    description: joi.string().required().messages({
        'string':'Please enter a description',
    }),
    value: joi.number().required().messages({
        'number': 'enter a numeric value'
    }),
    asset: joi.boolean().required().messages({
        'boolean':'is required'
    }),
    user: joi.objectId().required()
})

export default schema