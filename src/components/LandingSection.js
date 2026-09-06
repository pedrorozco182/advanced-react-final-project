import React from "react";
import { Avatar, Heading, VStack ,AbsoluteCenter} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am PJ!";
const bio1 = "A frontend software engineer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    id='home-section'
  >
    <VStack>
      <Avatar size='2xl' name='Pedro Orozco' src='https://www.pedrorozco.com/img/pedroToon.bd4efecc.jpg' />
      <Heading as="h3" size='sm' paddingTop='2' paddingBottom='12'>{greeting}</Heading>
      <Heading as="h2" size="xl">{bio1}</Heading>
      <Heading as="h2" size="xl">{bio2}</Heading>
    </VStack>
   
  </FullScreenSection>
);

export default LandingSection;
