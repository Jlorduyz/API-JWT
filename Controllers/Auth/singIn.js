import User from '../../Models/User.js'

export default async (req, res,next) => {
try {
    await User.findOneAndUpdate({email:req.body.email},{online:true })
    return res.status(200).json({
    success: true,
    message: 'successful login',
    user:{
      email: req.user.email,
      username: req.user.username,
        _id: req.user._id
    },
        token: req.token

})
}catch(e){
    next(e)
}
}