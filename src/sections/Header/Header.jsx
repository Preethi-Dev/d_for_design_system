import React from "react";
import styled from "styled-components";

//components
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";

//assets
import BrandShape from "../../assets/icons/brand_shape_01.svg";
import DownArrow from "../../assets/icons/down_arrow.svg";

const Container = styled.div`
  position: relative;
  background-color: var(--primary-color);
  min-height: 100vh;
  padding: 1.5rem 1.5rem 12.5rem;
  border-radius: 0rem 0rem 2.5rem 2.5rem;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h1`
  color: var(--tertiary-color);
  text-align: center;
  font-family: var(--font-secondary);
  font-size: 3rem;
  font-weight: 500;
  line-height: 3.5rem;
  max-width: 83rem;

  padding: 4rem 0;

  @media (min-width: 690px) {
    font-size: 5rem;
    line-height: 5rem;
    padding: 9rem 0 5rem;
  }

  @media (min-width: 1000px) {
    font-size: 9rem;
    line-height: 9rem;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
`;

const Arrow = styled.img`
  width: 8rem;
  position: absolute;
  bottom: -4rem;
  right: 10%;
  transform: scale(-1, 1);

  @media (min-width: 960px) {
    width: 11rem;
    bottom: -5rem;
    left: 10%;
    transform: scale(1, 1);
  }
`;

const Header = () => {
  return (
    <Container>
      <Navbar />
      <FlexContainer>
        <HeaderText>Your partner for an epic design system journey</HeaderText>
        <Button label={"Join us"} icon={BrandShape} />
      </FlexContainer>
      <Arrow src={DownArrow} alt="decorative down arrow - not for clickable" />
    </Container>
  );
};

export default Header;
