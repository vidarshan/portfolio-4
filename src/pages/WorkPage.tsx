import { WorkPageContainer } from "./styles";
import { Anchor, Button, Flex, Timeline, Title } from "@mantine/core";
import { work } from "../data/work";
import { RiDownloadLine } from "react-icons/ri";

import WorkCard from "../components/Cards/WorkCard";

const WorkPage = () => {
  return (
    <WorkPageContainer id="work">
      <Flex justify="space-between" align="center">
        <Title c="blue" order={1}>
          Work
        </Title>
        <Anchor href="/files/resume.pdf" download="vidarshan_resume.pdf">
          <Button
            color="blue"
            radius="xl"
            size="xs"
            leftSection={<RiDownloadLine />}
          >
            Download Resume
          </Button>
        </Anchor>
      </Flex>

      <Timeline mt={20} active={1} bulletSize={24}>
        {work.map((exp, idx) => {
          return <WorkCard key={idx} idx={idx} {...exp} />;
        })}
      </Timeline>
    </WorkPageContainer>
  );
};

export default WorkPage;
