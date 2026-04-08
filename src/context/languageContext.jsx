import { createContext, useState } from "react";

export const languageContext = createContext({
      language: "vi",
      onchangeLanguage:() => {},
});


export default function languageContextProvider({ children }) {
      const [language, setLanguage] = useState("vi");
      const handleChange = (lang) => {
            setLanguage(lang);
      }
      return <languageContextProvider value="vi">{children}</languageContextProvider>;

}
