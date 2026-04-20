import React from "react";
import {
  AspectRatio,
  Card,
  Container,
  Text,
  Button,
  SimpleGrid,
} from "@mantine/core";
import classes from "./ArticlesCardsGrid.module.css";
import { FaGlobe } from "react-icons/fa";
const mockdata = [
  {
    title: "Wordtsy",
    link: "https://www.wordtsy.com",
    image: "./wordtsy.png",
    description: "Wordtsy is a modern web application designed to help users learn foreign language vocabulary through short-form video content.",
  },
  {
    title: "Intelligent Instal",
    link: "https://intelligent-instal.vercel.app",
    image: "./HomePage.png",
    description:
      "A website for an installation company, created to clearly present its services and highlight their innovative and energy-efficient nature.",
  },
];
function moveWebsite(url) {
  window.open(url, "_blank");
}
export default function Projects() {
  const cards = mockdata.map((article) => (
    <Card
      key={article.title}
      p="md"
      radius="md"
      className={classes.card}
    >
      <img src={article.image} />

      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
      <Text className={classes.title} mt={2}>
        {article.description}
      </Text>
      <Button
        className={classes.websiteButton}
        onClick={() => moveWebsite(article.link)}
      >
        Website &nbsp;
        <FaGlobe />
      </Button>
    </Card>
  ));
  return (
    <Container py="xl">
      <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards} </SimpleGrid>
    </Container>
  );
}
