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
            data={["Profile", "Education", "Certifications"]}
          />
        </Flex>
        <Box>
          {selected === "Profile" ? (
            <>
              <Text
                mt={20}
                fw={400}
                size="md"
                mb={10}
                dangerouslySetInnerHTML={{ __html: about }}
              ></Text>
              <Flex align="center">
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
              </Flex>
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
