// food table

// const foodToggle = document.querySelector("#food");
// const foodSection = document.querySelector("#foodSection");

// foodToggle.addEventListener("change", () => {
//   foodSection.classList.toggle("hidden");
// });

// tips on gifts
import create from "../../assets/gifts/cut.png";
import magicSand from "../../assets/gifts/magic-sand.png";
import coloring from "../../assets/gifts/drawing.png";
import dress from "../../assets/gifts/dress.png";
import accessories from "../../assets/gifts/accessories.png";
import instruments from "../../assets/gifts/instruments.png";
import pizza from "../../assets/gifts/pizza.png";
import police from "../../assets/gifts/police.png";
import doctor from "../../assets/gifts/doctor.png";
import house from "../../assets/gifts/house.png";
import minecraft from "../../assets/gifts/minecraft2.png";
import magBlocks from "../../assets/gifts/magnetic-blocks.png";
import lego from "../../assets/gifts/lego.png";
import fairytail from "../../assets/gifts/fairytail.png";
import astrobot from "../../assets/gifts/astrobot.png";

const showGiftTips = document.querySelector("#showGiftTips");
const giftCard = document.querySelector("#giftCard");

const giftImage = document.querySelector("#giftImage");
const giftTitle = document.querySelector("#giftTitle");

const nextGift = document.querySelector("#nextGift");
const previousGift = document.querySelector("#previousGift");

const gifts = [
  {
    title:
      "Sofinka ráda tvoří. Barevné papíry, vystřihovánky, šablony, třpytky nebo fixy u nás mizí rychlostí blesku. ✂️✨",
    image: create,
  },

  {
    title:
      "Potěší ji plastelína, tekutý písek i různé vykrajovátka a obtiskovací válečky.",
    image: magicSand,
  },

  {
    title:
      "Omalovánky, samolepky a knížky - zvlášťe potom s motivy kočiček, princezen a superhrdinů.",
    image: coloring,
  },

  {
    title:
      "Radost Sofince udělá i pěkné oblečení v odstínech růžové, fialové nebo duhové. Velikost 116 a větší.",
    image: dress,
  },

  {
    title:
      "Žádná princezna se neobejde bez doplňků. 👑 Čelenky, brýle, sponky, gumičky, příčesky, náramky nebo kabelky jsou vždy trefou do černého.",
    image: accessories,
  },

  {
    title: "Ve volném čase je z ní talentovaná hudebnice. 🎵🎵🎵",
    image: instruments,
  },

  {
    title:
      "O chvíli později už vaří nebo peče dobroty a potom nám je prodává. 🍕🧁",
    image: pizza,
  },

  {
    title:
      "Někdy je odvážnou policistkou a za zvuku sirén s pistolí v ruce honí zloděje.",
    image: police,
  },

  {
    title: "Jindy zachraňuje plyšáky (a bratříčka) jako paní doktorka. 🩺",
    image: doctor,
  },

  {
    title: "Ráda staví domečky, bunkry i nejrůznější skrýše.",
    image: house,
  },

  {
    title: "Nejvíc ji baví magnetické stavebnice ve stylu Minecraftu.",
    image: minecraft,
  },

  {
    title:
      "Velký úspěch mají i magnetické bloky připomínající barevná sklíčka.",
    image: magBlocks,
  },

  {
    title: "A samozřejmě nesmí chybět klasika – LEGO Classic i Duplo. 🧱",
    image: lego,
  },

  {
    title:
      "Momentálně u nás vedou pohádky jako Spidey, Iron Friends, Kouzelná beruška, Bluey a Gábinin kouzelný domek.",
    image: fairytail,
  },

  {
    title:
      "A úplně největší hit? 🔥 Astrobot z hry na PS5, na kterého teď společně paříme.",
    image: astrobot,
  },
];

let currentGift = 0; // Který tip se právě zobrazuje (0, tedy první objekt v poli)
let interval;

// Zobrazí aktuální dárek
function showGift(index) {
  giftTitle.textContent = gifts[index].title;
  giftImage.src = gifts[index].image;
  giftImage.alt = gifts[index].title;
}

// Posune slider dál
function nextGiftSlide() {
  currentGift++;

  if (currentGift >= gifts.length) {
    currentGift = 0; // Jak dosáhne konce seznamu, vrátí se funkce na začátek. Tak vzniká nekonečné přepínání.
  }

  showGift(currentGift); //zobrazí aktuální tip
}

// Posune slider zpět
function previousGiftSlide() {
  currentGift--;

  if (currentGift < 0) {
    currentGift = gifts.length - 1;
  }

  showGift(currentGift);
}

previousGift.addEventListener("click", function () {
  previousGiftSlide();
});

showGiftTips.addEventListener("click", function () {
  giftCard.classList.toggle("hidden"); // Pokud hidden existuje → smaže se, neexistuje → přidá se

  if (giftCard.classList.contains("hidden")) {
    showGiftTips.textContent = "zobrazit tip";

    clearInterval(interval);
  } else {
    showGiftTips.textContent = "skrýt tip";

    showGift(currentGift);
    clearInterval(interval);
    interval = setInterval(nextGiftSlide, 7000);
  }
});

nextGift.addEventListener("click", function () {
  nextGiftSlide();
});

//reset automatického přepínání po kliknutí
function restartSlider() {
  clearInterval(interval);
  interval = setInterval(nextGiftSlide, 7000);
}

nextGift.addEventListener("click", () => {
  nextGiftSlide();
  restartSlider();
});

previousGift.addEventListener("click", () => {
  previousGiftSlide();
  restartSlider();
});
