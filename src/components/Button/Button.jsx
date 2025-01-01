import React from "react";
import styled from "styled-components";

const Container = styled.button`
  display: inline-flex;
  padding: 1.25rem 2.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  color: ${(props) =>
    props.$theme === "light"
      ? "var(--secondary-color)"
      : "var(--tertiary-color)"};
  font-size: 1rem;
  font-weight: 600;

  border-radius: 4rem;
  background-color: ${(props) =>
    props.$theme === "light"
      ? "var(--tertiary-color)"
      : "var(--secondary-color)"};
  cursor: pointer;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Button = ({ label, icon, theme = "dark", link }) => {
  return (
    <a href={link}>
      <Container $theme={theme}>
        {label}
        <img src={icon} alt="" />
      </Container>
    </a>
  );
};

export default Button;
