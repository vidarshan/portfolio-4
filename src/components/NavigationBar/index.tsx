import {
  ActionIcon,
  Anchor,
  Flex,
  Paper,
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
            <Anchor href="#home">
              <ActionIcon
                color="lime"
                mr={12}
                radius="xl"
                variant="filled"
                size="lg"
              >
                <RiHome5Fill />
              </ActionIcon>
            </Anchor>
            <Anchor href="#about">
              <ActionIcon
                color="lime"
                mr={12}
                radius="xl"
                variant="filled"
                size="lg"
              >
                <RiAliensFill />
              </ActionIcon>
            </Anchor>
            <Anchor href="#work">
              <ActionIcon
                color="lime"
                mr={12}
                radius="xl"
                variant="filled"
                size="lg"
              >
                <RiBriefcase4Fill />
              </ActionIcon>
            </Anchor>
            <Anchor href="#projects">
              <ActionIcon
                color="lime"
                mr={12}
                radius="xl"
                variant="filled"
                size="lg"
              >
                <RiProjectorFill />
              </ActionIcon>
            </Anchor>
            <Anchor href="#testimonials">
              <ActionIcon
                color="lime"
                mr={12}
                radius="xl"
                variant="filled"
                size="lg"
              >
                <RiHandHeartFill />
              </ActionIcon>
            </Anchor>
            <ActionIcon
              color={colorScheme !== "dark" ? "indigo" : "orange"}
              variant="filled"
              radius="xl"
              size="lg"
              onClick={() => handleToggleTheme()}
            >
              {colorScheme !== "dark" ? <RiMoonFill /> : <RiSunFill />}
            </ActionIcon>
          </Flex>
        </Paper>
      </Flex>
    </NavigationBarContainer>
  );
};

export default NavigationBar;
