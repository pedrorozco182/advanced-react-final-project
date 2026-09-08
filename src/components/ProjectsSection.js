import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    getImageSrc: () =>
      "https://images.pexels.com/photos/27786742/pexels-photo-27786742.jpeg",
  },
  {
    title: "React Infinite Scroll",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    getImageSrc: () =>
      "https://images.pexels.com/photos/11363655/pexels-photo-11363655.jpeg",
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () =>
      "https://images.pexels.com/photos/13525125/pexels-photo-13525125.jpeg",
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () =>
      "https://images.pexels.com/photos/36746841/pexels-photo-36746841.jpeg",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      id="projects-section"
      backgroundColor="#14532d"
      isDarkBackground
      py={12}
      spacing={8}
      alignItems="center"
    >
      <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} pt={[4, 12]}>
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        gridGap={8}
        p={[8, 12]}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
