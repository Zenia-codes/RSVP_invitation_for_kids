import cs from "./cs.json";
import en from "./en.json";

const translations = {
  cs,
  en,
};

// Funkce pro čtení vnořených hodnot (např. hero.slogan)
function getTranslation(obj, path) {
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
}

export function changeLanguage(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;

    if (el.hasAttribute("data-html")) {
      el.innerHTML = t(key);
    } else {
      el.textContent = t(key);
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    el.placeholder = t(key);
  });

  localStorage.setItem("language", lang);
}

export function t(key) {
  const lang = document.documentElement.lang;
  const value = getTranslation(translations[lang], key);

  if (value === undefined) {
    console.warn(`Missing translation: ${key}`);
    return key;
  }

  return value;
}

// tlačítka CZ / EN
document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => {
    changeLanguage(button.dataset.lang);
  });
});

// načtení uloženého jazyka po otevření stránky
const savedLanguage = localStorage.getItem("language") || "cs";

changeLanguage(savedLanguage);
