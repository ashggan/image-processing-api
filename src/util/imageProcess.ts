import sharp from 'sharp';

// resize image and compress it and saved to file
const resizeimage = async (height: number, width: number, filename: string) => {
  try {
    // await imageExist(filename);
    const img = await sharp('assets/full/' + filename)
      .resize({
        height: height,
        width: width,
      })
      .toFile('assets/thumbs/' + filename);
    return img;
  } catch (error) {
    return error;
  }
};

export default { resizeimage };
