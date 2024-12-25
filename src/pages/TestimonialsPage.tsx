import {
  Avatar,
  Card,
  Divider,
  Flex,
  Grid,
  Image,
  Text,
  Title,
} from "@mantine/core";
import { TestimonialsPageContainer } from "./styles";
import { testimonials } from "../data/testimonials";
import { RiArrowRightUpLine } from "react-icons/ri";

const TestimonialsPage = () => {
  return (
    <TestimonialsPageContainer id="testimonials">
      <Card p={12} shadow="xl" radius="lg">
        <Title order={1}>Testimonials</Title>
        <Grid>
          {testimonials.map((item) => {
            return (
              <Grid.Col span={6}>
                <Card h='100%' withBorder>
                  <Flex direction="row" align="center">
                    <Avatar mr={8} radius="xl" h={40} w={40} src={item.avatar} />
                    <Flex direction="column">
                      <Text fw={600} size="md">
                        {item.name} <RiArrowRightUpLine />
                      </Text>

                      <Text fw={600} tt="uppercase" c="dimmed" size="sm">
                        {item.designation}
                      </Text>
                    </Flex>
                  </Flex>

                  <Text fs='italic' mt={10} size="sm">
                    {item.description}
                  </Text>
                </Card>
              </Grid.Col>
            );
          })}
        </Grid>
      </Card>
    </TestimonialsPageContainer>
  );
};

export default TestimonialsPage;
