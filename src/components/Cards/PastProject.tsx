import {
  ActionIcon,
  Anchor,
  Badge,
  Box,
  Card,
  Divider,
  Flex,
  Group,
  Image,
  MantineColorScheme,
  Text,
} from "@mantine/core";
import { FC } from "react";
import {
  RiGithubFill,
  RiGlobalLine,
  RiLock2Fill,
  RiProhibited2Line,
} from "react-icons/ri";
import { TechnologyProps } from "./CurrentProject";

interface PastProjectProps {
  colorScheme: MantineColorScheme;
  name: string;
  repo: string;
  demo: string;
  image: string;
  description: string;
  technologies: TechnologyProps[];
  tags: string;
}

const PastProject: FC<PastProjectProps> = ({
  colorScheme,
  name,
  repo,
  demo,
  image,
  description,
  tags,
  technologies,
}) => {
  return (
    <Card h="100%" withBorder={colorScheme === "light"}>
      <Flex justify="space-between" align="center">
        <Box>
<<<<<<< HEAD
          <Text c="blue" size="md" fw={600}>
            {name}
          </Text>
          <Text c="dimmed" size="xs" tt="uppercase" fw={600}>
=======
          <Text c="blue" size="md" fw={700}>
            {name}
          </Text>
          <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
>>>>>>> c87d813 (Refresh history)
            {tags}
          </Text>
        </Box>
        <Box>
          {" "}
          {repo === "no-repo" ? (
            <ActionIcon mr={4} color="yellow" size="md" radius="xl">
              <RiLock2Fill />
            </ActionIcon>
          ) : (
            <Anchor target="_blank" underline="never" href={repo}>
              <ActionIcon color="dark" size="md" radius="xl" mr={4}>
                <RiGithubFill />
              </ActionIcon>{" "}
            </Anchor>
          )}
          {demo === "no-demo" ? (
            <ActionIcon color="grape" size="md" radius="xl">
              <RiProhibited2Line />
            </ActionIcon>
          ) : (
            <Anchor target="_blank" underline="never" href={demo}>
              <ActionIcon color="indigo" size="md" radius="xl">
                <RiGlobalLine />
              </ActionIcon>
            </Anchor>
          )}
        </Box>
      </Flex>
      <Image src={image} />
      <Text size="sm">{description}</Text>
      <Divider my="xs" label="Technologies" labelPosition="left" />
      <Group gap={6}>
        {technologies.map((tech) => {
          return (
            <Badge size="xs" key={tech.id} color={tech.color}>
              {tech.name}
            </Badge>
          );
        })}
      </Group>
    </Card>
  );
};

export default PastProject;
