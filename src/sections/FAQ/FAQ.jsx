import React from "react";
import styled from "styled-components";
import Title from "../../components/Title";
import Collapse from "../../components/Collapse/Collapse";

const items = [
  {
    key: "1",
    label: "How do I join the community?",
    children: (
      <p>
        Think of it like your trusty toolbox that helps you build consistent,
        scalable designs across all platforms. You’ll love it once you try it!
      </p>
    ),
  },
  {
    key: "2",
    label: "What is a design system anyway?",
    children: (
      <p>
        Think of it like your trusty toolbox that helps you build consistent,
        scalable designs across all platforms. You’ll love it once you try it!
      </p>
    ),
  },
  {
    key: "3",
    label: "Can I contribute even if I’m new?",
    children: (
      <p>
        Think of it like your trusty toolbox that helps you build consistent,
        scalable designs across all platforms. You’ll love it once you try it!
      </p>
    ),
  },
];

const Container = styled.div`
  background-color: var(--primary-bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1rem 10rem;
`;

const CollapseWrapper = styled.div`
  width: 100%;
  max-width: 62rem;
`;

const FAQ = () => {
  return (
    <Container>
      <Title>FAQ</Title>
      <CollapseWrapper>
        <Collapse items={items} defaultKey={2} />
      </CollapseWrapper>
    </Container>
  );
};

export default FAQ;
