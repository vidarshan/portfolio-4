import React, { useState } from "react";
import { ProjectPageContainer } from "./styles";
import {
  ActionIcon,
  Badge,
  Box,
  Card,
  Center,
  Divider,
  Flex,
  Grid,
  Group,
  Image,
  SegmentedControl,
  Text,
  Title,
} from "@mantine/core";
import { projects, projectsArchive } from "../data/projects";
import {
  RiArchiveDrawerFill,
  RiGithubFill,
  RiGlobalLine,
  RiProjectorFill,
} from "react-icons/ri";

const ProjectPage = () => {
  const [value, setValue] = useState("projects");

  return (
    <ProjectPageContainer id="projects">
      <Card p={12} shadow="xl" radius="lg">
        <Flex align="center" justify="space-between">
          <Title order={1}>Projects</Title>
          <SegmentedControl
            color="indigo"
            size="xs"
            radius="xl"
            value={value}
            onChange={setValue}
            data={[
              {
                label: (
                  <Center style={{ gap: 10 }}>
                    <RiProjectorFill />
                    <span>Projects</span>
                  </Center>
                ),
                value: "projects",
              },
              {
                label: (
                  <Center style={{ gap: 10 }}>
                    <RiArchiveDrawerFill />
                    <span>Archive</span>
                  </Center>
                ),
                value: "archive",
              },
            ]}
          />
        </Flex>

        <Grid>
          {value === "projects" ? (
            <>
              {" "}
              {projects.map((project) => {
                return (
                  <Grid.Col span={4}>
                    <Card h="100%">
                      <Flex justify="space-between" align="center">
                        <Box>
                          <Text size="md" fw={600}>
                            {project.name}
                          </Text>
                          <Text c="dimmed" size="xs" tt="uppercase" fw={600}>
                            {project.tags}
                          </Text>
                        </Box>
                        <Box>
                          <ActionIcon color="gray" size="sm" radius="xl" mr={4}>
                            <RiGithubFill />
                          </ActionIcon>
                          <ActionIcon color="indigo" size="sm" radius="xl">
                            <RiGlobalLine />
                          </ActionIcon>
                        </Box>
                      </Flex>
                      <Image src={project.image} />
                      <Text size="sm">{project.description}</Text>
                      <Divider
                        my="xs"
                        label="Technologies"
                        labelPosition="left"
                      />
                      <Group gap={6}>
                        {project.technologies.map((tech) => {
                          return (
                            <Badge size="xs" key={tech.id} color={tech.color}>
                              {tech.name}
                            </Badge>
                          );
                        })}
                      </Group>
                    </Card>
                  </Grid.Col>
                );
              })}
            </>
          ) : (
            <>
              {" "}
              {projectsArchive.map((project) => {
                return (
                  <Grid.Col span={4}>
                    <Card h="100%">
                      <Flex justify="space-between" align="center">
                        <Box>
                          <Text size="md" fw={600}>
                            {project.name}
                          </Text>
                          <Text c="dimmed" size="xs" tt="uppercase" fw={600}>
                            {project.tags}
                          </Text>
                        </Box>
                        <Box>
                          <ActionIcon color="gray" size="sm" radius="xl" mr={4}>
                            <RiGithubFill />
                          </ActionIcon>
                          <ActionIcon color="indigo" size="sm" radius="xl">
                            <RiGlobalLine />
                          </ActionIcon>
                        </Box>
                      </Flex>
                      <Image src={project.image} />
                      <Text size="sm">{project.description}</Text>
                      <Divider
                        my="xs"
                        label="Technologies"
                        labelPosition="left"
                      />
                      <Group gap={6}>
                        {project.technologies.map((tech) => {
                          return (
                            <Badge size="xs" key={tech.id} color={tech.color}>
                              {tech.name}
                            </Badge>
                          );
                        })}
                      </Group>
                    </Card>
                  </Grid.Col>
                );
              })}
            </>
          )}
        </Grid>
      </Card>
    </ProjectPageContainer>
  );
};

export default ProjectPage;
