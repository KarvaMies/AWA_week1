import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

const breeds = ["finnish", "komondor", "rottweiler", "sheepdog", "wolfhound"];

function initializeCode() {
  createWikiItem();
  createWikiItem();
  createWikiItem();
  createWikiItem();
  createWikiItem();
}

function fetchDogs() {
  breeds.forEach(async (breed) => {
    const url = "https://dog.ceo/api/breed/" + breed + "/images/random";
    const promise = await fetch(url);
    const JSON = await promise.json();

    const imgSrc = JSON.message;

    const newUrl = new URL(imgSrc);
    const name = newUrl.pathname.split("/")[2].split("-");

    const container = document.querySelector(".container");

    let wikiItem = document.createElement("div");
    wikiItem.classList.add("wiki-item");

    let header = document.createElement("h1");
    header.classList.add("wiki-header");
    if (typeof name[1] !== "undefined") {
      header.innerText = name[0] + ", " + name[1];
    } else {
      header.innerText = name[0];
    }

    let content = document.createElement("div");
    content.classList.add("wiki-content");

    let text = document.createElement("p");
    text.classList.add("wiki-text");
    text.innerText = "Some text about this breed.";

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    let img = document.createElement("img");
    img.classList.add("wiki-img");
    img.setAttribute("src", imgSrc);

    imgContainer.appendChild(img);

    content.appendChild(text);
    content.appendChild(imgContainer);

    wikiItem.appendChild(header);
    wikiItem.appendChild(content);

    container.appendChild(wikiItem);
  });
}
fetchDogs();

function createWikiItem() {}
