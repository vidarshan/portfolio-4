import { Anchor, Avatar, Blockquote, Flex, Text } from "@mantine/core";
import { FC } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { RiArrowRightUpLine } from "react-icons/ri";

interface TestimonialCardProps {
  id: number | string;
  avatar: string;
  link: string;
  name: string;
  designation: string;
  description: string;
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  id,
  avatar,
  link,
  name,
  designation,
  description,
}) => {
  return (
    <Blockquote icon={<FaQuoteLeft />} key={id} mt="xl">
      <>
        <Flex direction="row" align="center">
          <Avatar mr={8} radius="xl" h={40} w={40} src={avatar} />
          <Flex direction="column">
            <Anchor href={link} target="_blank">
<<<<<<< HEAD
              <Text c="blue" fw={600} size="md">
                {name} <RiArrowRightUpLine />
              </Text>
            </Anchor>
            <Text fw={600} tt="uppercase" c="dimmed" size="sm">
=======
              <Text c="blue" fw={700} size="md">
                {name} <RiArrowRightUpLine />
              </Text>
            </Anchor>
            <Text fw={700} tt="uppercase" c="dimmed" size="sm">
>>>>>>> c87d813 (Refresh history)
              {designation}
            </Text>
          </Flex>
        </Flex>
        <Text mt={10} size="md">
          {description}
        </Text>
      </>
    </Blockquote>
  );
};

export default TestimonialCard;
