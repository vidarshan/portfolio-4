import {
  ActionIcon,
  Anchor,
  Card,
  Flex,
  Grid,
  MantineColorScheme,
  Text,
  Tooltip,
} from "@mantine/core";
import { FC } from "react";
import { RiArrowRightUpLine } from "react-icons/ri";

interface CertificationCardProps {
  id: number | string;
  title: string;
  organization: string;
  date: string;
  description: string;
  colorScheme: MantineColorScheme;
  completed: boolean;
  link: string;
}

const CertificationCard: FC<CertificationCardProps> = ({
  id,
  title,
  organization,
  date,
  description,
  colorScheme,
  completed,
  link,
}) => {
  return (
    <Grid.Col span={{ base: 12, sm: 6, md: 4 }} key={id}>
      <Card
        key={id}
        mb={8}
        shadow="xl"
        radius="lg"
        h="100%"
        withBorder={colorScheme === "light"}
      >
        <Flex justify="space-between" >
<<<<<<< HEAD
          <Text size="lg" c="blue" fw={600}>
=======
          <Text size="lg" c="blue" fw={700}>
>>>>>>> c87d813 (Refresh history)
            {" "}
            {title}
          </Text>
          {completed && (
            <Tooltip label="View Credential" withArrow>
              <Anchor target="_blank" underline="never" href={link}>
                <ActionIcon color="dark" size="md" radius="xl" mr={4}>
                  <RiArrowRightUpLine />
                </ActionIcon>{" "}
              </Anchor>
            </Tooltip>
          )}
        </Flex>
<<<<<<< HEAD
        <Text fw={600} c="dimmed">
=======
        <Text fw={700} c="dimmed">
>>>>>>> c87d813 (Refresh history)
          {" "}
          {organization} | {date}
        </Text>

        <Text size="xs" mt={12}>
          {" "}
          {description}
        </Text>
      </Card>
    </Grid.Col>
  );
};

export default CertificationCard;
