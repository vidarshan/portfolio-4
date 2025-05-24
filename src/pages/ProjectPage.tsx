import { useState } from "react";
import { ProjectPageContainer } from "./styles";
import {
  Center,
  Flex,
  Grid,
  SegmentedControl,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import { projects, projectsArchive } from "../data/projects";
import { RiArchiveDrawerFill, RiProjectorFill } from "react-icons/ri";
import CurrentProject from "../components/Cards/CurrentProject";
import PastProject from "../components/Cards/PastProject";

const ProjectPage = () => {
  const [value, setValue] = useState("projects");
  const { colorScheme } = useMantineColorScheme();

  return (
    <ProjectPageContainer id="projects">
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
                  <CurrentProject
                    image={project.image}
                    tags={project.tags}
                    colorScheme={colorScheme}
                    name={project.name}
                    repo={project.repo}
                    demo={project.demo}
                    description={project.description}
                    technologies={project.technologies}
                  />
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
                  <PastProject
                    image={project.image}
                    tags={project.tags}
                    colorScheme={colorScheme}
                    name={project.name}
                    repo={project.repo}
                    demo={project.demo}
                    description={project.description}
                    technologies={project.technologies}
                  />
                </Grid.Col>
              );
            })}
          </>
        )}
      </Grid>
    </ProjectPageContainer>
  );
};

export default ProjectPage;
