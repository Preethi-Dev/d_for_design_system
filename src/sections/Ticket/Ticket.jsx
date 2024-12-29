import React from "react";
import styled from "styled-components";

//assets
import EventTicket from "../../assets/images/Bangalore_first_event_ticket.png";
import MobileEventTicket from "../../assets/images/mobile_Bangalore_first_event_ticket.svg";

//hooks
import useWindowSize from "../../hooks/useWindowSize";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 4.5rem;

  @media (min-width: 450px) {
    padding: 12.5rem 1rem;
  }
`;

const TicketImage = styled.img`
  width: 100%;
  height: 100%;

  @media (min-width: 450px) {
    max-width: 72.125rem;
    max-height: 23.5rem;
  }
`;

const Ticket = () => {
  const { width } = useWindowSize();
  const isMobileBreakpoint = width <= 450;

  return (
    <Container>
      <TicketImage
        src={isMobileBreakpoint ? MobileEventTicket : EventTicket}
        alt="D for design system's first event going to happen in bangalore"
      />
    </Container>
  );
};

export default Ticket;
