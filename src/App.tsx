import "./App.css";
import {
  ActionIcon,
  Affix,
  Container,
<<<<<<< HEAD
  Loader,
=======
>>>>>>> c87d813 (Refresh history)
  MantineProvider,
  Transition,
} from "@mantine/core";
import "@mantine/core/styles.css";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import ProjectPage from "./pages/ProjectPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import Footer from "./components/Footer";
import { useWindowScroll } from "@mantine/hooks";
import { RiArrowUpLine } from "react-icons/ri";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./pages/HomePage";
<<<<<<< HEAD
import { RingLoader } from "./components/Loaders/RingLoader";

=======
>>>>>>> c87d813 (Refresh history)
const App = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <MantineProvider
        defaultColorScheme="dark"
        theme={{
<<<<<<< HEAD
          components: {
            Loader: Loader.extend({
              defaultProps: {
                loaders: { ...Loader.defaultLoaders, ring: RingLoader },
                type: "ring",
              },
            }),
          },
=======
>>>>>>> c87d813 (Refresh history)
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
        <NavigationBar />
        <Affix position={{ bottom: 20, right: 20 }}>
          <Transition transition="slide-up" mounted={scroll.y > 0}>
            {(transitionStyles) => (
              <ActionIcon
                radius="xl"
                size="lg"
                color="blue"
                style={transitionStyles}
                onClick={() => scrollTo({ y: 0 })}
              >
                <RiArrowUpLine />
              </ActionIcon>
            )}
          </Transition>
        </Affix>
        <Container size="xl">
          <HomePage />
          <AboutPage />
          <WorkPage />
          <ProjectPage />
          <TestimonialsPage />
          <Footer />
        </Container>
      </MantineProvider>
    </>
  );
};

export default App;
