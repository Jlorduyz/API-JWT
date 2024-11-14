import User from "../../Models/User.js";


let UpdateUserParam = async (req, res ,next) => {
    try {
        let user = await User.findOneAndUpdate(
            {email: req.params.x},
            req.body,
            {new: true}
        )
        return res.status(200).json({
            success: true,
            response: user
        })
    }catch(e){
        next(e);
    }
}
let UpdateUserID = async (req, res ,next) => {
    try {
        let user = await User.findByIdAndUpdate(
            req.params.x,
            req.body,
            {new: true}
        )
        return res.status(200).json({
            success: true,
            response: user
        })
    }catch(e){
        next(e);
    }
}
let UpdateBody = async (req, res ,next) => {
    try {
        await User.updateOne(
            {email: req.body.email},
            {username: req.body.username, phone: req.body.phone, address: req.body.address}
        )
        return res.status(200).json({
            success: true
        })
    }catch(e){
        next(e);
    }
}
export {UpdateUserParam,UpdateUserID, UpdateBody};