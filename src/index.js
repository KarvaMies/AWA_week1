import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  createWikiItem();
  createWikiItem();
  createWikiItem();
  createWikiItem();
  createWikiItem();
}

function createWikiItem() {
  const container = document.querySelector(".container");

  let wikiItem = document.createElement("div");
  wikiItem.classList.add("wiki-item");

  let header = document.createElement("h1");
  header.classList.add("wiki-header");
  header.innerText = "Breed X";

  let content = document.createElement("div");
  content.classList.add("wiki-content");

  let text = document.createElement("p");
  text.classList.add("wiki-text");
  text.innerText = "Some text about this breed.";

  let imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");

  let img = document.createElement("img");
  img.classList.add("wiki-img");
  img.setAttribute("src", "");

  imgContainer.appendChild(img);

  content.appendChild(text);
  content.appendChild(imgContainer);

  wikiItem.appendChild(header);
  wikiItem.appendChild(content);

  container.appendChild(wikiItem);
}
