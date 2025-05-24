import { List, Text, Timeline } from "@mantine/core";
import  { FC } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";

interface EducationCardProps {
  id: number | string;
  index: number;
  length: number;
  title: string;
  field: string;
  location: string;
  dates: string;
  subtitle: string;
  description: string | { title: string; description: string }[];
}

const EducationCard: FC<EducationCardProps> = ({
  id,
  index,
  length,
  title,
  field,
  location,
  dates,
  subtitle,
  description,
}) => {
  return (
    <Timeline.Item
      key={id}
      lineVariant="dashed"
      color="blue"
      bullet={
        index < length - 1 ? <FaGraduationCap /> : <FaCircleCheck size={20} />
      }
      title={
        <>
<<<<<<< HEAD
          <Text fw={600} c="blue" size="lg">
            {title.concat(" ", field)}
          </Text>
          <Text fw={600} c="dimmed" size="sm">
=======
          <Text fw={700} c="blue" size="lg">
            {title.concat(" ", field)}
          </Text>
          <Text fw={700} c="dimmed" size="sm">
>>>>>>> c87d813 (Refresh history)
            {location} · {dates}
          </Text>
        </>
      }
    >
      <Text size="md">{subtitle}</Text>
      <List mt={12} size="sm" withPadding>
        {Array.isArray(description) ? (
          description.map((desc, idx) => (
            <List.Item mt={4} key={idx}>
              <strong>{desc.title}</strong> - {desc.description}
            </List.Item>
          ))
        ) : (
          <Text size="sm" mt={4}>
            {description}
          </Text>
        )}
      </List>
    </Timeline.Item>
  );
};

export default EducationCard;
