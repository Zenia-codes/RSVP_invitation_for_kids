const form = document.querySelector(".form");
const errorMessage = document.querySelector("#errorMessage");
const successMessage = document.querySelector("#successMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  //nejprve reset stareho stavu f.
  errorMessage.classList.add("hidden");
  successMessage.classList.add("hidden");
  errorMessage.textContent = "";
  successMessage.textContent = "";

  const name = document.querySelector("#name").value.trim();
  const surname = document.querySelector("#surname").value.trim();
  const email = document.querySelector("#email").value.trim();
  const agree = document.querySelector("#agree").checked;
  const selectedRadio = document.querySelector(
    'input[name="attendance"]:checked'
  );
  const adults = Number(document.querySelector("#numberOfAdults").value);

  if (name.length <= 2) {
    errorMessage.textContent = "Zadej prosím celé jméno 🙂";
    errorMessage.classList.remove("hidden");
    return;
  }

  if (name.length > 25) {
    errorMessage.textContent = "Jméno je nějak podezřele dlouhé 😄";
    errorMessage.classList.remove("hidden");
    return;
  }

  if (!/^[A-Za-zÁ-ž\s'-]+$/.test(name)) {
    errorMessage.textContent = "Jméno obsahuje nepovolené znaky 🤔";
    errorMessage.classList.remove("hidden");
    return;
  }

  if (surname.length <= 2) {
    errorMessage.textContent = "Zadej prosím celé příjmení 🙂";
    errorMessage.classList.remove("hidden");
    return;
  }

  if (surname.length > 25) {
    errorMessage.textContent = "Příjmení je nějak podezřele dlouhé 😄";
    errorMessage.classList.remove("hidden");
    return;
  }

  if (!/^[A-Za-zÁ-ž\s'-]+$/.test(surname)) {
    errorMessage.textContent = "Příjmení obsahuje nepovolené znaky 🤔";
    errorMessage.classList.remove("hidden");
    return;
  }

  if (!email.includes("@")) {
    errorMessage.textContent = "E-mailová adresa nevypadá správně 🤔";
    errorMessage.classList.remove("hidden");
    return;
  }

  if (!agree) {
    errorMessage.textContent =
      "Pro pokračování je potřeba souhlasit s podmínkami 🙏";
    errorMessage.classList.remove("hidden");
    return;
  }

  if (!selectedRadio) {
    errorMessage.textContent = "Dej nám prosím vědět, jestli dorazíš ✨";
    errorMessage.classList.remove("hidden");
    return;
  }

  if (adults === 0) {
    errorMessage.textContent = "Počet dospělých musí být alespoň 1 😊";
    errorMessage.classList.remove("hidden");
    return;
  }

  successMessage.textContent =
    "Hotovo ✨ Formulář byl úspěšně odeslán. Kopii odpovědí najdeš ve své e-mailové schránce 💌";
  successMessage.classList.remove("hidden");
});

// food table

const foodToggle = document.querySelector("#foodToggle");
const foodSection = document.querySelector("#foodSection");

foodToggle.addEventListener("change", () => {
  foodSection.classList.toggle("hidden");
});

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
