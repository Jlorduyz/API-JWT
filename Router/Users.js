import {Router} from 'express';
import {AllUsers, UserEmail, UserName, UserID} from "../Controllers/Users/read.js";
import UserRegister from "../Controllers/Users/register.js";
import DeleteUser from "../Controllers/Users/delete.js";
import {UpdateUserParam, UpdateUserID, UpdateBody} from "../Controllers/Users/update.js";
import Validator from "../Middlewares/Validator.js";
import SchemaRegister from "../Schemas/users/register.js";
import SchemaUpdate from "../Schemas/users/updates.js";
import SchemaDelete from "../Schemas/users/delete.js"
import Password_Hash from "../Middlewares/Password_Hash.js";
import AccountExist from "../Middlewares/AccountExist.js";
import passport from "../Middlewares/Passport.js";


const router = Router();

router.get('/all',passport.authenticate('jwt', {session:false}), AllUsers);
router.get('/email/:x',passport.authenticate('jwt', {session:false}), UserEmail);
router.get('/user/:x',passport.authenticate('jwt', {session:false}),UserName);
router.get('/id/:x',passport.authenticate('jwt', {session:false}), UserID);
router.post('/register',Validator(SchemaRegister),AccountExist, Password_Hash, UserRegister);
router.delete('/remove',Validator(SchemaDelete),passport.authenticate('jwt', {session:false}), DeleteUser);
router.put('/updateByEmail/:x',Validator(SchemaUpdate),passport.authenticate('jwt', {session:false}), UpdateUserParam);
router.put('/updateByID/:x',Validator(SchemaUpdate),passport.authenticate('jwt', {session:false}), UpdateUserID);
router.put('/update',Validator(SchemaUpdate),passport.authenticate('jwt', {session:false}), UpdateBody)

export default router;

