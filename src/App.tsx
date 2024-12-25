import { useEffect, useRef, useState } from "react";
import "./App.css";
import {
  ActionIcon,
  Affix,
  Box,
  Button,
  ColorSchemeScript,
  Container,
  Flex,
  Grid,
  MantineProvider,
  Text,
  Title,
  Transition,
  useMantineColorScheme,
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
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scroll, scrollTo] = useWindowScroll();

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
    if (scrollPosition < 300) {
      gsap.to(".title", {
        duration: 2,
        color: "#e40707",
      });
    } else if (scrollPosition > 300) {
      gsap.to(".title", {
        duration: 2,
        color: "#ffff",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const handleScroll = () => {
  //   console.log(fontSize);
  //   gsap.to(".box", { color: "red", fontSize: fontSize - 4 });
  //   setScrollY(window.scrollY); // Get the vertical scroll position
  // };

  const [scrollDirection, setScrollDirection] = useState("");

  const [scrollAmount, setScrollAmount] = useState(0);

  const handleWheel = (event: React.WheelEvent) => {
    console.log(event);
    const deltaY = event.deltaY; // Vertical scroll amount
    if (deltaY < 0) {
      if (deltaY === 0) {
        setScrollAmount(0);
      } else {
        setScrollAmount((prev) => prev + deltaY);
      }
      console.log("down");
    } else {
      console.log("up");
      if (deltaY === 0) {
        setScrollAmount((prev) => prev + deltaY);
      }
    }

    // Track scroll direction
    if (deltaY > 0) {
      if (deltaY !== 0) {
        setScrollDirection("Scrolling Down");
      }
    } else if (deltaY < 0) {
      setScrollDirection("Scrolling Up");
    }
  };

  // useEffect(() => {
  //   gsap.to(".title", {
  //     duration: 2,
  //     text: "Vidarshan | Software Developer",
  //     ease: "power1",
  //   });
  //   gsap.to(".subtitle", {
  //     duration: 2,
  //     text: "Passionate about crafting efficient digital products that elevate daily workflows. With 4+ years as a software engineer, I deliver precise, high-quality solutions, aligning with stakeholders’ needs. Driven by innovation, I stay ahead of tech trends, continuously honing skills to tackle challenges and create impactful software.",
  //     ease: "power1",
  //   });

  //   const tl = gsap.timeline({ repeat: 0, repeatDelay: 1, yoyo: true });
  //   tl.to("h1 p", {
  //     duration: 10,
  //     text:
  //       " I am dedicated to creating digital products that enhance user's day-to-day workflows. I prioritize neatness and efficiency in every aspect of my work, ensuring that software projects are handled with precision and care." +
  //       "<br /><br /> With over four years of experience as a software engineer, I have gained invaluable insights into the development process—learning both what to do and what to avoid. This experience has taught me how to align the needs and expectations of all stakeholders while delivering high-quality software solutions." +
  //       " <br /><br /> My passion for technology drives me to stay at the forefront of industry trends. As a tech-savvy individual, I am constantly evolving and refining my skills, enabling me to successfully navigate the challenges of both my work and studies in technology.",
  //   });
  // }, []);

  return (
    <MantineProvider
      defaultColorScheme="auto"
      theme={{
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
      <Container size="xl" onWheel={handleWheel} ref={elementRef}>
        <Grid p={0}>
          <Grid.Col span={4}>
            <AboutCard />
          </Grid.Col>
          <Grid.Col span={8}>
            <Box>
              <AboutPage />
              <WorkPage />
              <ProjectPage />
              <TestimonialsPage />
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
      <Footer />
    </MantineProvider>
  );
};

export default App;
