import {
  Box,
  Heading,
  Button,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

const ContactMe = () => {
  const subtleText = useColorModeValue('gray.800', 'gray.500');
  return (
    <Box as="section">
      <Box
        maxW="4xl"
        mx="auto"
        px={{ base: '6', lg: '8' }}
        py={{ base: '16', sm: '20' }}
        textAlign="center"
      >
        <Heading
          as="h2"
          fontWeight="extrabold"
          letterSpacing="tight"
          size="2xl"
        >
          Get In Touch
        </Heading>
        <Text mt="4" color={subtleText} fontSize="lg">
          While I am not looking for a new job at this time, if you would like
          to ask me anything, feel free to contact me. I will do my best to get
          back to you as soon as possible.
        </Text>
        <Button
          as="a"
          mt="8"
          fontWeight="bold"
          colorScheme="brand"
          href="#"
          size="lg"
        >
          Contact Me
        </Button>
      </Box>
    </Box>
  );
};

export default ContactMe;
