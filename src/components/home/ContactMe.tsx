import {
  Box,
  chakra,
  useColorModeValue,
  Stack,
  Heading,
  Button,
  Link,
} from "@chakra-ui/react";
import React from "react";

const ContactMe = () => {
  return (
    <Box pos="relative" overflow="hidden">
      <Box maxW="7xl" mx="auto">
        <Box
          pos="relative"
          pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
          w="full"
          border="solid 1px transparent"
        >
          <Box
            mx="auto"
            maxW={{ base: "7xl" }}
            px={{ base: 4, sm: 6, lg: 8 }}
            mt={{ base: 12, md: 16, lg: 20, xl: 28 }}
          >
            <Box
              textAlign="center"
              w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
              mx="auto"
            >
              <Heading fontSize="5xl">Get In Touch</Heading>
              <chakra.p
                mt={{ base: 3, sm: 5, md: 5 }}
                mx={{ sm: "auto", lg: 0 }}
                mb={6}
                fontSize={{ base: "lg", md: "xl" }}
                color="gray.500"
                lineHeight="base"
                fontFamily="Inter"
              >
                While I am not looking for a new job at this time, if you would
                like to ask me anything, feel free to contact me. I will do my
                best to get back to you as soon as possible.
              </chakra.p>
              <Link
                href="mailto:syii.xh@gmail.com"
                _hover={{
                  textDecoration: "none",
                }}
                isExternal
              >
                <Button
                  rounded="base"
                  size="lg"
                  fontWeight={"normal"}
                  px={6}
                  variant="outline"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                >
                  Get in Touch
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactMe;
