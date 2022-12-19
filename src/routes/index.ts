import express from 'express';
import imageProcessApi from './Api/imageProcessing';
import apicache from 'apicache';

const cache = apicache.middleware;

const Router = express.Router();

// image Processing Api
Router.use('/images', cache('15 minutes'), imageProcessApi);

export default Router;
