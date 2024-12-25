import { useRef } from "react";
import "./App.css";
import {
  ActionIcon,
  Affix,
  Box,
  Container,
  Flex,
  Grid,
  MantineProvider,
  Transition,
} from "@mantine/core";
import gsap from "gsap";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { ScrollTrigger, TextPlugin } from "gsap/all";
import AboutCard from "./components/AboutCard";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import ProjectPage from "./pages/ProjectPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import Footer from "./components/Footer";
import { useWindowScroll } from "@mantine/hooks";
import { RiArrowUpLine } from "react-icons/ri";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const App = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <MantineProvider
      defaultColorScheme="auto"
      theme={{
        shadows: {
          xs: "0",
        },
        colors: {
          dark: [
            "#ffffff", // 0 - Lightest shade (text on dark backgrounds)
            "#A6A7AB", // 1 - Slightly darker text
            "#909296", // 2 - Muted text
            "#5C5F66", // 3 - Neutral/secondary elements
            "#373A40", // 4 - Borders, subtle backgrounds
            "#2C2E33", // 5 - Default dark background
            "#25262B", // 6 - Slightly darker than the default background
            "#000000", // 7 - Card or modal backgrounds
            "#141517", // 8 - Deep dark shade
            "#101113", // 9 - Near-black for footers or extra contrast
          ],
        },
        headings: {
          sizes: {
            h1: {
              fontWeight: "600",
            },
            h2: {
              fontWeight: "600",
            },
            h3: {
              fontWeight: "600",
            },
            h4: {
              fontWeight: "600",
            },
            h5: {
              fontWeight: "600",
            },
          },
        },
        defaultRadius: "md",
        defaultGradient: {
          from: "#42b927",
          to: "#c4de00",
          deg: 45,
        },
      }}
    >
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <ActionIcon
              radius="xl"
              size="lg"
              color="lime"
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              <RiArrowUpLine />
            </ActionIcon>
          )}
        </Transition>
      </Affix>
      <Container size="xl" ref={elementRef}>
        <Grid p={0}>
          <Grid.Col style={{ position: "relative" }} h="100vh" span={4}>
            <Flex h="100vh">
              <AboutCard />
            </Flex>
          </Grid.Col>
          <Grid.Col h="100vh" span={8}>
            <Box>
              <AboutPage />
              <WorkPage />
              <ProjectPage />
              <TestimonialsPage />
              <Footer />
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </MantineProvider>
  );
};

export default App;
