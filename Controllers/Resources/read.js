import Resource from "../../Models/Resource.js";
import '../../Models/User.js'
import Invoice from "../../Models/Invoice.js";

let AllResources = async (req,res,next)=>{
    try {
        let all = await Resource.find().populate('user', 'username email').exec()
        return res.status(200).json({
            response: all
        })
    }catch(e){
        next(e)
    }
}

let UserResources = async (req, res, next) => {
    try {
        let param = req.params.x
        let resources = await  Resource.find().populate('user', "username email").exec()
        let user = resources.filter((res)=> res.user.email === param)
        return res.status(200).json({
            response: user
        })
    }catch(e) {
        next(e)
    }
}

export{AllResources, UserResources};