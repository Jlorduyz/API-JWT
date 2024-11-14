import Invoice from "../../Models/Invoice.js";

let UpdateInvoice = async (req, res ,next) => {
    try {
        let updateInv = await Invoice.findByIdAndUpdate({
            _id: req.params.x
        },
            req.body,
            {new: true})
        return res.status(200).json({
            success: true,
            response: updateInv
        })
    }catch(e) {
        next(e)
    }
}

export default UpdateInvoice