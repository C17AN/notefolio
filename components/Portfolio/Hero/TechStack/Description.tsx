import styled from "@emotion/styled";
import React from "react";
import TechStack from "type/TechStack";
import { palette } from "styles/palette";

type TechStackDescriptionProps = {
  techStackData: TechStack;
  isVisible: boolean;
};

const TechStackDescription = ({ techStackData, isVisible }: TechStackDescriptionProps) => {
  const { title, descriptionList } = techStackData || { title: "", descriptionList: [] };

  return (
    <Container isVisible={isVisible}>
      <DescriptionTitle>{title}</DescriptionTitle>
      <DescriptionList>
        {descriptionList?.map((description, index) => (
          <DescriptionItem key={`${description}-${index}`}>{description}</DescriptionItem>
        ))}
      </DescriptionList>
    </Container>
  );
};

const Container = styled.div<{ isVisible: boolean }>`
  margin-top: 1rem;
  font-size: 0.75rem;
  transition: 0.2s ease-in-out all;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  will-change: opacity;
  display: flex;
  flex-direction: column;
  min-height: 10rem;

  @media (max-width: 768px) {
    min-height: 13rem;
  }
`;

const DescriptionTitle = styled.p`
  border-left: 0.25rem solid ${palette.grey[300]};
  padding-left: 0.5rem;
  line-height: 1.5;
`;

const DescriptionList = styled.ul`
  margin-top: 0.25rem;
`;

const DescriptionItem = styled.li`
  font-size: 0.75rem;
  line-height: 1.5;
  list-style: circle;
  color: ${palette.grey[400]};
  margin: 0.625rem 0 0.625rem 1.5rem;
`;

export default TechStackDescription;
