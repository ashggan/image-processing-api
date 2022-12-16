import sharp from 'sharp';
import { promises as fs } from 'fs';

// resize image and compress it and saved to file
const resizeimage = async (height: number, width: number, filename: string) => {
  try {
    const img = await sharp('assets/full/' + filename)
      .resize({
        height: height,
        width: width,
      })
      .toFile('assets/thumbs/' + filename);
    return img;
  } catch (error) {
    console.error(error);
  }
};

// check if the file does exist
const imageExist = async (filename: string) => {
  try {
    const image = await fs.readFile('assets/full/' + filename, 'utf-8');
    return image ? true : false;
  } catch (error) {
    console.error(error);
  }
};

export default { resizeimage, imageExist };
