import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 2rem;

  @media (min-width: 960px) {
    flex-direction: column;
    justify-content: start;
  }
`;

const Link = styled.a`
  color: var(--tertiary-color);
  font-family: Inter;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  opacity: 0.7;

  @media (min-width: 960px) {
    font-size: 1.25rem;
    line-height: 1.25rem; /* 100% */
  }
`;

const FooterNav = () => {
  return (
    <Container>
      <Link>EVENTS</Link>
      <Link>ABOUT</Link>
      <Link>WHY JOIN?</Link>
      <Link>FAQ</Link>
    </Container>
  );
};

export default FooterNav;
