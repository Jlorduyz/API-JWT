import Resource from "../../Models/Resource.js";

let deleteResource = async (req,res,next) => {
    try {
        let resourceDel = req.body.id
        let del = await Resource.deleteOne({_id: resourceDel})
        return res.status(200).json({
            success: true,
            response: del
        })
    }catch (e) {
        next(e)
    }}

export default deleteResource