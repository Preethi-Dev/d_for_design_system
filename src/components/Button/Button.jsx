import React from "react";
import styled from "styled-components";

const Container = styled.button`
  display: inline-flex;
  padding: 1.25rem 2.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  color: var(--tertiary-color);
  font-size: 1rem;
  font-weight: 600;

  border-radius: 4rem;
  background-color: var(--secondary-color);
  cursor: pointer;
`;

const Button = ({ label, icon }) => {
  return (
    <Container>
      {label}
      <img src={icon} alt="" />
    </Container>
  );
};

export default Button;
