import express from 'express';
import 'dotenv/config.js';
import './config/dataBase.js'
import cors from 'cors';
import morgan from 'morgan';
import routerIndex from './Router/index.js'
import ERROR_500 from "./Middlewares/ERROR_500.js";
import ERROR_404 from "./Middlewares/ERROR_404.js";
import ERROR_400 from "./Middlewares/BAD_REQUEST.js";

const server = express();

const port = process.env.PORT;

const ready = () => console.log('Server is running!'+ "port: " + port);

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(morgan("dev"));
server.use("/api", routerIndex);
server.use(ERROR_404)
server.use(ERROR_400)
server.use(ERROR_500)

server.listen(port, ready);