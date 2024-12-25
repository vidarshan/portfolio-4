import React from "react";
import { FooterContainer } from "./styles";
import { Anchor, Box, Text } from "@mantine/core";
import { repoLink } from "../../data/misc";

const Footer = () => {
  const year = new Date().getFullYear().toString();
  console.log("year", year);
  return (
    <FooterContainer>
      <Box mt={10} p={10}>
        <Text ta="center" c="dimmed" size="xs" fw={700}>
          {year} &copy; Vidarshan | Made with React x Mantine
        </Text>
        <Text ta='center'>
          <Anchor
            ta="center"
            size="xs"
            href={repoLink}
            fw={700}
            target="_blank"
          >
            View Repository on Github
          </Anchor>
        </Text>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
