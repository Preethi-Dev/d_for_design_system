import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) =>
    props.$color === "blue"
      ? "var(--fun-tone-blue)"
      : props.$color === "red"
      ? "var(--fun-tone-red)"
      : "var(--fun-tone-yellow)"};

  display: inline-flex;
  flex-direction: column;
  border-radius: 1.5rem;
  max-width: 26.5rem;
  padding: 1.5rem;
  gap: 3rem;

  transform: ${(props) =>
    props.$color === "blue"
      ? "rotate(12deg)"
      : props.$color === "red"
      ? "rotate(-4deg)"
      : "rotate(4deg)"};
`;

const Heading = styled.h4`
  color: #0d0d0e;
  font-family: var(--font-secondary);
  font-size: 2rem;
  font-weight: 500;
  line-height: 2rem;

  @media (min-width: 1200px) {
    font-size: 2.5rem;
    line-height: 3rem;
  }
`;

const Description = styled.p`
  color: #0d0d0e;
  font-family: var(--font-primary);
  font-size: 1rem;
  font-weight: 400;
  opacity: 0.5;
  line-height: 1.5rem;
  min-width: 19rem;

  @media (min-width: 1200px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

const Image = styled.img`
  border-radius: 0.75rem;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ColorCard = ({ title, description, gif, color }) => {
  return (
    <Container $color={color}>
      <CardContent>
        <Heading>{title}</Heading>
        <Description>{description}</Description>
      </CardContent>
      <Image src={gif} alt="Meme gifs" />
    </Container>
  );
};
