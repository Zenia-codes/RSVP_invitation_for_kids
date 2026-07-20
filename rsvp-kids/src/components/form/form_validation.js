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
    errorMessage.textContent = "Musí být alespoň 1 dospělý😊";
    errorMessage.classList.remove("hidden");
    return;
  }

  successMessage.textContent =
    "Děkujeme ✨ Formulář byl úspěšně odeslán. Kopii odpovědí najdeš ve své e-mailové schránce 💌";
  successMessage.classList.remove("hidden");
});
