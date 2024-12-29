import React from "react";
import styled from "styled-components";

//components
import Button from "../../components/Button";

//assets
import BrandShape from "../../assets/icons/brand_shape_02.svg";
import FooterDecorative from "../../assets/images/footer_decorative.svg";
import FooterNav from "./FooterNav";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--secondary-color);

  min-height: 100vh;
  max-height: 65.375rem;
`;

const FinalCTA = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: start;
  gap: 2.5rem;
`;

const FinalTitle = styled.div`
  color: var(--tertiary-color);
  font-family: var(--font-primary);
  font-size: 3.25rem;
  font-weight: 500;
  line-height: 100%;

  @media (min-width: 960px) {
    font-size: 7.25rem;
    line-height: 7.5rem; /* 103.448% */
  }
`;

const FootDecorative = styled.img`
  width: 100%;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4.5rem 1.5rem;
  gap: 3rem;

  @media (min-width: 960px) {
    flex-direction: row;
    padding: 10rem 10rem 6rem 10rem;
  }
`;

const Footer = () => {
  return (
    <Container>
      <FlexContainer>
        <FinalCTA>
          <FinalTitle>
            D for{" "}
            <img width={"25%"} src={BrandShape} alt="Brand shape decorative" />
            <br />
            Design System
          </FinalTitle>
          <Button label={"Join us"} theme="light" />
        </FinalCTA>
        <FooterNav />
      </FlexContainer>
      <FootDecorative src={FooterDecorative} alt="" />
    </Container>
  );
};

export default Footer;
