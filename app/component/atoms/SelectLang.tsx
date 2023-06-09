"use client";

import { useState } from "react";
import {
  createStyles,
  UnstyledButton,
  Menu,
  Image,
  Group,
  rem,
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import i18n from "@/app/i18n";
import images from "./../../../public/assets/english.png";

const data = [{ label: "English" , image:images }, { label: "Arabic" }];

const useStyles = createStyles((theme, { opened }: { opened: boolean }) => ({
  control: {
    width: rem(200),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[2]
    }`,
    transition: "background-color 150ms ease",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[opened ? 5 : 6]
        : opened
        ? theme.colors.gray[0]
        : theme.white,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },

  label: {
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,
  },

  icon: {
    transition: "transform 150ms ease",
    transform: opened ? "rotate(180deg)" : "rotate(0deg)",
  },
}));

export function SelectLang() {
  const [lang, setLang] = useState(i18n.language);
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles({ opened });
  const [selected, setSelected] = useState(data[0]);
  const items = data.map((item) => (
    <Menu.Item
        icon={<Image src="https://ui.mantine.dev/_next/static/media/english.dcb5bb2b.png" width={18} height={18} />}
      onClick={() => {
        if (lang == "ar") {
          i18n.changeLanguage("en");
          setLang("en");
          document.body.setAttribute("dir", "ltr");
          window.localStorage.setItem("dir", "ltr");
          setSelected(item);
        } else {
          i18n.changeLanguage("ar");
          setLang("ar");
          document.body.setAttribute("dir", "rtl");
          window.localStorage.setItem("dir", "rtl");
          setSelected(item);
        }
      }}
    >
      {item.label}
    </Menu.Item>
  ));
  ("setSelected(item)");
  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton className={classes.control}>
          <Group spacing="xs">
            <Image src="https://ui.mantine.dev/_next/static/media/english.dcb5bb2b.png" width={22} height={22} />
            <span className={classes.label}>{selected.label}</span>
          </Group>
          <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
}
