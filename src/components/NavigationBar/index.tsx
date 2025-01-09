import {
  ActionIcon,
  Anchor,
  Flex,
  Paper,
  Tooltip,
  useMantineColorScheme,
} from "@mantine/core";
import {
  RiAliensFill,
  RiBriefcase4Fill,
  RiHandHeartFill,
  RiHome5Fill,
  RiMoonFill,
  RiProjectorFill,
  RiSunFill,
} from "react-icons/ri";
import { NavigationBarContainer } from "./styles";

const NavigationBar = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const handleToggleTheme = () => {
    if (colorScheme === "dark") {
      setColorScheme("light");
    } else {
      setColorScheme("dark");
    }
  };

  return (
    <NavigationBarContainer>
      <Flex h="100%" direction="row" justify="center" align="center">
        <Paper ml={10} p={4} w="fit-content" radius="xl" withBorder>
          <Flex direction="row">
            <Tooltip label="Home" withArrow>
              <Anchor href="#home">
                <ActionIcon
                  color="blue"
                  mr={12}
                  radius="xl"
                  variant="filled"
                  size="lg"
                >
                  <RiHome5Fill />
                </ActionIcon>
              </Anchor>
            </Tooltip>
            <Tooltip label="About" withArrow>
              <Anchor href="#about">
                <ActionIcon
                  color="blue"
                  mr={12}
                  radius="xl"
                  variant="filled"
                  size="lg"
                >
                  <RiAliensFill />
                </ActionIcon>
              </Anchor>
            </Tooltip>
            <Tooltip label="Work" withArrow>
              <Anchor href="#work">
                <ActionIcon
                  color="blue"
                  mr={12}
                  radius="xl"
                  variant="filled"
                  size="lg"
                >
                  <RiBriefcase4Fill />
                </ActionIcon>
              </Anchor>
            </Tooltip>
            <Tooltip label="Projects" withArrow>
              <Anchor href="#projects">
                <ActionIcon
                  color="blue"
                  mr={12}
                  radius="xl"
                  variant="filled"
                  size="lg"
                >
                  <RiProjectorFill />
                </ActionIcon>
              </Anchor>
            </Tooltip>
            <Tooltip label="Testimonials" withArrow>
              <Anchor href="#testimonials">
                <ActionIcon
                  color="blue"
                  mr={12}
                  radius="xl"
                  variant="filled"
                  size="lg"
                >
                  <RiHandHeartFill />
                </ActionIcon>
              </Anchor>
            </Tooltip>
            <Tooltip label="Switch Theme" withArrow>
              <ActionIcon
                color={colorScheme !== "dark" ? "indigo" : "orange"}
                variant="filled"
                radius="xl"
                size="lg"
                onClick={() => handleToggleTheme()}
              >
                {colorScheme !== "dark" ? <RiMoonFill /> : <RiSunFill />}
              </ActionIcon>
            </Tooltip>
          </Flex>
        </Paper>
      </Flex>
    </NavigationBarContainer>
  );
};

export default NavigationBar;
