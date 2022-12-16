import express from 'express';
import imageApi from './Api/image';

const Router = express.Router();

Router.use('/images', imageApi);

export default Router;
