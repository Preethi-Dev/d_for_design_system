import React from "react";
import styled from "styled-components";

//components
import Logo from "../../components/Logo";
import Button from "../Button";

//hooks
import useWindowSize from "../../hooks/useWindowSize";

//assets
import BrandShape from "../../assets/icons/brand_shape_01.svg";
import Menu from "./components/Menu";

const Container = styled.div`
  background-color: var(--tertiary-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-radius: 4rem;
  max-width: 88rem;
  margin: 0 auto;
`;

const Seperator = styled.div`
  width: 2px;
  height: 40px;
  background: #f5f5f5;
`;

const NavWrapper = styled.div`
  display: flex;
  padding: 0.75rem 3rem 0.75rem 2.5rem;
  align-items: center;
  gap: 3rem;
`;

const NavItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const NavItem = styled.a`
  text-decoration: none;
  color: var(--secondary-color);
  font-family: var(--font-primary);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
`;

const MobileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MobileLogoWrapper = styled.div`
  display: inline-flex;
  padding: 0.75rem 1.5rem;
  align-items: center;
  gap: 3rem;
  background-color: var(--tertiary-color);
  border-radius: 5rem;
`;

const Navbar = () => {
  const { width } = useWindowSize();
  const isLargerBreakpoint = width > 946;

  return isLargerBreakpoint ? (
    <Container>
      <NavWrapper>
        <Logo />
        <Seperator></Seperator>
        <NavItemContainer>
          <NavItem href="#events">Events</NavItem>
          <NavItem href="#about">About</NavItem>
          <NavItem href="#joinus">Why Join?</NavItem>
          <NavItem href="#faq">FAQ</NavItem>
        </NavItemContainer>
      </NavWrapper>
      <Button
        label={"Connect us"}
        icon={BrandShape}
        link={"https://www.linkedin.com/company/d-for-design-system/about/"}
      />
    </Container>
  ) : (
    <MobileWrapper>
      <MobileLogoWrapper>
        <Logo />
      </MobileLogoWrapper>
      <Menu />
    </MobileWrapper>
  );
};

export default Navbar;
