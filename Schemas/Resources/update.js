import joi from "joi-oid";

const  schema = joi.object({
    value: joi.number().messages({
        'number':'enter a numeric value'
    })

})

export default schema