import images from '../../util/imageProcess';

describe('image utilities functions', () => {
  it('should resize test.jpg', async () => {
    expect(await images.resizeimage(200, 200, 'test.jpg')).toBeTrue;
  });
});
