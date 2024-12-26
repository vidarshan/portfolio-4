import { Paper } from "@mantine/core";
import styled from "styled-components";

export const NavigationBarContainer = styled(Paper)`
  position: fixed;
  top: 0;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  z-index: 10;
  height: 3.6rem;
  background-color: transparent;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;
