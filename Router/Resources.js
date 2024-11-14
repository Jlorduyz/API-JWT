import {Router} from 'express';
import {AllResources, UserResources} from "../Controllers/Resources/read.js";
import CreateResource from "../Controllers/Resources/create.js";
import deleteResource from "../Controllers/Resources/delete.js";
import UpdateResource from "../Controllers/Resources/update.js";
import validator from '../Middlewares/Validator.js';
import SchemaCreate from '../Schemas/Resources/create.js'
import SchemaUpdate from '../Schemas/Resources/update.js'
import passport from '../Middlewares/Passport.js';

const router = Router()

router.get('/all',passport.authenticate('jwt', {session:false}), AllResources);
router.get('/user/:x',passport.authenticate('jwt', {session:false}), UserResources);
router.post('/create',validator(SchemaCreate),passport.authenticate('jwt', {session:false}), CreateResource);
router.delete('/delete',passport.authenticate('jwt', {session:false}), deleteResource);
router.put('/update/:x' ,validator(SchemaUpdate),passport.authenticate('jwt', {session:false}), UpdateResource);

export default router;
