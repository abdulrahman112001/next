import i18n from "i18next"
import { initReactI18next } from "react-i18next"


i18n
    .use(initReactI18next)
    .init({
        load: "languageOnly", // will prevent backend from loading en-US for example

        detection: {
            // order: ["localStorage",
            // "htmlTag", "cookie", "path" 
            // ],
            caches: ["localStorage"], // cache user language on
        },
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
        initImmediate: false,
    })
export default i18n