import styled from "styled-components";

//components
import Header from "./sections/Header";
import CommunityIntro, { CommunityMemberIntro } from "./sections/Intro";
import JoinUs from "./sections/JoinUs";
import HowItHelps from "./sections/HowItHelps";
import Ticket from "./sections/Ticket";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";

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
      <Ticket />
      <FAQ />
      <Footer />
    </Container>
  );
}

export default App;
