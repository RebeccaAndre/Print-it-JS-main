//Déclaration et initialisation du tableau slides contenant les informations sur chaque slide
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Récupération de l'élément contenant les bullets points dans le DOM
const dotsContainer = document.querySelector(".dots");
console.log(dotsContainer);

let index = 0;

// Fonction pour créer les bullets points
function créationBullet() {
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.setAttribute("titre", `Slide${i + 1}`);
    dotsContainer.appendChild(dot);
    if (i == index) {
      dot.classList.add("dot_selected");
    }
  }
}

créationBullet();

// Récupération des flèches gauche et droite dans le DOM
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

// Récupération des images et des textes descriptifs dans le DOM
let bannerImage = document.querySelectorAll(".banner-img");
let bannerTagline = document.querySelector("#banner-txt p[titre]");
const dots = document.querySelectorAll(".dot");

//Navigation vers la droite de le diaporama
function clickDroit() {
  arrowRight.addEventListener("click", () => {
    index++;
    console.log(index);

    if (index >= slides.length) {
      index = 0;
      console.log(index);
    }

    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add("dot_selected");
      } else {
        dot.classList.remove("dot_selected");
      }
    });

    bannerImage.forEach((img, i) => {
      img.src = "./assets/images/slideshow/" + slides[index].image;

      console.log(img.src);
    });

    bannerTagline.innerHTML = slides[index].tagLine;

    console.log(bannerTagline.innerHTML);

    console.log("Changement de l'image vers la droite");
  });
}

clickDroit();

function clickGauche() {
  arrowLeft.addEventListener("click", () => {
    index--;
    console.log(index);

    if (index < 0) {
      index = slides.length - 1;
      console.log(index);
    }

    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add("dot_selected");
      } else {
        dot.classList.remove("dot_selected");
      }
    });

    bannerImage.forEach((img, i) => {
      img.src = "./assets/images/slideshow/" + slides[index].image;

      console.log(img.src);
    });

    bannerTagline.innerHTML = slides[index].tagLine;

    console.log(bannerTagline.innerHTML);

    console.log("Changement de l'image vers la gauche");
  });
}

clickGauche();
