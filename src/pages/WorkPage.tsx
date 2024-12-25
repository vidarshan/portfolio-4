import { WorkPageContainer } from "./styles";
import { Badge, Card, Flex, Group, Text, Title } from "@mantine/core";
import { work } from "../data/work";
import { RiArrowRightUpLine } from "react-icons/ri";

const WorkPage = () => {
  return (
    <WorkPageContainer>
      <Card p={12} shadow="xl" radius="lg" >
        <Title order={1}>Work</Title>
        {work.map((exp) => {
          return (
            <Card mt={10} key={exp.date} mb={4}>
              <Flex align='center' justify='space-between'>
                <Text fw={600} size="sm">
                  {exp.title} @ {exp.company} <RiArrowRightUpLine />
                </Text>
                <Text fw={600} size="xs">{exp.date}</Text>
              </Flex>
              <Text mt={4} size="xs">
                {exp.details}
              </Text>
              <Group justify="flex-start" mt={6}>
                {exp.competencies.map((comp) => {
                  return (
                    <Badge
                      variant="filled"
                      color={comp.color}
                      size="sm"
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
