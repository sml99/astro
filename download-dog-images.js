import fetch from 'node-fetch';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Construct __dirname equivalent in ES module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const downloadImage = async (url, path) => {
  const response = await fetch(url);
  const buffer = await response.buffer();
  await fs.writeFile(path, buffer);
};

const downloadDogImages = async () => {
  for (let i = 0; i < 10; i++) {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    const imageUrl = data.message;
    const imagePath = path.join(__dirname, 'public/perritos', `dog${i}.jpg`);
    await downloadImage(imageUrl, imagePath);
  }
};

downloadDogImages().then(() => {
  console.log('Downloaded all images');
}).catch(err => {
  console.error('Error downloading images:', err);
});