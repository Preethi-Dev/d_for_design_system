import React from "react";
import styled from "styled-components";
import MenuIcon from "../../../assets/icons/menu.svg";

const Container = styled.div`
  display: inline-flex;
  padding: 0.75rem;
  align-items: center;
  gap: 3rem;
  border-radius: 5rem;
  background: #fff;
`;

const Menu = () => {
  return (
    <Container>
      <img src={MenuIcon} alt="" />
    </Container>
  );
};

export default Menu;
