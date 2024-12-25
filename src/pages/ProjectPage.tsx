import React from "react";
import { ProjectPageContainer } from "./styles";
import { Card, Title } from "@mantine/core";

const ProjectPage = () => {
  return (
    <ProjectPageContainer>
      <Card p={12} shadow="xl" radius="lg">
        <Title order={1}>Project</Title>
      </Card>
    </ProjectPageContainer>
  );
};

export default ProjectPage;
