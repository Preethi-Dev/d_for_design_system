import React from "react";
import styled from "styled-components";

// components
import Title from "../../components/Title/Title";
import { ColorCard } from "../../components/Card";

//assets
import ComplicatedJargon from "../../assets/images/complicated_jargon.gif";
import EliminateMistery from "../../assets/images/mystery.gif";
import TimeToParty from "../../assets/images/time_to_party.gif";

const Container = styled.div`
  background-color: var(--primary-bg);
  padding: 0 1rem;
  align-itms: start;
  overflow: hidden;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding-bottom: 10rem;
`;

const HowItHelps = () => {
  return (
    <Container>
      <Title>How it helps?</Title>
      <CardContainer>
        <ColorCard
          title={"No Complicated Jargon"}
          description={
            "just real talk about making design and dev smoother and more fun."
          }
          gif={ComplicatedJargon}
          color={"blue"}
        />
        <ColorCard
          title={"Eliminate Mystery"}
          description={
            "just real talk about making design and dev smoother and more fun."
          }
          gif={EliminateMistery}
          color={"red"}
        />
        <ColorCard
          title={"Design<>Dev Party"}
          description={
            "We want to build a design systems culture in India where everyone – from designers to developers to businesses – can join the party"
          }
          gif={TimeToParty}
          color={"yellow"}
        />
      </CardContainer>
    </Container>
  );
};

export default HowItHelps;
