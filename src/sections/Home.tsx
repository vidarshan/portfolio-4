import { Flex, Title } from "@mantine/core";
import React, { useRef } from "react";

const Home: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subTitleRef = useRef<HTMLHeadingElement>(null);

  return (
    <Flex direction="column" h="100%" align="center" justify="center">
      <Title ref={titleRef} ta="center" order={1}>
        Vidarshan
      </Title>
      <Title ref={subTitleRef}>Software Developer</Title>
    </Flex>
  );
};

export default Home;
