console.log("script.js loaded");

async function getGif() {
  const response = await fetch("https://api.giphy.com/v1/gifs/search?api_key=jbXBWpHy8jLm8tMcOSl8CB0SOHLYx2dU&q=gif&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips");
  const data = await response.json();
  const gift = data.data;
  

  const output = document.getElementById("gif-container"); 
  output.textContent = "";
}

console.log(getGif)