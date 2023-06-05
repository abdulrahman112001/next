"use client"
import {
  createStyles,
  Header,
  Menu,
  Group,
  Center,
  Burger,
  Container,
  rem,
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { IconChevronDown } from "@tabler/icons-react"
import { MantineLogo } from "@mantine/ds"
import Link from "next/link"

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.fn.variant({
      variant: "filled",
      color: theme.primaryColor,
    }).background,
    borderBottom: 0,
  },

  inner: {
    height: rem(56),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: theme.white,
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: "filled", color: theme.primaryColor })
          .background!,
        0.1
      ),
    },
  },

  linkLabel: {
    marginRight: rem(5),
  },
}))

interface HeaderSearchProps {
  links?: {
    link?: string
    label?: string
    links?: { link: string; label: string }[]
  }[]
}

export function Navbar({ links }: HeaderSearchProps) {
  const [opened, { toggle }] = useDisclosure(false)
  const { classes } = useStyles()

  const items = links?.map((link) => {
    const menuItems = link?.links?.map((item) => (
      <Menu.Item key={item?.link}>{item.label}</Menu.Item>
    ))


  })

  return (
    <Header height={56} className={classes.header} mb={120}>
      <Container>
        <div className={classes.inner}>
          <MantineLogo size={28} inverted />
          <Group spacing={20} className={classes.links}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact_us">Contact us </Link>
            <Link href="/news">News</Link>
          </Group>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
            color="#fff"
          />
        </div>
      </Container>
    </Header>
  )
}
