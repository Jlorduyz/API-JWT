import {Router} from 'express';
import UserRouter from './Users.js';
import AuthRouter from './Auth.js'
import InvoiceRouter from './Invoices.js'
import ResourceRouter from './Resources.js'

const router = Router();

router.use('/users', UserRouter);
router.use('/auth',AuthRouter)
router.use('/invoices', InvoiceRouter )
router.use('/resources',ResourceRouter)



export default router;