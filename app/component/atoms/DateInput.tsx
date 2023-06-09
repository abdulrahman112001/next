"use client";
import { useState } from "react";
import { DatePickerInput } from "@mantine/dates";
import { t } from "i18next";

function DateInputComp({ placeholder }: any) {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);

  return (
    <div>
      <DatePickerInput
        type="range"
        // label="Pick dates range"
        placeholder={placeholder}
        value={value}
        onChange={setValue}
        mx="auto"
        maw={400}
        clearable
      />
    </div>
  );
}

export default DateInputComp;
