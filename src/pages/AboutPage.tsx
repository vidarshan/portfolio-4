import { RiArrowRightUpLine } from "react-icons/ri";
import { education } from "../data/education";
import { technicalCompetencies } from "../data/competencies";
import { AboutPageContainer } from "./styles";
import {
  Badge,
  Card,
  Divider,
  Group,
  Text,
  Title,
} from "@mantine/core";

const AboutPage = () => {
  return (
    <AboutPageContainer id="about">
      <Card p={12} shadow="xl" radius="lg" >
        <Title order={1}>About Me</Title>
        <Text>
          Passionate about crafting efficient digital products that elevate
          daily workflows. With 4+ years as a software engineer, I deliver
          precise, high-quality solutions, aligning with stakeholders’ needs.
          Driven by innovation, I stay ahead of tech trends, continuously honing
          skills to tackle challenges and create impactful software.
        </Text>
        <Divider my="xs" label="Academic Background" labelPosition="left" />
        {education.map((edu) => {
          return (
            <Card mt={10} key={edu.id} mb={4}>
              <Text fw={600} size="sm">
                {edu.title} @ {edu.institute}, {edu.location}
              </Text>
              <Text fw={600} c="dimmed" size="sm">
                {edu.field}
              </Text>
              <Text mt={4} size="xs">
                {edu.description}
              </Text>
              <Text mt={4} size="xs">
                {edu.dates} · {edu.status}
              </Text>
            </Card>
          );
        })}
        <Divider my="xs" label="Tech Stack" labelPosition="left" />
        <Group gap="sm">
          {technicalCompetencies.map((tech) => {
            return (
              <Badge variant="light" color={tech.color} key={tech.id}>
                {tech.name}
              </Badge>
            );
          })}
           <Badge variant="default" size="md" rightSection={<RiArrowRightUpLine />}>
            Open Detailed Stack
          </Badge>
        </Group>
      </Card>
    </AboutPageContainer>
  );
};

export default AboutPage;
