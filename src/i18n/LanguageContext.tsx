import { createContext, useContext, useState, type ReactNode } from 'react';
import { translations, type Lang, type Translation } from './translations';

type LanguageContextValue = {
  lang: Lang;
  toggle: () => void;
  setLang: (lang: Lang) => void;
  t: Translation;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('it');
  const toggle = () => setLang((current) => (current === 'it' ? 'en' : 'it'));

  return (
    <LanguageContext.Provider value={{ lang, toggle, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within a LanguageProvider');
  return ctx;
}
