import React, { useEffect, useRef, useMemo } from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link, useDisclosure } from "@chakra-ui/react";
import { SocialButton } from "./SocialButton";
import { MobileMenuDrawer } from "./MobileMenuDrawer";

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

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const headerRef = useRef(null);
  useEffect(() => {
    let previousScrollY = window.scrollY;
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 0 && window.scrollY > previousScrollY) {
          //if the user is scrolling down, hide the header
          headerRef.current.style.transform = "translateY(-200px)";
          previousScrollY = window.scrollY;
        } else {
          //if the user is scrolling up, show the header
          headerRef.current.style.transform = "translateY(0)";
          previousScrollY = window.scrollY;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isSmallScreen =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    onClose(); // Close the drawer when a link is clicked
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
      ref={headerRef}
    >
      <Box color="white" margin="0 auto">
        <HStack
          px={[2, 12]}
          py={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            {socials.map((props) => (
              <SocialButton key={props.url} {...props} />
            ))}
          </nav>
          {isSmallScreen ? (
            <MobileMenuDrawer
              handleClick={handleClick}
              onClose={onClose}
              isOpen={isOpen}
              onOpen={onOpen}
            />
          ) : (
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
