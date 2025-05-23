import { HomePageContainer } from "./styles";
import "../App.css";
import { Anchor, Box, Button, Flex, Title, Tooltip } from "@mantine/core";
import {
  RiArrowRightUpLine,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMailOpenFill,
} from "react-icons/ri";

const HomePage = () => {
  const email = import.meta.env.VITE_EMAIL_ADDRESS;
  const linkedinURL = import.meta.env.VITE_LINKEDIN_ADDRESS;
  const githubURL = import.meta.env.VITE_GITHUB_ADDRESS;

  return (
    <HomePageContainer className="home" id="home">
      <Flex h="calc(100vh)" direction="column" justify="space-between">
        <Box></Box>
        <Box>
          <Title>Vidarshan</Title>
          <Title order={2} c="blue">
            Software Engineer
          </Title>
          <Title order={3} c="gray÷">
            Creating things that make a change.
          </Title>
          <Flex mt={8} gap={6}>
            <Tooltip label="View Linkedin Profile" withArrow>
              <Anchor href={linkedinURL} target="_blank">
                <Button
                  color="blue"
                  size="xs"
                  radius="xl"
                  leftSection={<RiLinkedinBoxFill />}
                  rightSection={<RiArrowRightUpLine />}
                >
                  Linkedin
                </Button>
              </Anchor>
            </Tooltip>
            <Tooltip label="View Github Profile" withArrow>
              <Anchor href={githubURL} target="_blank">
                <Button
                  color="dark"
                  size="xs"
                  radius="xl"
                  leftSection={<RiGithubFill />}
                  rightSection={<RiArrowRightUpLine />}
                >
                  Github
                </Button>
              </Anchor>
            </Tooltip>
            <Tooltip label="Send Email" withArrow>
              <Anchor href={"mailto:" + email} target="_blank">
                <Button
                  color="red"
                  size="xs"
                  radius="xl"
                  leftSection={<RiMailOpenFill />}
                  rightSection={<RiArrowRightUpLine />}
                >
                  Mail
                </Button>
              </Anchor>
            </Tooltip>
          </Flex>
        </Box>
        <Flex justify="center" align="center"></Flex>
      </Flex>
    </HomePageContainer>
  );
};

export default HomePage;
