import { WorkPageContainer } from "./styles";
import {
  Anchor,
  Badge,
  Button,
  Card,
  Flex,
  Group,
  Text,
  Title,
} from "@mantine/core";
import { work } from "../data/work";
import { RiArrowRightUpLine, RiDownloadLine } from "react-icons/ri";

const WorkPage = () => {
  return (
    <WorkPageContainer id="work">
      <Card p={12} shadow="xs" radius="lg" withBorder>
        <Flex justify="space-between" align="center">
          <Title c="lime" order={1}>
            Work
          </Title>
          <Anchor href="/files/resume.pdf" download="vidarshan_resume.pdf">
            <Button
              color="lime"
              radius="xl"
              size="xs"
              leftSection={<RiDownloadLine />}
            >
              Download Resume
            </Button>
          </Anchor>
        </Flex>
        {work.map((exp) => {
          return (
            <Card
              shadow="xs"
              radius="lg"
              mt={10}
              key={exp.date}
              mb={4}
              withBorder
            >
              <Flex align="center" justify="space-between">
                {exp.link === "no-link" ? (
                  <Text size="md" fw={600}>
                    {exp.title} @ {exp.company}
                  </Text>
                ) : (
                  <Text size="md" fw={600}>
                    <Anchor c="lime" target="_blank" href={exp.link} fw={600}>
                      {exp.title} @ {exp.company} <RiArrowRightUpLine />
                    </Anchor>
                  </Text>
                )}

                {exp.date.includes("Present") ? (
                  <Text c="green" tt="uppercase" fw={800} size="xs">
                    {exp.date}
                  </Text>
                ) : (
                  <Text fw={600} size="xs">
                    {exp.date}
                  </Text>
                )}
              </Flex>
              <Text fw={500} my={10} size="xs">
                {exp.details}
              </Text>
              <Group justify="flex-start" mt={6}>
                {exp.competencies.map((comp) => {
                  return (
                    <Badge
                      variant="filled"
                      color={comp.color}
                      size="xs"
                      key={comp.id}
                    >
                      {comp.name}
                    </Badge>
                  );
                })}
              </Group>
            </Card>
          );
        })}
      </Card>
    </WorkPageContainer>
  );
};

export default WorkPage;
