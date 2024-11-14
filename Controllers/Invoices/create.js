import Invoice from "../../Models/Invoice.js";

let InvoiceCreate = async (req,res,next) => {
    try {
   let invoice  = await Invoice.create(req.body)
        return res.status(200).send({
            success: true,
            result: invoice
        })
    }catch(e){
        next(e)
    }
}

export default InvoiceCreate;