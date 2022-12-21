import { NextFunction, Request, Response } from 'express';
import { existsSync } from 'node:fs';

const validQueryParams = (req: Request, res: Response, next: NextFunction) => {
  // check params exist
  const filename = req.query.filename as unknown as string;
  const height = req.query.height as unknown as string;
  const width = req.query.width as unknown as string;

  //check file exist
  if (!imageExist(filename) || !filename) {
    return res.status(400).json({ error: 'filename doesnot exist' });
  }
  //  check height and width are numric values
  if (!height || !width) {
    return res.status(400).json({ error: 'height and width are required ' });
  }
  if (isNotANumber(height) || isNotANumber(width)) {
    return res.status(400).json({ error: 'height and width must be numbers' });
  }
  next();
};

// check if the file does exist
const imageExist = (filename: string) => {
  return existsSync('assets/full/' + filename);
};

const isNotANumber = (val: string): boolean => {
  return isNaN(parseInt(val));
};

export default validQueryParams;
