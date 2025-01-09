import { useState } from "react";
import { ProjectPageContainer } from "./styles";
import {
  ActionIcon,
  Anchor,
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
  RiLock2Fill,
  RiProhibited2Line,
  RiProjectorFill,
} from "react-icons/ri";

const ProjectPage = () => {
  const [value, setValue] = useState("projects");

  return (
    <ProjectPageContainer id="projects">
      <Card p={12} shadow="xs" radius="lg" withBorder>
        <Flex align="center" justify="space-between">
          <Title c="blue" mb={10} order={1}>
            Projects
          </Title>
          <SegmentedControl
            color="blue"
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
                  <Grid.Col
                    key={project.id}
                    span={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4 }}
                  >
                    <Card shadow="xs" h="100%" withBorder>
                      <Flex justify="space-between" align="center">
                        <Box>
                          <Text c="blue" size="md" fw={600}>
                            {project.name}
                          </Text>
                          <Text c="dimmed" size="xs" tt="uppercase" fw={600}>
                            {project.tags}
                          </Text>
                        </Box>
                        <Box>
                          {" "}
                          {project.repo === "no-repo" ? (
                            <ActionIcon
                              mr={4}
                              color="yellow"
                              size="md"
                              radius="xl"
                            >
                              <RiLock2Fill />
                            </ActionIcon>
                          ) : (
                            <Anchor
                              target="_blank"
                              underline="never"
                              href={project.repo}
                            >
                              <ActionIcon
                                color="dark"
                                size="md"
                                radius="xl"
                                mr={4}
                              >
                                <RiGithubFill />
                              </ActionIcon>{" "}
                            </Anchor>
                          )}
                          <Anchor
                            target="_blank"
                            underline="never"
                            href={project.demo}
                          >
                            <ActionIcon color="blue" size="md" radius="xl">
                              <RiGlobalLine />
                            </ActionIcon>
                          </Anchor>
                        </Box>
                      </Flex>
                      <Image src={project.image} />
                      <Text fw={500} size="xs">
                        {project.description}
                      </Text>
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
                  <Grid.Col span={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4 }}>
                    <Card h="100%" withBorder>
                      <Flex justify="space-between" align="center">
                        <Box>
                          <Text c="blue" size="md" fw={600}>
                            {project.name}
                          </Text>
                          <Text c="dimmed" size="xs" tt="uppercase" fw={600}>
                            {project.tags}
                          </Text>
                        </Box>
                        <Box>
                          {" "}
                          {project.repo === "no-repo" ? (
                            <ActionIcon
                              mr={4}
                              color="yellow"
                              size="md"
                              radius="xl"
                            >
                              <RiLock2Fill />
                            </ActionIcon>
                          ) : (
                            <Anchor
                              target="_blank"
                              underline="never"
                              href={project.repo}
                            >
                              <ActionIcon
                                color="dark"
                                size="md"
                                radius="xl"
                                mr={4}
                              >
                                <RiGithubFill />
                              </ActionIcon>{" "}
                            </Anchor>
                          )}
                          {project.demo === "no-demo" ? (
                            <ActionIcon color="grape" size="md" radius="xl">
                              <RiProhibited2Line />
                            </ActionIcon>
                          ) : (
                            <Anchor
                              target="_blank"
                              underline="never"
                              href={project.demo}
                            >
                              <ActionIcon color="indigo" size="md" radius="xl">
                                <RiGlobalLine />
                              </ActionIcon>
                            </Anchor>
                          )}
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
