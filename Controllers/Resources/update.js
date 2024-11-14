import Resource from "../../Models/Resource.js";

let UpdateResource = async (req, res ,next) => {
    try {
        let updateRes = await Resource.findByIdAndUpdate({
                _id: req.params.x
            },
            req.body,
            {new: true})
        return res.status(200).json({
            success: true,
            response: updateRes
        })
    }catch(e) {
        next(e)
    }
}

export default UpdateResource