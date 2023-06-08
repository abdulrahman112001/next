"use client";
import {
  Box,
  Burger,
  Button,
  Center,
  Checkbox,
  Collapse,
  Divider,
  Drawer,
  Group,
  Header,
  Modal,
  ScrollArea,
  Text,
  TextInput,
  ThemeIcon,
  UnstyledButton,
  PasswordInput,
  createStyles,
  rem,
} from "@mantine/core";
import { useForm } from "@mantine/form";

import { useDisclosure } from "@mantine/hooks";
// import { FcGoogle } from 'react-icons/fc';

import {
  IconBook,
  IconChartPie3,
  IconChevronDown,
  IconCode,
  IconCoin,
  IconFingerprint,
  IconMail,
  IconNotification,
} from "@tabler/icons-react";
import Link from "next/link";
import { Settings } from "../setting";
import Logo from "./atoms/Logo";
import { t } from "i18next";
import GoogleIcons from "./icons/GoogleIcons";
import { IconLock } from "@tabler/icons-react";
import Image from "next/image";
import { MantineLogo } from "@mantine/ds";
import AsideBar from "./AsideBar";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: rem(42),
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

const mockdata = [
  {
    icon: IconCode,
    title: "Open source",
    description: "This Pokémon’s cry is very loud and distracting",
  },
  {
    icon: IconCoin,
    title: "Free for everyone",
    description: "The fluid of Smeargle’s tail secretions changes",
  },
  {
    icon: IconBook,
    title: "Documentation",
    description: "Yanma is capable of seeing 360 degrees without",
  },
  {
    icon: IconFingerprint,
    title: "Security",
    description: "The shell’s rounded shape and the grooves on its.",
  },
  {
    icon: IconChartPie3,
    title: "Analytics",
    description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    icon: IconNotification,
    title: "Notifications",
    description: "Combusken battles with the intensely hot flames it spews",
  },
];

export function Navbar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

    
  const [opened, { open, close }] = useDisclosure(false);

  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  const [openedBar, { toggle }] = useDisclosure(false);

  
  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group noWrap align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={rem(22)} color={theme.fn.primaryColor()} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" color="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  const form = useForm({
    initialValues: {
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value: string) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email",
    },
  });

  return (
    <Box pb={120}>
      <Header height={60} px="md" className="flex justify-between">



        
        <Group sx={{ height: "100%" }}>
        <Burger opened={openedBar} onClick={toggle} size="sm" />

          <Logo />
          <Group
            sx={{ height: "100%" }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <Link href="#" className={classes.link}>
              Search
            </Link>
            <Link href="#" className={classes.link}>
              For Business
            </Link>
            <Link href="/about" className={classes.link}>
              About Us
            </Link>
          </Group>
        </Group>
        <Group>
          <Group className={classes.hiddenMobile}>
            <Settings />

            {/* <Button variant="default">Log in</Button> */}
            <Button onClick={open} className="bg-red-500">
              Sign in
            </Button>
          </Group>
          <Modal
            opened={opened}
            onClose={close}
            title={`${t("Sign in")}`}
            size={"lg"}
          >
            <div className="grid grid-cols-2">
              <div className="col-span-1 p-2">
                <div className="p-1 border rounded ">
                  <a href="" className="flex items-center">
                    <GoogleIcons />
                    <p className="mx-3 text-sm">{t("sign in with google")}</p>
                  </a>
                </div>
                <div className="p-1 mt-4 border rounded ">
                  <a href="" className="flex items-center">
                    <GoogleIcons />
                    <p className="mx-3 text-sm">{t("sign in with google")}</p>
                  </a>
                </div>
                <div className="p-1 mt-4 border rounded ">
                  <a href="" className="flex items-center">
                    <GoogleIcons />
                    <p className="mx-3 text-sm">{t("sign in with google")}</p>
                  </a>
                </div>
                <p className="m-auto text-xs text-center mt-7">
                  or sign in with email
                </p>

                <form
                  className="mt-5"
                  onSubmit={form.onSubmit((values: any) => console.log(values))}
                >
                  <TextInput
                    withAsterisk
                    label="Email Address"
                    placeholder="your@email.com"
                    {...form.getInputProps("email")}
                    icon={<IconMail size="1rem" />}
                  />

                  <PasswordInput
                    placeholder="Password"
                    label="Password"
                    icon={<IconLock size="1rem" />}
                    withAsterisk
                    className="mt-4"
                  />

                  <Checkbox
                    mt="md"
                    label="I agree to sell my privacy"
                    {...form.getInputProps("termsOfService", {
                      type: "checkbox",
                    })}
                  />

                  <Group position="center" mt="md">
                    <Button type="submit" className=" bg-blue-600 w-[100%]">
                      Sign in
                    </Button>

                    <Button className="text-black hover:bg-inherit">
                      Forgot your password?
                    </Button>
                    <p className="inline-block text-xs ">
                      Don't have an account?
                      <Button
                        onClick={open}
                        className="text-xs text-blue-600 text- hover:bg-inherit"
                      >
                        Create Account
                      </Button>
                    </p>
                  </Group>
                </form>
              </div>

              <div className="col-span-1 p-2">
                <Image
                  src="https://www.priceline.com/global-web-components/public/images/SignIn.svg"
                  width="100"
                  height="100"
                  alt="partner"
                  className="!w-[100%]"
                />
              </div>
            </div>
          </Modal>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <a href="#" className={classes.link}>
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>

          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <Group position="center" grow pb="xl" px="md">
            <Button>Sign in</Button>
            {/* <Button variant="default">Log in</Button> */}
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
