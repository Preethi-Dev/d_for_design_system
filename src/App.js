import styled from "styled-components";
import Header from "./sections/Header";
import CommunityIntro, { CommunityMemberIntro } from "./sections/Intro";
import JoinUs from "./sections/JoinUs/JoinUs";
import HowItHelps from "./sections/HowItHelps/HowItHelps";

const Container = styled.div`
  background-color: var(--secondary-color);
`;

function App() {
  return (
    <Container>
      <Header />
      <CommunityIntro />
      <CommunityMemberIntro />
      <JoinUs />
      <HowItHelps />
    </Container>
  );
}

export default App;
