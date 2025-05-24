import { Flex, Loader, Text } from "@mantine/core";
import { FC } from "react";

interface SpinnerProps {
  size?: number;
  text?: string;
  color?: string;
}
const Spinner: FC<SpinnerProps> = ({ size, text, color }) => {
  return (
    <Flex mt={20} align="center">
      <Loader color={color} size={size} />{" "}
      <Text ml={20} size="sm" c="dimmed">
        {text}
      </Text>
    </Flex>
  );
};

export default Spinner;
