import React from "react";
import styled from "styled-components";

const TitleText = styled.h3`
  color: var(--secondary-color);
  text-align: center;
  font-family: var(--font-secondary);
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 6rem; /* 120% */
  padding-top: 10rem;
  padding-bottom: 5rem;

  @media (min-width: 690px) {
    font-size: 5rem;
  }
`;

const Title = ({ children }) => {
  return <TitleText>{children}</TitleText>;
};

export default Title;
