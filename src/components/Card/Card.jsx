import React from "react";
import styled from "styled-components";

//assets
import Rope from "../../assets/icons/rope_01.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  top: ${(props) =>
    props.$rope === "Rope01"
      ? "-2rem"
      : props.$rope === "Rope02"
      ? "0rem"
      : "-6rem"};

  @media (max-width: 1200px) {
    position: static;
  }
`;

const CardContainer = styled.div`
  background-color: var(--secondary-color);
  border-radius: 2.5rem;
  padding: 1.5rem 1.5rem 2.75rem;

  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const CardImage = styled.img`
  width: 22rem;
  height: 22rem;
  border-radius: 1rem;

  @media (max-width: 1200px) {
    width: 18rem;
    height: 18rem;
  }
`;

const CardContent = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  width: 22rem;

  @media (max-width: 1200px) {
    width: 18rem;
  }
`;

const CardHeading = styled.p`
  color: var(--tertiary-color);
  font-family: var(--primary-font);
  font-size: 2rem;
  font-weight: 600;
  line-height: 100%;
`;

const Decorative = styled.img`
  @media (max-width: 1200px) {
    display: none;
  }
`;

const CardDescription = styled.p`
  color: rgba(255, 255, 255, 0.64);
  font-family: var(--primary-font);
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  line-height: 100%;
`;

const Card = ({ image, name, description, rope }) => {
  return (
    <Container $rope={rope}>
      {rope && <Decorative src={Rope} alt="decorative element" />}
      <CardContainer>
        <CardImage src={image} alt="avatar" />
        <CardContent>
          <CardHeading>{name}</CardHeading>
          <CardDescription>{description}</CardDescription>
        </CardContent>
      </CardContainer>
    </Container>
  );
};

export default Card;
