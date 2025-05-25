import {
  Badge,
  Button,
  Divider,
  Flex,
  MantineColor,
  Modal,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FC } from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
import { frameworks, other, technologies } from "../../data/competencies";

interface StatItem {
  name: string;
  value: string | number;
}

interface StatCardProps {
  name: string;
  color: MantineColor;
  values: StatItem[];
}
//TODO: Add fallbacks
const StatCard: FC<StatCardProps> = ({ values = [] }) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Flex py={40} align="center" gap={20}>
      <Modal
        opened={opened}
        onClose={close}
        radius="lg"
        centered
        size="sm"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 4,
        }}
      >
        <Divider label="Languages" mb={6} labelPosition="left" />
        <Flex wrap="wrap" gap={10}>
          {technologies.map((tech) => {
            return (
              <Badge key={tech.id} color={tech.color} size="sm">
                {tech.name}
              </Badge>
            );
          })}
        </Flex>
        <Divider label="Frameworks" mb={6} mt={8} labelPosition="left" />
        <Flex wrap="wrap" gap={10}>
          {frameworks.map((tech) => {
            return (
              <Badge key={tech.id} color={tech.color} size="sm">
                {tech.name}
              </Badge>
            );
          })}
        </Flex>
        <Divider label="Tools" mt={8} mb={6} labelPosition="left" />
        <Flex wrap="wrap" gap={10}>
          {" "}
          {other.map((tech) => {
            return (
              <Badge key={tech.id} color={tech.color} size="sm">
                {tech.name}
              </Badge>
            );
          })}
        </Flex>
      </Modal>
      <Flex wrap="wrap" gap={20}>
        {values.map((item, index) => (
          <>
            <Flex key={index} direction="column">
              <Text size="xl" px={0} fw={600}>
                {item.value}
              </Text>

              <Text size="sm" c="gray">
                {item.name}
              </Text>
            </Flex>
            {index !== values.length - 1 && <Divider orientation="vertical" />}
          </>
        ))}
        <Button
          variant="transparent"
          leftSection={<RiArrowRightUpLine />}
          onClick={open}
        >
          Show Stack
        </Button>
      </Flex>
    </Flex>
  );
};

export default StatCard;
