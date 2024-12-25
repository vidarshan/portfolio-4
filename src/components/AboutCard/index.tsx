import {
  ActionIcon,
  Anchor,
  Box,
  Button,
  Card,
  Flex,
  MantineThemeContext,
  Paper,
  Text,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import React from "react";
import {
  RiBriefcase4Fill,
  RiGithubFill,
  RiHandHeartFill,
  RiHome5Fill,
  RiLinkedinBoxFill,
  RiMessage3Fill,
  RiMoonFoggyFill,
  RiProjectorFill,
  RiStackOverflowFill,
  RiSunFoggyFill,
} from "react-icons/ri";
import { AboutCardContainer } from "./styles";

const AboutCard = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  console.log(colorScheme);

  const handleToggleTheme = () => {
    if (colorScheme === "dark") {
      setColorScheme("light");
    } else {
      setColorScheme("dark");
    }
  };

  return (
    <AboutCardContainer>
      <Card p={12} shadow="xl" radius="lg" withBorder>
        <Flex justify="space-between" align="center">
          <Box mb={10}>
            <Title order={1} w={300}>
              Vidarshan
            </Title>
            <Title order={3} c="indigo">
              Software Engineer
            </Title>
          </Box>
          <ActionIcon
            color={colorScheme === "dark" ? "indigo" : "orange"}
            variant="light"
            radius="xl"
            size="lg"
            onClick={() => handleToggleTheme()}
          >
            {colorScheme === "dark" ? <RiMoonFoggyFill /> : <RiSunFoggyFill />}
          </ActionIcon>
        </Flex>

        <Flex mt={20} mb={20} direction="column" gap={14}>
          <Anchor href="#about">
            <Button
              color="indigo"
              justify="start"
              variant="light"
              radius="xl"
              fullWidth
              leftSection={<RiHome5Fill />}
            >
              About
            </Button>
          </Anchor>
          <Anchor href="#work">
            <Button
              color="indigo"
              justify="start"
              variant="light"
              radius="xl"
              fullWidth
              leftSection={<RiBriefcase4Fill />}
            >
              Work
            </Button>
          </Anchor>
          <Anchor href="#projects">
            <Button
              color="indigo"
              justify="start"
              variant="light"
              radius="xl"
              fullWidth
              leftSection={<RiProjectorFill />}
            >
              Projects
            </Button>
          </Anchor>
          <Anchor href="#testimonials">
            <Button
              color="indigo"
              justify="start"
              variant="light"
              radius="xl"
              fullWidth
              leftSection={<RiHandHeartFill />}
            >
              Testimonials
            </Button>
          </Anchor>
        </Flex>
        <Flex mt={20} justify="center" gap={6}>
          <ActionIcon color="blue" variant="filled" radius="xl" size="lg">
            <RiLinkedinBoxFill />
          </ActionIcon>
          <ActionIcon color="black" variant="filled" radius="xl" size="lg">
            <RiGithubFill />
          </ActionIcon>
          <ActionIcon color="orange" variant="filled" radius="xl" size="lg">
            <RiStackOverflowFill />
          </ActionIcon>
          <ActionIcon color="green" variant="filled" radius="xl" size="lg">
            <RiMessage3Fill />
          </ActionIcon>
        </Flex>
      </Card>
    </AboutCardContainer>
  );
};

export default AboutCard;
