import React from "react";
import styled from "styled-components";
import { ReasonCard } from "../../components/Card";
import Title from "../../components/Title";

const Container = styled.div`
  background-color: var(--primary-bg);
`;

const CardContainer = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
  justify-content: center;

  @media (min-width: 960px) {
    padding: 0 5rem;
  }
`;

const JoinUs = () => {
  return (
    <Container id="joinus">
      <Title>Why join us!</Title>
      <CardContainer>
        <ReasonCard
          cardNo={"01"}
          description={
            <>
              <span>Spread the word</span> on why design systems rock
            </>
          }
        />
        <ReasonCard
          cardNo={"02"}
          description={
            <>
              Shout out to <span>amazing design systems</span> and their
              creators.
            </>
          }
        />
        <ReasonCard
          cardNo={"03"}
          description={
            <>
              Help you <span>bridge</span> the gap between{" "}
              <span>design and dev</span>
            </>
          }
        />
        <ReasonCard
          cardNo={"04"}
          description={
            <>
              <span>Host fun events and meetups</span> where we all learn
              something new
            </>
          }
        />
      </CardContainer>
    </Container>
  );
};

export default JoinUs;
