import styled from "@emotion/styled";
import React, { useEffect } from "react";
import Category from "./Category";
import EmailCard from "./EmailCard";
import SNSList from "./SNS/List";
import { palette } from "styles/palette";
import ControlButtons from "./ControlButtons";
import { motion } from "framer-motion";

const animationVariants = {
  hidden: { opacity: 0, width: 0 },
  visible: { opacity: 1, width: "15rem" },
};

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  return (
    <div>
      <BackDrop isOpen={isOpen} onClick={toggleSidebar} />
      <Container
        variants={animationVariants}
        animate={isOpen ? "visible" : "hidden"}
        initial={isOpen ? "visible" : "hidden"}
      >
        <ControlButtons />
        <EmailCard />
        <SNSList />
        <Category />
      </Container>
    </div>
  );
};

const BackDrop = styled.div<{ isOpen: boolean }>`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 15;
  background-color: rgba(0, 0, 0, 0.7);
  display: none;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  }
`;

const Container = styled(motion.div)`
  width: 15rem;
  position: sticky;
  top: 0;
  left: 0;
  height: 100vh;
  padding-bottom: 1rem;
  background-color: ${palette.white};
  color: ${palette.notion.sidebar.text};
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  @media (max-width: 768px) {
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 20;
  }
`;

export default Sidebar;
