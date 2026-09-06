import { Heading, HStack, Image, Text, VStack,Button,Box } from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const CustomCard = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box shadow='dark-lg'  rounded='lg' color='black' backgroundColor='white' maxWidth='800' >
      <VStack display='flex' alignItems='start' >
        <Image src={imageSrc} alt={title} roundedTop='lg' />
        <VStack display='flex' alignItems='start' padding='4'>
        <Heading size='md'>{title}</Heading>
        <Text color='grey'>{description}</Text>
        <Button variant='link' aria-label='button see more' role='button'>
              <HStack alignItems='center'> <Text>See more</Text> <FontAwesomeIcon icon={faArrowRight} /> </HStack>
        </Button>
           </VStack>
          </VStack>
   </Box>)
};

export default CustomCard;
