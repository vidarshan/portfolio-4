import { HomePageContainer } from "./styles";
import { Anchor, Button, Flex, Title } from "@mantine/core";
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
      <Flex h="calc(100vh - 3.6rem)" direction="column" justify="center">
        <Title>Vidarshan</Title>
        <Title order={2} c="lime">
          Software Engineer
        </Title>
        <Title order={3} c="gray÷">
          Creating things that make a change.
        </Title>
        <Flex mt={8} gap={6}>
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
        </Flex>
      </Flex>
    </HomePageContainer>
  );
};

export default HomePage;
