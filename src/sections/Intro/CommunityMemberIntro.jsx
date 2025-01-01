import React from "react";
import styled from "styled-components";

//components
import Card from "../../components/Card";

//assets
import Keerthi from "../../assets/images/keerthi.png";
import Preethi from "../../assets/images/preethi.png";
import ShivaGanesh from "../../assets/images/shivaganesh.png";

const Container = styled.div`
  background-color: var(--primary-bg);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  overflow: hidden;
  padding: 5rem 1rem;

  @media (min-width: 1200px) {
    flex-wrap: no-wrap;
    padding: 0;
  }
`;

export const CommunityMemberIntro = () => {
  return (
    <Container>
      <Card
        image={Keerthi}
        name="Keerthi"
        description="Founder"
        rope={"Rope01"}
      />
      <Card
        image={Preethi}
        name="Preethi"
        description="Founding Member"
        rope={"Rope02"}
      />
      <Card
        image={ShivaGanesh}
        name="Shiva Ganesh"
        description="Founding Member"
        rope={"Rope03"}
      />
    </Container>
  );
};
