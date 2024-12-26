import { RiArrowRightUpLine } from "react-icons/ri";
import { education } from "../data/education";
import { technicalCompetencies, technologies } from "../data/competencies";
import { AboutPageContainer } from "./styles";
import {
  Badge,
  Card,
  Divider,
  Group,
  HoverCard,
  Text,
  Title,
} from "@mantine/core";

const AboutPage = () => {
  return (
    <AboutPageContainer id="about">
      <Card p={12} shadow="xs" radius="lg" withBorder>
        <Title c='lime' mb={10} order={1}>
          About Me
        </Title>
        <Text size="sm" fw={500} mb={4}>
          Passionate about crafting efficient digital products that elevate
          daily workflows. With 4+ years as a software engineer, I deliver
          precise, high-quality solutions, aligning with stakeholders’ needs.
          Driven by innovation, I stay ahead of tech trends, continuously honing
          skills to tackle challenges and create impactful software.
        </Text>
        <Divider my="xs" label="Academic Background" labelPosition="left" />
        {education.map((edu) => {
          return (
            <Card radius="lg" key={edu.id} mb={8} withBorder>
              <Text c="lime" size="md" fw={600}>
                {edu.title} @ {edu.institute}, {edu.location}
              </Text>
              <Text tt='uppercase' fw={600} c="dimmed" size="xs">
                {edu.field}
              </Text>
              <Text fw={500} my={10} size="xs">
                {edu.description}
              </Text>
              <Text mt={4} fw={600} size="xs">
                {edu.dates} · {edu.status}
              </Text>
            </Card>
          );
        })}
        <Divider my="xs" label="Tech Stack" labelPosition="left" />
        <Group gap="sm">
          {technicalCompetencies.map((tech) => {
            return (
              <Badge variant="filled" color={tech.color} key={tech.id}>
                {tech.name}
              </Badge>
            );
          })}
          <HoverCard width={280} shadow="xl" withArrow>
            <HoverCard.Target>
              <Badge variant="default">
                Show Complete Stack
                <RiArrowRightUpLine />
              </Badge>
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <Group justify="start" gap={8}>
                {technologies.map((tech) => {
                  return (
                    <Badge size="xs" key={tech.id} color={tech.color}>
                      {tech.name}
                    </Badge>
                  );
                })}
              </Group>
            </HoverCard.Dropdown>
          </HoverCard>
        </Group>
      </Card>
    </AboutPageContainer>
  );
};

export default AboutPage;
