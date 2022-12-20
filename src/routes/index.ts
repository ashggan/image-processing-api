import express from 'express';
import imageProcessApi from './Api/imageProcessing';
import apicache from 'apicache';
import validQueryParams from '../middleware/checkReqQueryParams';

const cache = apicache.middleware;

const Router = express.Router();

// image Processing Api
Router.use('/images', validQueryParams, cache('15 minutes'), imageProcessApi);

export default Router;
