import React, { useState } from "react";
import styled from "styled-components";

//asstes
import DownArrow from "../../assets/icons/DownArrow.svg";

const Container = styled.div`
  color: #1e1e1e;
  width: 100%;
  background: #eef1ee;
  border-radius: 1rem;
`;

const CollapseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const CollapseHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  justify-content: space-between;
  cursor: pointer;
`;

const CollapseContent = styled.div`
  font-family: var(--font-primary);
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.25rem; /* 150% */
  opacity: 0.8;
  padding: 1.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
`;

const Label = styled.div`
  font-family: var(--font-secondary);
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2.25rem;

  @media (min-width: 1200px) {
    font-size: 2.5rem;
    line-height: 3.5rem;
  }
`;

const Collapse = ({ items, defaultKey = 1 }) => {
  const [openIndex, setOpenIndex] = useState(defaultKey);

  const clickHandler = (key) => {
    setOpenIndex(Number(openIndex) === Number(key) ? null : key); // Toggle the selected index
  };

  return (
    <CollapseContainer>
      {items.map((item, index) => (
        <Container key={index}>
          <CollapseHeader onClick={() => clickHandler(item.key)}>
            <Label>{item.label}</Label>
            <img src={DownArrow} alt="" />
          </CollapseHeader>
          {Number(openIndex) === Number(item.key) && (
            <CollapseContent>{item.children}</CollapseContent>
          )}
        </Container>
      ))}
    </CollapseContainer>
  );
};

export default Collapse;
