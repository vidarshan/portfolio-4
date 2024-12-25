import {
  ActionIcon,
  Anchor,
  Box,
  Button,
  Card,
  Flex,
  Text,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import {
  RiBriefcase4Fill,
  RiGithubFill,
  RiHandHeartFill,
  RiHome5Fill,
  RiLinkedinBoxFill,
  RiMailOpenFill,
  RiMoonFill,
  RiProjectorFill,
  RiSunFill,
} from "react-icons/ri";
import { AboutCardContainer } from "./styles";

const AboutCard = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const email = import.meta.env.VITE_EMAIL_ADDRESS; // For Vite
  const linkedinURL = import.meta.env.VITE_LINKEDIN_ADDRESS;
  const githubURL = import.meta.env.VITE_GITHUB_ADDRESS;
  console.log(linkedinURL);
  const handleToggleTheme = () => {
    if (colorScheme === "dark") {
      setColorScheme("light");
    } else {
      setColorScheme("dark");
    }
  };

  return (
    <AboutCardContainer>
      <Card w={400} p={12} shadow="xs" radius="lg" withBorder>
        <Flex justify="space-between" align="center">
          <Box mb={0} pb={0}>
            <Title order={1} w={300}>
              Vidarshan
            </Title>
            <Title order={4} c="indigo">
              Software Engineer
            </Title>
          </Box>
          <ActionIcon
            color={colorScheme === "dark" ? "indigo" : "orange"}
            variant="filled"
            radius="xl"
            size="lg"
            onClick={() => handleToggleTheme()}
          >
            {colorScheme === "dark" ? <RiMoonFill /> : <RiSunFill />}
          </ActionIcon>
        </Flex>
        <Text size="sm" fw={600}>
          Crafting code into reality.
        </Text>
        <Flex mt={30} mb={20} direction="column" gap={14}>
          <Anchor href="#about">
            <Button
              color="indigo"
              justify="start"
              variant="filled"
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
              variant="filled"
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
              variant="filled"
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
              variant="filled"
              radius="xl"
              fullWidth
              leftSection={<RiHandHeartFill />}
            >
              Testimonials
            </Button>
          </Anchor>
        </Flex>
        <Flex mt={20} justify="center" gap={6}>
          <Anchor href={linkedinURL} target="_blank">
            <Button
              color="blue"
              size="xs"
              radius="xl"
              leftSection={<RiLinkedinBoxFill />}
            >
              Linkedin
            </Button>
          </Anchor>
          <Anchor href={githubURL} target="_blank">
            <Button
              color="dark"
              size="xs"
              radius="xl"
              leftSection={<RiGithubFill />}
            >
              Github
            </Button>
          </Anchor>
          <Anchor href={"mailto:" + email} target="_blank">
            <Button
              color="red"
              size="xs"
              radius="xl"
              leftSection={<RiMailOpenFill />}
            >
              Mail
            </Button>
          </Anchor>
        </Flex>
      </Card>
    </AboutCardContainer>
  );
};

export default AboutCard;
