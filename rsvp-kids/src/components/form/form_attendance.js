import { t, changeLanguage } from "../translate/language.js";

const peopleQuestion = document.querySelector("#peopleQuestion");

document.querySelectorAll('input[name="attendance"]').forEach((radio) => {
  radio.addEventListener("change", (e) => {
    const key =
      e.target.value === "yes" ? "form.howManyComing" : "form.howManyNotComing";

    peopleQuestion.dataset.i18n = key;
    peopleQuestion.textContent = t(key);
  });
});
