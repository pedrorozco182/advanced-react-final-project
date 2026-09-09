import {
  IconButton,
  Drawer,
  ModalOverlay as DrawerOverlay,
  DrawerContent,
  ModalCloseButton as DrawerCloseButton,
  ModalBody as DrawerBody,
  VStack,
  Link,
} from "@chakra-ui/react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";

export const MobileMenuDrawer = ({ handleClick, onClose, isOpen, onOpen }) => {
  const btnRef = useRef();
  return (
    <>
      <IconButton
        icon={<FontAwesomeIcon icon={faBars} />}
        aria-label="Open Menu"
        variant="plain"
        onClick={onOpen}
        ref={btnRef}
      />
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <VStack spacing={4}>
              {/* Add links to Projects and Contact me section */}
              <Link onClick={handleClick("home")}>Home</Link>
              <Link onClick={handleClick("projects")}>Projects</Link>
              <Link onClick={handleClick("contact")}>Contact Me</Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
