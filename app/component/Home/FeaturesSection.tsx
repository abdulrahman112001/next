"use client";

import {
  createStyles,
  Title,
  SimpleGrid,
  Text,
  Button,
  ThemeIcon,
  Grid,
  Col,
  rem,
} from "@mantine/core";
import {
  IconReceiptOff,
  IconFlame,
  IconCircleDotted,
  IconFileCode,
  IconPackage,
} from "@tabler/icons-react";
import { Tabs } from "@mantine/core";
import img from "../../../public/assets/cloud-icon.png";
import Image from "next/image";

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `calc(${theme.spacing.xl} * 2) ${theme.spacing.xl}`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(36),
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },
}));

const features = [
  {
    icon: IconReceiptOff,
    title: "Free and open source",
    description:
      "All packages are published under MIT license, you can use Mantine in any project",
  },
  {
    icon: IconFileCode,
    title: "TypeScript based",
    description:
      "Build type safe applications, all components and hooks export types",
  },
  {
    icon: IconReceiptOff,
    title: "Free and open source",
    description:
      "All packages are published under MIT license, you can use Mantine in any project",
  },
  {
    icon: IconFileCode,
    title: "TypeScript based",
    description:
      "Build type safe applications, all components and hooks export types",
  },
];

export function FeaturesSection() {
  const { classes } = useStyles();

  const items = features.map((feature) => (
    <div key={feature.title} className="p-3 m-2 shadow-sm">
      <div className="flex justify-between gap-2">
        <Text fz="lg" mt="sm" fw={500}>
          {feature.title}
        </Text>
        <ThemeIcon
          size={44}
          radius="md"
          // variant="gradient"
          // gradient={{ deg: 133, from: "blue", to: "cyan" }}
          className="bg-transparent"
        >
          {/* <feature.icon size={rem(26)} stroke={1.5} /> */}
          <Image src={img} alt="clud" />
        </ThemeIcon>
      </div>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div className={`${classes.wrapper} mt-20 container p-20 m-auto`}>
      <Grid gutter={80}>
        <div className="m-auto text-center">
        <h1 className="m-auto mt-5 text-3xl font-bold text-center">
          Save time and money
        </h1>
        <p className="text-gray-500">comfort and the best prices for your business and Events</p>
        </div>
        
        <Col span={12} md={12} className="p-4">
          <Tabs defaultValue="gallery" orientation="vertical">
            <Tabs.List className="w-1/4 text-xl font-bold border-r-0 text-neutral-950">
              <Tabs.Tab value="gallery" className="border-r-0 border-black ">
                <h5 className="flex items-center gap-2">
                  <IconPackage className="text-blue-600" />
                  Futures
                </h5>
                <p className="py-1 text-sm font-normal text-gray-500">
                  20+ input components
                </p>
              </Tabs.Tab>
              <Tabs.Tab value="messages" className="border-r-0 border-black">
                <h5 className="flex items-center gap-2">
                  <IconPackage className="text-blue-600" />
                  Futures
                </h5>
                <p className="py-1 text-sm font-normal text-gray-500">
                  20+ input components
                </p>
              </Tabs.Tab>
              <Tabs.Tab value="settings" className="border-r-0 border-black">
                <h5 className="flex items-center gap-2">
                  <IconPackage className="text-blue-600" />
                  Futures
                </h5>
                <p className="py-1 text-sm font-normal text-gray-500">
                  20+ input components
                </p>
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="gallery">
              <SimpleGrid
                cols={2}
                spacing={20}
                breakpoints={[{ maxWidth: "md", cols: 1 }]}
                className="px-20"
              >
                {items}
              </SimpleGrid>
            </Tabs.Panel>
            <Tabs.Panel value="messages">
              {" "}
              <SimpleGrid
                cols={2}
                spacing={20}
                breakpoints={[{ maxWidth: "md", cols: 1 }]}
                className="px-20"
              >
                {items}
              </SimpleGrid>
            </Tabs.Panel>
            <Tabs.Panel value="settings">
              {" "}
              <SimpleGrid
                cols={2}
                spacing={20}
                breakpoints={[{ maxWidth: "md", cols: 1 }]}
                className="px-20"
              >
                {items}
              </SimpleGrid>
            </Tabs.Panel>
          </Tabs>
        </Col>
      </Grid>
    </div>
  );
}
