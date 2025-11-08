console.log("script.js loaded");

const button = document.getElementById("fetch-gif-btn");
const gifContainer = document.getElementById("gif-container");

const url = "https://api.giphy.com/v1/gifs/search?api_key=jbXBWpHy8jLm8tMcOSl8CB0SOHLYx2dU&q=cat&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

async function getCatGifs() {
  const response = await fetch(url);
  const data = await response.json();

  gifContainer.innerHTML = "";

  data.data.forEach(gif => {
    const img = document.createElement("img");
    img.src = gif.images.original.url;
    img.className = "col-3 mb-3";
    gifContainer.appendChild(img);
  });
}

button.addEventListener("click", getCatGifs);

