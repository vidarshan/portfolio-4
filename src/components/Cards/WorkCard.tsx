import { Anchor, Flex, Group, List, Text, Timeline } from "@mantine/core";
import { FC } from "react";
import { FaCircleCheck, FaCircleMinus } from "react-icons/fa6";
import { RiArrowRightUpLine } from "react-icons/ri";

interface CompetencyProps {
  name: string;
  color: string;
}

interface WorkCardProps {
  idx: number;
  link: string;
  title: string;
  company: string;
  date: string;
  details: string[];
  competencies: CompetencyProps[];
}

const WorkCard: FC<WorkCardProps> = ({
  idx,
  link,
  title,
  company,
  date,
  details,
  competencies,
}) => {
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
          {link === "no-link" ? (
            <Text size="lg" fw={700}>
              {title} @ {company}
            </Text>
          ) : (
            <Text size="lg" fw={800}>
              <Anchor c="blue" target="_blank" href={link} fw={600}>
                {title} @ {company} <RiArrowRightUpLine />
              </Anchor>
            </Text>
          )}
          <Flex align="center" justify="space-between">
            {date.includes("Present") ? (
              <Text size="sm" c="blue" tt="uppercase" fw={700}>
                {date}
              </Text>
            ) : (
              <Text fw={700} size="xs">
                {date}
              </Text>
            )}
          </Flex>
        </Flex>
      }
    >
      <List withPadding>
        {Array.isArray(details) &&
          details.map((detail, index) => (
            <List.Item mb={4} key={index}>
              {detail}
            </List.Item>
          ))}
      </List>

      <Group justify="flex-start" mt={16}>
        {competencies.map((comp) => {
          return (
            <Text c={comp.color} fw={800} size="xs">
              {comp.name.toUpperCase()}
            </Text>
          );
        })}
      </Group>
    </Timeline.Item>
  );
};

export default WorkCard;
