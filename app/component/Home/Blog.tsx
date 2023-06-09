"use client";

import React from "react";
import { Carousel } from "@mantine/carousel";
import { BadgeCard } from "../mucles/Card";
import blog1 from "../../../public/assets/blog1.png";
import blog2 from "../../../public/assets/blog3.png";
import blog3 from "../../../public/assets/thermprocess-Lxx1-logo.webp";

import { BlogCard } from "../mucles/BlogCard";

function Blog() {
  return (
    <div className="container p-10 my-0">
      <div className="col-span-1">
        <h1 className="text-3xl font-bold ">Blog</h1>
        <p className="w-1/2">
          Here we share news about the travel industry and life-hacks for
          professionals. Follow us, read us and enjoy!
        </p>
      </div>
      <div className="mt-4">
        <Carousel
          withIndicators
          // height={200}
          slideSize="22%"
          slideGap="md"
          loop
          align="start"
          slidesToScroll={5}
        >
          <Carousel.Slide>
            <BlogCard
              image={blog1.src}
              avatar={blog3.src}
              name="THERMPROCESS 2023"
              Date="10/5/2022"
              title="Messe Dusseldorf"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <BlogCard
              image={blog1.src}
              avatar={blog3.src}
              name="THERMPROCESS 2023"
              Date="10/5/2022"
              title="Messe Dusseldorf"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <BlogCard
              image={blog1.src}
              avatar={blog3.src}
              name="THERMPROCESS 2023"
              Date="10/5/2022"
              title="Messe Dusseldorf"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <BlogCard
              image={blog1.src}
              avatar={blog3.src}
              name="THERMPROCESS 2023"
              Date="10/5/2022"
              title="Messe Dusseldorf"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <BlogCard
              image={blog1.src}
              avatar={blog3.src}
              name="THERMPROCESS 2023"
              Date="10/5/2022"
              title="Messe Dusseldorf"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <BlogCard
              image={blog1.src}
              avatar={blog3.src}
              name="THERMPROCESS 2023"
              Date="10/5/2022"
              title="Messe Dusseldorf"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <BlogCard
              image={blog1.src}
              avatar={blog3.src}
              name="THERMPROCESS 2023"
              Date="10/5/2022"
              title="Messe Dusseldorf"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <BlogCard
              image={blog1.src}
              avatar={blog3.src}
              name="THERMPROCESS 2023"
              Date="10/5/2022"
              title="Messe Dusseldorf"
            />
          </Carousel.Slide>
        </Carousel>
      </div>
    </div>
  );
}

export default Blog;
