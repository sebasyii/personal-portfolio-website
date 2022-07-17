import {
  Box,
  Heading,
  Button,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const ContactMe = () => {
  const subtleText = useColorModeValue("black", "white");
  const backgroundColor = useColorModeValue("white", "gray.800");
  return (
    <Box as="section" bg={backgroundColor}>
      <Box
        maxW="4xl"
        mx="auto"
        px={{ base: "6", lg: "8" }}
        py={{ base: "16", sm: "20" }}
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
        <Text mt="4" color={subtleText} fontFamily="heading" fontSize="lg">
          I am currently serving full-time National Service as a Cyber
          Specialist. While I am not available for new opportunities now, if you
          would like to ask me anything, feel free to contact me. I will do my
          best to get back to you as soon as possible.
        </Text>
        <Button
          as="a"
          mt="8"
          fontWeight="bold"
          colorScheme="brand"
          href="mailto:sebastian.yii.xh@gmail.com"
          size="lg"
        >
          Contact Me
        </Button>
      </Box>
    </Box>
  );
};

export default ContactMe;
