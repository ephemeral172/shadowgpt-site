import { LangProvider } from "./components/landing/LangContext";
import PageMeta from "./components/PageMeta";

export default function Layout({ children }) {
  return (
    <LangProvider>
      <PageMeta />
      {children}
    </LangProvider>
  );
}