import { t, changeLanguage } from "../translate/language.js";

const form = document.querySelector(".form");
const errorMessage = document.querySelector("#errorMessage");
const successMessage = document.querySelector("#successMessage");

form.addEventListener("submit", async function (e) {
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

  successMessage.dataset.i18n = "messages.submit.success";
  successMessage.textContent = t("messages.submit.success");
  successMessage.classList.remove("hidden");

  // errorMessage.dataset.i18n = "messages.submit.error";
  // errorMessage.textContent = t("messages.submit.error");
  // errorMessage.classList.remove("hidden");
});
