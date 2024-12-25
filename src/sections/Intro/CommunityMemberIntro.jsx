import React from "react";
import styled from "styled-components";

//components
import Card from "../../components/Card";

//assets
import Keerthi from "../../assets/images/keerthi.png";
import Preethi from "../../assets/images/Preethi.jpeg";

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
        description="Product Designer"
        rope={"Rope01"}
      />
      <Card
        image={Preethi}
        name="Preethi"
        description="Frontend Engineer"
        rope={"Rope02"}
      />
      <Card
        image={Keerthi}
        name="Shiva Ganesh"
        description="Visual Designer"
        rope={"Rope03"}
      />
    </Container>
  );
};
