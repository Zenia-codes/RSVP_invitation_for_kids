// food table

// const foodToggle = document.querySelector("#food");
// const foodSection = document.querySelector("#foodSection");

// foodToggle.addEventListener("change", () => {
//   foodSection.classList.toggle("hidden");
// });

// tips on gifts

const showGiftTips = document.querySelector("#showGiftTips");
const giftCard = document.querySelector("#giftCard");

const giftImage = document.querySelector("#giftImage");
const giftTitle = document.querySelector("#giftTitle");

const nextGift = document.querySelector("#nextGift");

const gifts = [
  {
    title: "kreativní tvořivé sady",
    image: "./assets/gift1.jpg",
  },

  {
    title: "omalovánky, samolepky, knížky",
    image: "./assets/gift2.jpg",
  },

  {
    title: "oblečení s motivem princezen, duhou, kočkami, Gábi, Spidermanem",
    image: "./assets/gift3.jpg",
  },

  {
    title: "ozdoby do vlasů (čelenky, příčesky, sponky, gumičky)",
    image: "./assets/gift4.jpg",
  },

  {
    title: "doplňky (kabelka, batůžek)",
    image: "./assets/gift5.jpg",
  },

  {
    title: "stavebnice Lego Klasic nebo Duplo (ideálně domečky)",
    image: "./assets/gift6.jpg",
  },

  {
    title: "puzzle(do 200 dílků)",
    image: "./assets/gift7.jpg",
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

showGiftTips.addEventListener("click", function () {
  giftCard.classList.toggle("hidden"); // Pokud hidden existuje → smaže se, neexistuje → přidá se

  if (giftCard.classList.contains("hidden")) {
    showGiftTips.textContent = "zobrazit tip";

    clearInterval(interval);
  } else {
    showGiftTips.textContent = "skrýt tip";

    showGift(currentGift);
    clearInterval(interval);
    interval = setInterval(nextGiftSlide, 5000);
  }
});

nextGift.addEventListener("click", function () {
  nextGiftSlide();
});
