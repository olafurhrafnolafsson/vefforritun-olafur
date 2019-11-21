import getRandomImage from './nasa-api';
import { empty, makeImgForFav } from './helpers'; // eslint-disable-line object-curly-newline

let image;

async function getNewImageImage(apod) {
  const randomImg = await getRandomImage();
  const mainTitle = apod.getElementsByClassName('apod__title')[0];
  const theImgText = apod.getElementsByClassName('apod__text')[0];
  let mainImg;

  empty(mainTitle);
  empty(theImgText);

  if (!randomImg) {
    mainImg = apod.querySelector('.apod__image');
    empty(mainImg);
  } else {
    mainImg = apod.querySelector('.apod__image');
  }

  if (randomImg.media_type === 'image' && '.apod__image') {
    mainImg.setAttribute('src', `${randomImg.url}`);
  }
  mainTitle.appendChild(document.createTextNode(`${randomImg.title}`));
  theImgText.appendChild(document.createTextNode(`${randomImg.explanation}`));

  image = randomImg;
}

function saveCurrentImage() {
  const oldImages = window.localStorage.getItem('images');
  if (oldImages === null) {
    const images = { length: 1, image1: image };
    const json = JSON.stringify(images);
    window.localStorage.setItem('images', json);
  } else {
    const imgJson = JSON.parse(oldImages);
    const oldLength = imgJson.length;
    const newLength = oldLength + 1;
    imgJson.length = newLength;
    const newName = `image${newLength}`;
    imgJson[newName] = image;
    const json = JSON.stringify(imgJson);
    window.localStorage.setItem('images', json);
  }
}

export default function init() {
  const apod = document.querySelector('.apod');

  getNewImageImage(apod);

  const newImg = document.getElementById('new-image-button');
  const saveImg = document.getElementById('save-image-button');

  newImg.addEventListener('click', init);
  saveImg.addEventListener('click', saveCurrentImage);
}

export function loadFavourites() {
  const favPage = document.querySelector('main');
  const mainImgs = JSON.parse(window.localStorage.getItem('images'));

  if (mainImgs !== null) {
    let i;
    for (i = 0; i < mainImgs.length; i++) { //   eslint-disable-line no-plusplus
      makeImgForFav(favPage, mainImgs[`image${i + 1}`]);
    }
  }
}
