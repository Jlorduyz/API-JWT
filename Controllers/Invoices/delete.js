import Invoice from "../../Models/Invoice.js";

let deleteInvoice = async (req,res,next) => {
    try {
      let invoiceDel = req.body.id
      let delInvoice = await Invoice.deleteOne({_id: invoiceDel})
        return res.status(200).json({
            success: true,
            response: delInvoice
        })
    }catch (e) {
        next(e)
    }}

export {deleteInvoice}
