import React, { useEffect, useRef, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link } from "@chakra-ui/react";
import { SocialButton } from "./SocialButton";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;

console.log(isSmallScreen);
const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex={999}
    >
      <Box color="white" margin="0 auto">
        <HStack
          px={[4, 16]}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            {socials.map((props) => (
              <SocialButton key={props.url} {...props} />
            ))}
          </nav>
          {isSmallScreen ? null : (
            <nav>
              <HStack spacing={4}>
                {/* Add links to Projects and Contact me section */}
                <Link onClick={handleClick("home")}>Home</Link>
                <Link onClick={handleClick("projects")}>Projects</Link>
                <Link onClick={handleClick("contact")}>Contact Me</Link>
              </HStack>
            </nav>
          )}
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
