export const getCroppedFile = (imageSrc, pixelCrop, fileName = 'photo.png') =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = pixelCrop.width;
      canvas.height = pixelCrop.height;
      canvas.getContext('2d').drawImage(
        img,
        pixelCrop.x, pixelCrop.y, pixelCrop.width, pixelCrop.height,
        0, 0, pixelCrop.width, pixelCrop.height
      );
      canvas.toBlob(
        (blob) => {
          if (!blob) return reject(new Error('Crop impossible'));
          resolve(new File([blob], fileName, { type: 'image/png' }));
        },
        'image/png',
        0.95
      );
    };
    img.onerror = reject;
    img.src = imageSrc;
  });