import { education, certifications } from "../data/education";
import { AboutPageContainer } from "./styles";
import {
  Box,
  Flex,
  Grid,
  SegmentedControl,
  Text,
  Timeline,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import { useState } from "react";
import StatCard from "../components/Cards/StatCard";
import { about } from "../data/about";
import EducationCard from "../components/Cards/EducationCard";
import CertificationCard from "../components/Cards/CertificationCard";
import { useEffect, useMemo } from "react";
import Spinner from "../components/Loader";
import { gitQuery } from "../data/gitQuery";

const AboutPage = () => {
  const [selected, setSelected] = useState("Profile");
  const { colorScheme } = useMantineColorScheme();

  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    repos: 40,
    contributions: 3000,
    reputation: 420,
    badges: 30,
  });
  const [loadingMessage, setLoadingMessage] = useState("Fetching data...");
  const token = import.meta.env.VITE_GITHUB_PAT;
  const username = import.meta.env.VITE_GITHUB_USERNAME;
  const id = import.meta.env.VITE_STACKOVERFLOW_ID;

  const years = useMemo(() => [2019, 2020, 2021, 2022, 2023, 2024, 2025], []);

  useEffect(() => {
    const buildQuery = () => {
      return gitQuery;
    };
    setLoadingMessage("Fetching repos from github.com...");
    fetch(`https://api.github.com/users/${username}/repos?per_page=200`)
      .then((res) => res.json())
      .then((data) => {
        setStats((prev) => ({ ...prev, repos: data?.length }));
      })
      .catch((err) => console.error("Error:", err))
      .finally(() => {
        setLoading(false);
        setLoadingMessage("Fetching data...");
      });
    setLoadingMessage("Fetching data from stackexchange.com...");
    fetch(
      `https://api.stackexchange.com/2.3/users/${id}?order=desc&sort=reputation&site=stackoverflow`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.items && data.items.length > 0) {
          setStats((prev) => ({
            ...prev,
            reputation: data?.user?.reputation,
            badges:
              data?.user?.badge_counts.gold +
              data?.user?.badge_counts.silver +
              data?.user?.badge_counts.bronze,
          }));
        } else {
          setStats((prev) => ({
            ...prev,
            reputation: 400,
            badges: 30,
          }));
        }
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setLoading(false);
        setLoadingMessage("Fetching data...");
      });
    setLoadingMessage("Fetching contributions from github.com...");
    fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ query: buildQuery() }),
    })
      .then((res) => res.json())
      .then((data) => {
        years?.reduce((acc, year) => {
          const contributions =
            data?.data?.user[`y${year}`]?.contributionCalendar
              ?.totalContributions;
          acc += contributions;
          setStats((prev) => ({
            ...prev,
            contributions: acc,
          }));
          return acc;
        }, 0);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setLoading(false);
        setLoadingMessage("Fetching data...");
      });
  }, [years, token, username]);

  return (
    <AboutPageContainer id="about">
      <Box>
        <Title c="blue" mb={10} order={1}>
          About Me
        </Title>
        <Flex>
          <SegmentedControl
            value={selected}
            onChange={(e) => setSelected(e)}
            radius="xl"
            color="blue"
            data={["Profile", "Education", "Certifications"]}
          />
        </Flex>
        <Box>
          {selected === "Profile" ? (
            <>
              <Text
                mt={20}
                fw={500}
                size="md"
                mb={10}
                dangerouslySetInnerHTML={{ __html: about }}
              ></Text>

              {loading ? (
                <>
                  {" "}
                  <Spinner text={loadingMessage} />
                </>
              ) : (
                <Flex align="center">
                  <StatCard
                    name="Github"
                    color="gray"
                    values={[
                      {
                        name: "Contributions on Github",
                        value: stats.contributions + "+",
                      },
                      {
                        name: "Reputation on Stackoverflow",
                        value: stats.reputation + "+",
                      },
                      {
                        name: "Badges on Stackoverflow",
                        value: stats.badges + "+",
                      },
                      { name: "Projects on Github", value: stats.repos + "+" },
                    ]}
                  />
                </Flex>
              )}
            </>
          ) : selected === "Education" ? (
            <Timeline
              mt={20}
              bulletSize={30}
              active={education?.length - 1}
              align="left"
            >
              {education.map((edu, index) => {
                return (
                  <EducationCard
                    key={edu.id}
                    index={index}
                    length={education.length}
                    {...edu}
                  />
                );
              })}
            </Timeline>
          ) : (
            <Grid mt={20}>
              {certifications.map((cert) => {
                return (
                  <CertificationCard
                    colorScheme={colorScheme}
                    key={cert.id}
                    {...cert}
                  />
                );
              })}
            </Grid>
          )}
        </Box>
      </Box>
    </AboutPageContainer>
  );
};

export default AboutPage;
