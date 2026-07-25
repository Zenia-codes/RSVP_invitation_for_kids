// food table

// const foodToggle = document.querySelector("#food");
// const foodSection = document.querySelector("#foodSection");

// foodToggle.addEventListener("change", () => {
//   foodSection.classList.toggle("hidden");
// });

// tips on gifts
import { t } from "../translate/language.js";

import artsAndCrafts from "../../assets/gifts/cut.png";
import sensoryPlay from "../../assets/gifts/magic-sand.png";
import booksAndColoring from "../../assets/gifts/drawing.png";
import clothes from "../../assets/gifts/dress.png";
import accessories from "../../assets/gifts/accessories.png";
import music from "../../assets/gifts/instrument.png";
import kitchen from "../../assets/gifts/pizza.png";
import police from "../../assets/gifts/police.png";
import doctor from "../../assets/gifts/doctor.png";
import building from "../../assets/gifts/house.png";
import minecraftMagnetTiles from "../../assets/gifts/minecraft.png";
import magneticTiles from "../../assets/gifts/magnetic-blocks.png";
import lego from "../../assets/gifts/lego.png";
import favoriteShows from "../../assets/gifts/fairytail.png";
import astrobot from "../../assets/gifts/astrobot.png";

const showGiftTips = document.querySelector("#showGiftTips");
const giftCard = document.querySelector("#giftCard");

const giftImage = document.querySelector("#giftImage");
const giftTitle = document.querySelector("#giftTitle");

const nextGift = document.querySelector("#nextGift");
const previousGift = document.querySelector("#previousGift");

const gifts = [
  {
    title: t("giftTips.artsAndCrafts"),
    image: artsAndCrafts,
  },
  {
    title: t("giftTips.sensoryPlay"),
    image: sensoryPlay,
  },
  {
    title: t("giftTips.booksAndColoring"),
    image: booksAndColoring,
  },
  {
    title: t("giftTips.clothes"),
    image: clothes,
  },
  {
    title: t("giftTips.accessories"),
    image: accessories,
  },
  {
    title: t("giftTips.music"),
    image: music,
  },
  {
    title: t("giftTips.kitchen"),
    image: kitchen,
  },
  {
    title: t("giftTips.police"),
    image: police,
  },
  {
    title: t("giftTips.doctor"),
    image: doctor,
  },
  {
    title: t("giftTips.building"),
    image: building,
  },
  {
    title: t("giftTips.minecraftMagnetTiles"),
    image: minecraftMagnetTiles,
  },
  {
    title: t("giftTips.magneticTiles"),
    image: magneticTiles,
  },
  {
    title: t("giftTips.lego"),
    image: lego,
  },
  {
    title: t("giftTips.favoriteShows"),
    image: favoriteShows,
  },
  {
    title: t("giftTips.astrobot"),
    image: astrobot,
  },
];

let currentGift = 0;
let interval = null;

// zobrazí aktuální tip
function showGift(index) {
  giftTitle.textContent = gifts[index].title;
  giftImage.src = gifts[index].image;
  giftImage.alt = gifts[index].title;
}

// další tip
function nextGiftSlide() {
  currentGift++;

  if (currentGift >= gifts.length) {
    currentGift = 0;
  }

  showGift(currentGift);
}

// předchozí tip
function previousGiftSlide() {
  currentGift--;

  if (currentGift < 0) {
    currentGift = gifts.length - 1;
  }

  showGift(currentGift);
}

// automatické přepínání
function startSlider() {
  clearInterval(interval);
  interval = setInterval(nextGiftSlide, 7000);
}

// zastavení slideru
function stopSlider() {
  clearInterval(interval);
  interval = null;
}

// restart po ručním kliknutí
function restartSlider() {
  stopSlider();
  startSlider();
}

// zobrazit / skrýt tipy
showGiftTips.addEventListener("click", () => {
  giftCard.classList.toggle("hidden");

  if (giftCard.classList.contains("hidden")) {
    showGiftTips.textContent = "zobrazit tip";
    stopSlider();
  } else {
    showGiftTips.textContent = "skrýt tip";

    showGift(currentGift);
    startSlider();
  }
});

// další dárek
nextGift.addEventListener("click", () => {
  nextGiftSlide();
  restartSlider();
});

// předchozí dárek
previousGift.addEventListener("click", () => {
  previousGiftSlide();
  restartSlider();
});
