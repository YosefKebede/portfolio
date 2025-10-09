const nav = document.getElementById("navs");
const image1 = document.getElementById("img1");
const image2 = document.getElementById("img2");
const alllinks = [
  document.getElementById("a1"),
  document.getElementById("a2"),
  document.getElementById("a3"),
  document.getElementById("a4"),
  document.getElementById("a5"),
];

alllinks.forEach((event) => {
  event.addEventListener("click", clicked2);
});

/*
const cards = document.getElementsByClassName(".cards");
const backp = document.getElementsByClassName(".back");
cards.addEventListener("click", left);

function left() {
  backp.style.left = 0;
}*/

image1.addEventListener("click", clicked);
image2.addEventListener("click", clicked2);

function clicked() {
  image1.style.display = "none";
  image2.style.display = "block";
  nav.style.display = "block";
}
function clicked2() {
  image2.style.display = "none";
  image1.style.display = "block";
  nav.style.display = "none";
}

/*
calculatorCard.addEventListener("mouseover", () => {
  calculatorBack.style.display = "block";
});
calculatorCard.addEventListener("mouseout", () => {
  calculatorBack.style.display = "none";
});
const websiteCard = document.getElementById("website").parentElement;
const websiteBack = document.getElementById("web");

websiteCard.addEventListener("mouseover", () => {
  websiteBack.style.display = "block";
});
websiteCard.addEventListener("mouseout", () => {
  websiteBack.style.display = "none";
});

const passwordCard = document.getElementById("password").parentElement;
const passwordBack = document.getElementById("pass");

passwordCard.addEventListener("mouseover", () => {
  passwordBack.style.display = "block";
});
passwordCard.addEventListener("mouseout", () => {
  passwordBack.style.display = "none";
});

const applicationCard = document.getElementById("app").parentElement;
const applicationBack = document.getElementById("application");

applicationCard.addEventListener("mouseover", () => {
  applicationBack.style.display = "block";
});
applicationCard.addEventListener("mouseout", () => {
  applicationBack.style.display = "none";
});

const softwareCard = document.getElementById("software").parentElement;
const softwareBack = document.getElementById("soft");

softwareCard.addEventListener("mouseover", () => {
  softwareBack.style.display = "block";
});
softwareCard.addEventListener("mouseout", () => {
  softwareBack.style.display = "none";
});

const uiCard = document.getElementById("ui").parentElement;
const uiBack = document.getElementById("ux");

uiCard.addEventListener("mouseover", () => {
  uiBack.style.display = "block";
});
uiCard.addEventListener("mouseout", () => {
  uiBack.style.display = "none";
});

const aiCard = document.getElementById("ai").parentElement;
const aiBack = document.getElementById("ais");

aiCard.addEventListener("mouseover", () => {
  aiBack.style.display = "block";
});
aiCard.addEventListener("mouseout", () => {
  aiBack.style.display = "none";
});

const serverCard = document.getElementById("server").parentElement;
const serverBack = document.getElementById("serv");

serverCard.addEventListener("mouseover", () => {
  serverBack.style.display = "block";
});
serverCard.addEventListener("mouseout", () => {
  serverBack.style.display = "none";
});
*/
