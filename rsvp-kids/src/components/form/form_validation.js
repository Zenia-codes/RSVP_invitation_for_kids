import { t, changeLanguage } from "../translate/language.js";

const form = document.querySelector(".form");
const errorMessage = document.querySelector("#errorMessage");
const successMessage = document.querySelector("#successMessage");
const submitBtn = form.querySelector('button[type="submit"]');

// konfety po úspěšném odeslání
function launchConfetti() {
  console.log("🎉 konfety spuštěny");
  const colors = ["#ff6b9d", "#ffd166", "#06d6a0", "#118ab2", "#8338ec"];

  const container = document.querySelector("#confetti");

  if (!container) {
    console.error("Confetti container not found.");
    return;
  }

  for (let i = 0; i < 80; i++) {
    const piece = document.createElement("div");

    piece.classList.add("confetti");

    piece.style.left = `${Math.random() * 100}%`;
    piece.style.animationDuration = `${3 + Math.random() * 2}s`;

    piece.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    container.appendChild(piece);
    console.log(piece);

    setTimeout(() => {
      piece.remove();
    }, 5000);
  }
}

form.addEventListener("submit", async function (e) {
  e.preventDefault();

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

  const [emailName, emailDomain] = email.split("@");

  if (name.length <= 2) {
    errorMessage.dataset.i18n = "messages.validation.nameTooShort";
    errorMessage.textContent = t("messages.validation.nameTooShort");
    errorMessage.classList.remove("hidden");
    return;
  }

  if (name.length > 25) {
    errorMessage.dataset.i18n = "messages.validation.nameTooLong";
    errorMessage.textContent = t("messages.validation.nameTooLong");
    errorMessage.classList.remove("hidden");
    return;
  }

  if (!/^[A-Za-zÁ-ž\s'-]+$/.test(name)) {
    errorMessage.dataset.i18n = "messages.validation.nameIsWrong";
    errorMessage.textContent = t("messages.validation.nameIsWrong");
    errorMessage.classList.remove("hidden");
    return;
  }

  if (surname.length <= 2) {
    errorMessage.dataset.i18n = "messages.validation.shortSurname";
    errorMessage.textContent = t("messages.validation.shortSurname");
    errorMessage.classList.remove("hidden");
    return;
  }

  if (surname.length > 25) {
    errorMessage.dataset.i18n = "messages.validation.surnameTooLong";
    errorMessage.textContent = t("messages.validation.surnameTooLong");
    errorMessage.classList.remove("hidden");
    return;
  }

  if (!/^[A-Za-zÁ-ž\s'-]+$/.test(surname)) {
    errorMessage.dataset.i18n = "messages.validation.surnameIsWrong";
    errorMessage.textContent = t("messages.validation.surnameIsWrong");
    errorMessage.classList.remove("hidden");
    return;
  }

  if (!email.includes("@") || email.startsWith("@") || email.endsWith("@")) {
    errorMessage.dataset.i18n = "messages.validation.emailInvalid";
    errorMessage.textContent = t("messages.validation.emailInvalid");
    errorMessage.classList.remove("hidden");
    return;
  }

  if (!emailDomain.includes(".")) {
    errorMessage.dataset.i18n = "messages.validation.emailMissingDot";
    errorMessage.textContent = t("messages.validation.emailMissingDot");
    errorMessage.classList.remove("hidden");
    return;
  }

  if (!selectedRadio) {
    errorMessage.dataset.i18n = "messages.validation.attendance";
    errorMessage.textContent = t("messages.validation.attendance");
    errorMessage.classList.remove("hidden");
    return;
  }

  if (adults === 0) {
    errorMessage.dataset.i18n = "messages.validation.adults";
    errorMessage.textContent = t("messages.validation.adults");
    errorMessage.classList.remove("hidden");
    return;
  }

  if (!agree) {
    errorMessage.dataset.i18n = "messages.validation.consent";
    errorMessage.textContent = t("messages.validation.consent");
    errorMessage.classList.remove("hidden");
    return;
  }

  const formData = new FormData(form);

  const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

  if (!ACCESS_KEY) {
    console.error("Web3Forms access key is missing.");
    return;
  }

  formData.append("access_key", ACCESS_KEY);
  formData.append("subject", "RSVP - Sofinka 5. narozeniny");

  submitBtn.disabled = true;
  submitBtn.textContent = t("messages.sending");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    console.log(result);

    if (result.success) {
      successMessage.dataset.i18n = "messages.submit.success";
      successMessage.textContent = t("messages.submit.success");
      successMessage.classList.remove("hidden");

      launchConfetti();

      form.reset();
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    console.error(error);

    errorMessage.dataset.i18n = "messages.submit.error";
    errorMessage.textContent = t("messages.submit.error");
    errorMessage.classList.remove("hidden");
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = t("form.buttonSubmit");
  }
});
