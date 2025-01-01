import React from "react";
import styled from "styled-components";

const IntroText = styled.h2`
  color: var(--tertiary-color);

  font-family: var(--font-primary);
  font-size: 3rem;
  font-weight: 500;
  line-height: 3.5rem;
  padding: 5rem 3.5rem;
  max-width: 83rem;

  display: flex;
  margin: auto;

  @media (min-width: 690px) {
    padding: 5rem;
  }

  @media (min-width: 960px) {
    font-size: 6.5rem;
    font-weight: 400;
    line-height: 7rem;
    padding: 10rem;
  }
`;

const CommunityIntro = () => {
  return (
    <IntroText id="about">
      India’s first ever design community dedicated to design system.
    </IntroText>
  );
};

export default CommunityIntro;
