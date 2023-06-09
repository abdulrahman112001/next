import { useState } from "react";
import i18n from "./i18n";
import { SelectLang } from "./component/atoms/SelectLang";
///
/////////// Types
///

/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const Settings = ({ title }: any) => {
  /////////// VARIABLES

  const [lang, setLang] = useState(i18n.language);
  ///

  ///
  return (
    <>
      <SelectLang />
    </>
  );
};
