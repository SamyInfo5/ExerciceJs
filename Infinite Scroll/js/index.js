console.log("coucou");
const container = document.querySelector(".container");

const loadImages = (numImages = 10) => {
  let i = 0;
  while (i < numImages) {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        const img = document.createElement("img");
        img.src = `${data.message}`;
        img.width = 200
        img.height = 200
        container.appendChild(img);
      });
    i++;
  }
};

loadImages();

window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    loadImages();
  }
});
