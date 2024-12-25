import { NavigationBarContainer } from "./styles";
import { ActionIcon } from "@mantine/core";
import {
  RiBriefcase4Fill,
  RiGraduationCapFill,
  RiHome5Fill,
  RiMoonFoggyFill,
  RiProjectorFill,
  RiSunFill,
} from "react-icons/ri";

const NavigationBar = () => {
  return (
    <NavigationBarContainer>
      <ActionIcon mr={10} radius="xl" variant="light" size="lg">
        <RiHome5Fill />
      </ActionIcon>
      <ActionIcon mr={10} radius="xl" variant="light" size="lg">
        <RiBriefcase4Fill />
      </ActionIcon>
      <ActionIcon mr={10} radius="xl" variant="light" size="lg">
        <RiProjectorFill />
      </ActionIcon>
      <ActionIcon mr={10} radius="xl" variant="light" size="lg">
        <RiSunFill />
      </ActionIcon>
      <ActionIcon mr={10} radius="xl" variant="light" size="lg">
        <RiMoonFoggyFill />
      </ActionIcon>
      <ActionIcon mr={10} radius="xl" variant="light" size="lg">
        <RiGraduationCapFill />
      </ActionIcon>
    </NavigationBarContainer>
  );
};

export default NavigationBar;
