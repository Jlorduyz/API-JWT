import Invoice from "../../Models/Invoice.js";
import '../../Models/User.js'

let AllInvoices = async (req, res, next) => {
    try {
        let invoices = await  Invoice.find().populate('user', "username email").exec()
        return res.status(200).json({
            response: invoices
        })
    }catch(e) {
        next(e)
    }
}
let UserInvoices = async (req, res, next) => {
    try {
        let param = req.params.x
        let invoices = await  Invoice.find().populate('user', "username email").exec()
        let user = invoices.filter((res)=> res.user.email === param)
        return res.status(200).json({
            response: user
        })
    }catch(e) {
        next(e)
    }
}

export {AllInvoices, UserInvoices}