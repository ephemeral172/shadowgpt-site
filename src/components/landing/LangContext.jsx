import { createContext, useContext, useState } from "react";

const LangContext = createContext();

const SUPPORTED_LANGS = ["en", "ru", "es", "ko"];

function getInitialLang() {
  if (typeof navigator === "undefined") return "en";
  const browser = (navigator.language || navigator.userLanguage || "").toLowerCase();
  if (browser.startsWith("ko")) return "ko";
  if (browser.startsWith("es")) return "es";
  if (browser.startsWith("ru")) return "ru";
  return "en";
}

export { SUPPORTED_LANGS };

export function LangProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}