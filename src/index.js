import "./styles.css";

const breeds = ["boxer", "komondor", "rottweiler", "sheepdog", "wolfhound"];

function fetchDogs() {
  breeds.forEach(async (breed) => {
    const breedUrl = "https://dog.ceo/api/breed/" + breed + "/images/random";
    const breedPromise = await fetch(breedUrl);
    const breedJSON = await breedPromise.json();

    const summaryUrl =
      "https://en.wikipedia.org/api/rest_v1/page/summary/" + breed;
    const summaryPromise = await fetch(summaryUrl);
    const summaryJSON = await summaryPromise.json();
    const summary = summaryJSON.extract;

    const imgSrc = breedJSON.message;

    const container = document.querySelector(".container");

    let wikiItem = document.createElement("div");
    wikiItem.classList.add("wiki-item");

    let header = document.createElement("h1");
    header.classList.add("wiki-header");
    header.innerText = breed;

    let content = document.createElement("div");
    content.classList.add("wiki-content");

    let text = document.createElement("p");
    text.classList.add("wiki-text");
    text.innerText = summary;

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
