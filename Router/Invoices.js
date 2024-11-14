import {Router} from "express";
import {AllInvoices, UserInvoices} from "../Controllers/Invoices/read.js";
import {deleteInvoice} from "../Controllers/Invoices/delete.js";
import InvoiceCreate from "../Controllers/Invoices/create.js";
import UpdateInvoice from "../Controllers/Invoices/update.js";
import passport from "../Middlewares/Passport.js";
import validator from '../Middlewares/Validator.js';
import SchemaCreate from '../Schemas/invoices/create.js'
import SchemaUpdate from '../Schemas/invoices/update.js'

const router = Router()

router.get('/all',passport.authenticate('jwt', {session:false}), AllInvoices)
router.get('/user/:x',passport.authenticate('jwt', {session:false}), UserInvoices )
router.post('/create',validator(SchemaCreate), passport.authenticate('jwt', {session:false}), InvoiceCreate);
router.delete('/delete',passport.authenticate('jwt', {session:false}),  deleteInvoice)
router.put('/update/:x',validator(SchemaUpdate), passport.authenticate('jwt', {session:false}), UpdateInvoice)

export default router