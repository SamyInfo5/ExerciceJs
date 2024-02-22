const keyApi = "31U1bqlQs6hNTPvgY7zeXzS4KN2ZT0HQCgrlfr40nypNqgqY3q1XE2eW";
const BASE_URL = "https://api.pexels.com/v1/search";
const image_box = document.getElementById("imageBox");
const nextBtn = document.getElementById("next");
const previousBtn = document.getElementById("previous");
const tabImagesWidth = [];
let index = 0;
const params = {
  query: "people",
  page: 3,
  per_page: 12,
};

const encodedParams = Object.keys(params).map((key) => {
  if (Array.isArray(params[key])) {
    return params[key]
      .map(
        (value) => `${encodeURIComponent(key)}[]=${encodeURIComponent(value)}`
      )
      .join("&");
  }
  return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
});
const queryString = encodedParams.join("&");
const url = `${BASE_URL}?${queryString}`;

async function fetchData(url) {
  const res = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      Authorization: keyApi,
      "Content-Type": "application/json",
    },
  });
  return res.json();
}

fetchData(url).then((data) => {
  data.photos.forEach((element) => {
    const Image = document.createElement("img");
    Image.src = element.src.original;
    Image.height = 300;
    Image.width = 300;
    Image.id = element.id;
    image_box.appendChild(Image);
  });
  getImageWidth();
  nextImage(index);
  index = index;
  previousImage(index);
  index = index;
});

const getImageWidth = () => {
  const AllImages = document.querySelectorAll("img");
  AllImages.forEach((image) => {
    const imageWidth = image.offsetWidth;
    tabImagesWidth.push(imageWidth);
  });
  return tabImagesWidth;
};

const nextImage = () => {
  nextBtn.addEventListener("click", () => {
    console.log(index);
    if (index < tabImagesWidth.length - 1) {
      image_box.scrollLeft += tabImagesWidth[index];
      image_box.querySelectorAll('.imageBox img')[index].style.display = 'none';
      index += 1;
      image_box.querySelectorAll('.imageBox img')[index].style.display = 'block';
    }
  });
};

const previousImage = () => {
  previousBtn.addEventListener("click", () => {
    console.log(index);
    if (index > 0) {
      image_box.scrollLeft -= tabImagesWidth[index - 1];
      image_box.querySelectorAll('.imageBox img')[index].style.display = 'none';
      index -= 1;
      image_box.querySelectorAll('.imageBox img')[index].style.display = 'block';
    }
  });
};
