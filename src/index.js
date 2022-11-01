import "./styles.css";

const breeds = ["boxer", "komondor", "rottweiler", "sheepdog", "wolfhound"];

const randomText = [
  "Lose eyes get fat shew. Winter can indeed letter oppose way change tended now. So is improve \
  my charmed picture exposed adapted demands. Received had end produced prepared diverted strictly \
  off man branched. Known ye money so large decay voice there to. Preserved be mr cordially \
  incommode as an. He doors quick child an point at. Had share vexed front least style off why him. \
  Comfort reached gay perhaps chamber his six detract besides add. Moonlight newspaper up he it \
  enjoyment agreeable depending. Timed voice share led his widen noisy young. On weddings believed \
  laughing although material do exercise of. Up attempt offered ye civilly so sitting to. She new \
  course get living within elinor joy. She her rapturous suffering concealed.",
  "Mr do raising article general norland my hastily. Its companions say uncommonly pianoforte \
  favourable. Education affection consulted by mr attending he therefore on forfeited. High way \
  more far feet kind evil play led. Sometimes furnished collected add for resources attention. \
  Norland an by minuter enquire it general on towards forming. Adapted mrs totally company two yet \
  conduct men. An sincerity so extremity he additions. Her yet there truth merit. Mrs all \
  projecting favourable now unpleasing. Son law garden chatty temper. Oh children provided to mr \
  elegance marriage strongly. Off can admiration prosperous now devonshire diminution law.",
  "Manor we shall merit by chief wound no or would. Oh towards between subject passage sending \
  mention or it. Sight happy do burst fruit to woody begin at. Assurance perpetual he in oh \
  determine as. The year paid met him does eyes same. Own marianne improved sociable not out. \
  Thing do sight blush mr an. Celebrated am announcing delightful remarkably we in literature \
  it solicitude. Design use say piqued any gay supply. Front sex match vexed her those great.",
  "Now residence dashwoods she excellent you. Shade being under his bed her. Much read on as \
  draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined \
  day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are most \
  gave hope. Secure active living depend son repair day ladies now. Impossible considered \
  invitation him men instrument saw celebrated unpleasant. Put rest and must set kind next \
  many near nay. He exquisite continued explained middleton am. Voice hours young woody has \
  she think equal. Estate moment he at on wonder at season little. Six garden result summer \
  set family esteem nay estate. End admiration mrs unreserved discovered comparison especially \
  invitation.",
  "Frankness applauded by supported ye household. Collected favourite now for for and rapturous \
  repulsive consulted. An seems green be wrote again. She add what own only like. Tolerably we \
  as extremity exquisite do commanded. Doubtful offended do entrance of landlord moreover is \
  mistress in. Nay was appear entire ladies. Sportsman do allowance is september shameless am \
  sincerity oh recommend. Gate tell man day that who. Denote simple fat denied add worthy little \
  use. As some he so high down am week. Conduct esteems by cottage to pasture we winding. On \
  assistance he cultivated considered frequently. Person how having tended direct own day man. \
  Saw sufficient indulgence one own you inquietude sympathize."
];

let i = 0;

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
    text.innerText = randomText[i++];

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
