import { RiArrowRightUpLine, RiGithubFill } from "react-icons/ri";
import { education, certifications } from "../data/education";
import {
  frameworks,
  other,
  technicalCompetencies,
  technologies,
} from "../data/competencies";
import { AboutPageContainer } from "./styles";
import { useOs } from "@mantine/hooks";
import {
  ActionIcon,
  Anchor,
  Badge,
  Blockquote,
  Box,
  Card,
  Center,
  Divider,
  Flex,
  Grid,
  Group,
  HoverCard,
  List,
  Loader,
  Mark,
  SegmentedControl,
  Spoiler,
  Text,
  ThemeIcon,
  Timeline,
  Title,
  Tooltip,
  useMantineColorScheme,
} from "@mantine/core";
import { FaCode, FaGraduationCap, FaQuoteLeft } from "react-icons/fa";
import { useState } from "react";
import StatCard from "../components/Cards/StatCard";
import { FaCircleCheck } from "react-icons/fa6";

const AboutPage = () => {
  const [selected, setSelected] = useState("Profile");
  const { colorScheme } = useMantineColorScheme();

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
            data={["Profile", "Education", "Certifications", "Stack"]}
          />
        </Flex>
        {/* <Text size="sm" fw={500} mb={4}>
          Passionate about crafting efficient digital products that elevate
          daily workflows. With almost 3 years as a software engineer, I deliver
          precise, high-quality solutions, aligning with stakeholders’ needs.
          Driven by innovation, I stay ahead of tech trends, continuously honing
          skills to tackle challenges and create impactful software.
        </Text> */}
        <Box>
          {selected === "Profile" ? (
            <>
              <Text mt={20} fw={400} size="md" mb={10}>
                I'm passionate about designing and building efficient digital
                products that elevate everyday workflows and user experiences.
                With nearly four years of hands-on experience as a software
                engineer, I specialize in delivering high-quality, reliable
                solutions that align seamlessly with stakeholder goals. <br />
                <br /> My core competencies span the full stack—from crafting
                responsive, intuitive interfaces through frontend web
                development with React, to building robust backends via
                Node.js-powered API development. I also bring experience in
                cross-platform app development with React Native, enabling
                consistent experiences across iOS and Android, as well as native
                iOS development for tailored, high-performance mobile solutions.{" "}
                <br />
                <br />
                I'm deeply curious about emerging technologies, particularly in
                AI and cloud infrastructure, and actively explore how they can
                be integrated to enhance scalability, personalization, and
                automation in modern applications. I stay ahead of industry
                trends to craft solutions that are not only functional, but
                forward-thinking and impactful. Whether refining existing
                systems or architecting new ones, I thrive on turning complex
                challenges into intuitive, scalable, and intelligent software.
              </Text>

              <StatCard
                name="Github"
                color="gray"
                values={[
                  { name: "Contributions on Github", value: "2,000+" },
                  { name: "Reputation on Stackoverflow", value: "420+" },
                  { name: "Badges on Stackoverflow", value: "30+" },
                  { name: "Projects on Github", value: "40+" },
                ]}
              />
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
                  <Timeline.Item
                    key={edu.id}
                    lineVariant="dashed"
                    color="blue"
                    bullet={
                      index < education.length - 1 ? (
                        <FaGraduationCap />
                      ) : (
                        <FaCircleCheck size={20} />
                      )
                    }
                    title={
                      <>
                        <Text fw={600} c="blue" size="lg">
                          {edu?.title.concat(" ", edu?.field)}
                        </Text>
                        <Text fw={600} c="dimmed" size="sm">
                          {edu.location} · {edu.dates}
                        </Text>
                      </>
                    }
                  >
                    <Text size="md">{edu.subtitle}</Text>
                    <List mt={12} size="sm" withPadding>
                      {Array.isArray(edu.description) ? (
                        edu.description.map((desc, idx) => (
                          <List.Item mt={4} key={idx}>
                            <strong>{desc.title}</strong> - {desc.description}
                          </List.Item>
                        ))
                      ) : (
                        <Text size="sm" mt={4}>
                          {edu.description}
                        </Text>
                      )}
                    </List>
                  </Timeline.Item>
                );
              })}
            </Timeline>
          ) : selected === "Certifications" ? (
            <Grid mt={20}>
              {certifications.map((cert) => {
                return (
                  <Grid.Col span={{ base: 12, sm: 6, md: 4 }} key={cert.id}>
                    <Card
                      key={cert.id}
                      mb={8}
                      shadow="xl"
                      radius="lg"
                      h="100%"
                      withBorder={colorScheme === "light"}
                    >
                      <Flex justify="space-between" mb={10}>
                        <Text size="lg" c="blue" fw={600}>
                          {" "}
                          {cert.title}
                        </Text>
                        <Tooltip label="View Credential" withArrow>
                          <Anchor target="_blank" underline="never" href="">
                            <ActionIcon
                              color="dark"
                              size="md"
                              radius="xl"
                              mr={4}
                            >
                              <RiArrowRightUpLine />
                            </ActionIcon>{" "}
                          </Anchor>
                        </Tooltip>
                      </Flex>
                      <Text fw={600} c="dimmed">
                        {" "}
                        {cert.organization} | {cert.date}
                      </Text>

                      <Text size="xs" mt={12}>
                        {" "}
                        {cert.description}
                      </Text>
                    </Card>
                  </Grid.Col>
                );
              })}
            </Grid>
          ) : (
            <Box mt={20}>
              <Text mt={20} c="blue" fw={600} size="lg">
                Languages
              </Text>
              <Group></Group>
              <List withPadding>
                {technologies.map((tech) => {
                  return (
                    <List.Item>
                      <Text size="sm">{tech.name}</Text>
                    </List.Item>
                  );
                })}
              </List>

              <Text mt={20} c="blue" fw={600} size="lg">
                Frameworks
              </Text>
              <List withPadding>
                {frameworks.map((tech) => {
                  return (
                    <List.Item>
                      <Text size="sm">{tech.name}</Text>
                    </List.Item>
                  );
                })}
              </List>

              <Text mt={20} c="blue" fw={600} size="lg">
                Tools
              </Text>
              <List withPadding>
                {other.map((tech) => {
                  return (
                    <List.Item>
                      <Text size="sm">{tech.name}</Text>
                    </List.Item>
                  );
                })}
              </List>
            </Box>
          )}
        </Box>
      </Box>
    </AboutPageContainer>
  );
};

export default AboutPage;
