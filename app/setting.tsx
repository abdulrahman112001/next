import { useState } from "react"
import i18n from "./i18n"
///
/////////// Types
///

/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const Settings = ({ title }:any) => {
  /////////// VARIABLES


  const[lang,setLang] = useState(i18n.language)
  ///

 
  ///
  return (
    <>
     <button  onClick={() => {
            if (lang == 'ar') {
                i18n.changeLanguage('en')
                setLang('en')
                document.body.setAttribute('dir', 'ltr')
                window.localStorage.setItem('dir','ltr')
            }
            else {
                i18n.changeLanguage('ar')
                setLang('ar')
                document.body.setAttribute('dir', 'rtl')
                window.localStorage.setItem('dir','rtl')

            }
        }}>{lang === 'ar' ? 'عربي' : 'english'}
        </button>
    

    </>
  )
}
