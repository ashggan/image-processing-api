import { NextFunction, Router, Request, Response } from 'express';
import imageProcess from '../../util/imageProcess';
import logger from '../../middleware/logger';
const imageProcessApi = Router();

// Endpoint to serve image from assets file
imageProcessApi.use('/', (req: Request, res: Response, next: NextFunction) => {
  try {
    // parse query variables
    const filename = <string>req.query.filename;
    const height = parseInt(<string>req.query.height);
    const width = parseInt(<string>req.query.width);

    //   scale image accordingly
    imageProcess.resizeimage(height, width, filename);

    // image processing logger
    logger.info(`image ${filename} was processed to size ${height}X${width}`);
    res.set('Content-Type', 'image/png');
    res.sendFile(filename, { root: 'assets/thumbs' });
  } catch (error) {
    next(error);
  }
});

export default imageProcessApi;
