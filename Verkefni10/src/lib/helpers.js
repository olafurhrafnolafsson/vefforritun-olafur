/**
 *
 * @param {object} element Element sem á að hreinsa börn úr
 */
export function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

/**
 * @param {string} name Nafn á element
 * @param  {...any} children Börn fyrir element
 */
export function el(name, ...children) {
  const element = document.createElement(name);

  if (Array.isArray(children)) {
    children.forEach((child) => {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      } else if (child) {
        element.appendChild(child);
      }
    });
  }
  return element;
}
export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function Day() {
  let currenDay = new Date();
  const dd = String(currenDay.getDate()).padStart(2, '0');
  const mm = String(currenDay.getMonth() + 1).padStart(2, '0'); // January is 0!
  const yyyy = currenDay.getFullYear();

  currenDay = `${yyyy}-${mm}-${dd}`;
  return currenDay;
}
export function randomDate() {
  // Jun 16, 1995
  const currentDate = Day();

  const dateList = currentDate.split('-');
  let maxMM = 12;
  let maxDD = 31;
  let minMM = 1;
  let minDD = 1;
  const month30 = [2, 8, 11, 16];

  const year = randomNumber(1995, dateList[0]);
  if (`${year}` === dateList[0]) {
    maxMM = parseInt(dateList[1], 10);
    maxDD = parseInt(dateList[2], 10);
  } else if (year === 1995) {
    minMM = 6;
    minDD = 16;
  }
  const month = randomNumber(minMM, maxMM);

  if (year !== dateList) {
    if (month in month30) {
      maxDD = 30;
    } else if (month === 2) {
      maxDD = 28;
    }
  }
  const day = randomNumber(minDD, maxDD);

  const date = `${year}-${month}-${day}`;
  return date;
}

export function makeImgForFav(parent, img) {
  const container = el('section');
  const title = el('h2', img.title);

  container.setAttribute('class', 'favPage');
  title.setAttribute('class', 'favPage__title');

  container.appendChild(title);

  if (img.media_type === 'image') {
    const image = el('img');
    image.setAttribute('src', `${img.url}`);
    container.appendChild(image);
  }
  parent.appendChild(container);
}
