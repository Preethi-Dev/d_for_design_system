import React, { useState } from "react";
import styled from "styled-components";

//components
import Button from "../../Button";

//hooks
import useWindowSize from "../../../hooks/useWindowSize";

//assets
import BrandShape from "../../../assets/icons/brand_shape_01.svg";
import MenuIcon from "../../../assets/icons/menu.svg";
import CloseIcon from "../../../assets/icons/menu_close.svg";

const Container = styled.div`
  display: inline-flex;
  padding: 0.75rem;
  align-items: center;
  gap: 3rem;
  border-radius: 5rem;
  background: #fff;
  position: relative;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 5.5rem;
  right: 1.5rem;
  height: 80vh;
  z-index: 99;
  width: ${(props) => props.$width}px;
  background-color: var(--primary-bg);
  border-radius: 1rem;
  padding: 2.5rem;
`;

const NavItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavItem = styled.a`
  padding: 1rem 0.5rem;
  color: var(--secondary-color);
  font-family: var(--font-primary);
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem; /* 150% */
  border-bottom: 1px solid #ebebeb;
  text-decoration: none;
`;

const Menu = () => {
  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Container onClick={handleMenuClick}>
        {isOpen ? (
          <img src={CloseIcon} alt="close menu" />
        ) : (
          <img src={MenuIcon} alt="menu" />
        )}
      </Container>
      {isOpen && (
        <NavContainer $width={width - 48} onClick={handleMenuClick}>
          <NavItemContainer>
            <NavItem href="#events">Events</NavItem>
            <NavItem href="#about">About</NavItem>
            <NavItem href="#joinus">Why Join?</NavItem>
            <NavItem href="#faq">FAQ</NavItem>
          </NavItemContainer>

          <Button
            label={"Connect us"}
            icon={BrandShape}
            link={"https://www.linkedin.com/company/d-for-design-system/about/"}
          />
        </NavContainer>
      )}
    </>
  );
};

export default Menu;
