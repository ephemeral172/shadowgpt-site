import { createContext, useContext, useState } from "react";

const LangContext = createContext();

function getInitialLang() {
  if (typeof navigator === "undefined") return "en";
  const browser = navigator.language || navigator.userLanguage || "";
  return browser.startsWith("ru") ? "ru" : "en";
}

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