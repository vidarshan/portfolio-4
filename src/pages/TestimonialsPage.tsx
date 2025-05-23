import { Grid, Title } from "@mantine/core";
import { TestimonialsPageContainer } from "./styles";
import { testimonials } from "../data/testimonials";
import TestimonialCard from "../components/Cards/TestimonialCard";

const TestimonialsPage = () => {
  return (
    <TestimonialsPageContainer id="testimonials">
      <Title c="blue" mb={10} order={1}>
        Testimonials
      </Title>
      <Grid>
        {testimonials.map((item) => {
          return (
            <TestimonialCard
              key={item.id}
              id={item.id}
              avatar={item.avatar}
              link={item.link}
              name={item.name}
              designation={item.designation}
              description={item.description}
            />
          );
        })}
      </Grid>
    </TestimonialsPageContainer>
  );
};

export default TestimonialsPage;
