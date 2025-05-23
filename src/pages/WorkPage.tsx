import { WorkPageContainer } from "./styles";
import {
  Anchor,
  Badge,
  Button,
  Card,
  Flex,
  Group,
  List,
  Text,
  Timeline,
  Title,
} from "@mantine/core";
import { work } from "../data/work";
import { RiArrowRightUpLine, RiDownloadLine } from "react-icons/ri";
import { FaCircleCheck, FaCircleMinus } from "react-icons/fa6";

const WorkPage = () => {
  return (
    <WorkPageContainer id="work">
      <Flex justify="space-between" align="center">
        <Title c="blue" order={1}>
          Work
        </Title>
        <Anchor href="/files/resume.pdf" download="vidarshan_resume.pdf">
          <Button
            color="blue"
            radius="xl"
            size="xs"
            leftSection={<RiDownloadLine />}
          >
            Download Resume
          </Button>
        </Anchor>
      </Flex>

      <Timeline mt={20} active={1} bulletSize={24}>
        {work.map((exp, idx) => {
          return (
            <Timeline.Item
              key={idx}
              lineVariant={idx < 1 ? "dashed" : "solid"}
              bullet={
                idx < 2 ? (
                  <FaCircleCheck size={20} />
                ) : (
                  <FaCircleMinus size={20} color="gray" />
                )
              }
              title={
                <Flex justify="space-between">
                  {exp.link === "no-link" ? (
                    <Text size="lg" fw={600}>
                      {exp.title} @ {exp.company}
                    </Text>
                  ) : (
                    <Text size="lg" fw={600}>
                      <Anchor c="blue" target="_blank" href={exp.link} fw={600}>
                        {exp.title} @ {exp.company} <RiArrowRightUpLine />
                      </Anchor>
                    </Text>
                  )}
                  <Flex align="center" justify="space-between">
                    {exp.date.includes("Present") ? (
                      <Text size="sm" c="blue" tt="uppercase" fw={600}>
                        {exp.date}
                      </Text>
                    ) : (
                      <Text fw={600} size="xs">
                        {exp.date}
                      </Text>
                    )}
                  </Flex>
                </Flex>
              }
            >
              <List withPadding>
                {Array.isArray(exp.details) &&
                  exp.details.map((detail, index) => (
                    <List.Item mb={4} key={index}>
                      {detail}
                    </List.Item>
                  ))}
              </List>

              <Group justify="flex-start" mt={16}>
                {exp.competencies.map((comp) => {
                  return (
                    <Text c={comp.color} fw={700} size="xs">
                      {comp.name.toUpperCase()}
                    </Text>
                  );
                })}
              </Group>
            </Timeline.Item>
          );
        })}
      </Timeline>
    </WorkPageContainer>
  );
};

export default WorkPage;
