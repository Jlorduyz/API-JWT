import Resource from "../../Models/Resource.js";

let create = async (req, res, next) => {
    try {
        let resource = req.body;
        let createR = await Resource.create(resource)
        return res.status(201).send({
            success: true,
            response: createR
        });
    }catch(e) {
        next(e);
    }
}

export default create