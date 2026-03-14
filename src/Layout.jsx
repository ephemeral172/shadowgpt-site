import { LangProvider } from "./components/landing/LangContext";

export default function Layout({ children }) {
  return <LangProvider>{children}</LangProvider>;
}