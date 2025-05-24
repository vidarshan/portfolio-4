import { FooterContainer } from "./styles";
import { Anchor, Box, Text } from "@mantine/core";

const Footer = () => {
  const year = new Date().getFullYear().toString();

  const repoAddress = import.meta.env.VITE_REPO_ADDRESS;

  return (
    <FooterContainer>
      <Box mt={10} p={10}>
        <Text ta="center">
          <Anchor
            ta="center"
            size="xs"
            href={repoAddress}
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
