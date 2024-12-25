import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 25rem;
  display: flex;
  flex-direction: column;
  grid-column: span 12;

  background-color: var(--tertiary-color);
  overflow: hidden;
  position: relative;

  @media (min-width: 490px) {
    grid-column: span 6;
  }
`;

const CardNo = styled.p`
  color: var(--secondary-color);
  font-family: var(--font-secondary);
  font-size: 10rem;
  font-weight: 400;

  padding-left: 1.5rem;
  position: absolute;
  bottom: -25%;

  @media (min-width: 960px) {
    padding-left: 4rem;
  }
`;

const Description = styled.p`
  color: rgba(0, 0, 0, 0.5);
  font-family: var(--font-primary);
  font-size: 1.5rem;
  line-height: 2.25rem;
  font-weight: 500;
  padding: 1.5rem 1.5rem 0;
  align-self: end;

  span {
    color: var(--secondary-color);
  }

  @media (min-width: 960px) {
    font-size: 2rem;
    line-height: 2.75rem;

    padding: 3rem 0.5rem 0 0;
  }

  @media (min-width: 768px) {
    max-width: 23rem;
    min-width: 23rem;
  }
`;

export const ReasonCard = ({ cardNo, description }) => {
  return (
    <Container>
      <Description>{description}</Description>
      <CardNo>{cardNo}</CardNo>
    </Container>
  );
};
