import express, { NextFunction } from 'express';
import imageProcess from '../../util/imageProcess';

const imageApi = express.Router();

// Endpoint to serve image from assets file
imageApi.use(
  '/',
  async (req: express.Request, res: express.Response, next: NextFunction) => {
    try {
      const filename = <string>req.query.filename;
      const height = parseInt(<string>req.query.height);
      const width = parseInt(<string>req.query.width);

      //   scale image accordingly
      await imageProcess.resizeimage(height, width, filename);

      res.sendFile(filename, { root: 'assets/thumbs' });
      res.set('Content-Type', 'image/png');
    } catch (error) {
      next(error);
    }
  }
);

export default imageApi;
