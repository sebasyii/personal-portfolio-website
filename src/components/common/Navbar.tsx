import {
  Box,
  Button,
  chakra,
  CloseButton,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  Slide,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  return (
    <Slide
      direction="top"
      in={true}
      transition={{ enter: { duration: 0.5, delay: 0.01 } }}
      style={{
        zIndex: 10,
      }}
    >
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="sm"
      >
        <Container maxW="7xl" py={5}>
          <Flex alignItems="center" justifyContent="space-between" mx="auto">
            <Flex>
              <NextLink href="/" passHref>
                <Heading
                  fontSize="xl"
                  fontWeight="semibold"
                  ml="2"
                  fontFamily="Inter"
                  letterSpacing="wide"
                  cursor="pointer"
                >
                  Sebastian Yii
                </Heading>
              </NextLink>
            </Flex>
            <HStack display="flex" alignItems="center" spacing={1}>
              <HStack
                spacing={7}
                mr={1}
                color="brand.500"
                display={{ base: "none", md: "inline-flex" }}
              >
                <Button
                  variant="link"
                  _hover={{
                    textDecoration: "none",
                    color: "#6AABD7",
                  }}
                >
                  About
                </Button>
                <Link href="#experience">
                  <Button
                    variant="link"
                    _hover={{
                      textDecoration: "none",
                      color: "#6AABD7",
                    }}
                  >
                    Experience
                  </Button>
                </Link>
                <Button
                  variant="link"
                  _hover={{
                    textDecoration: "none",
                    color: "#6AABD7",
                  }}
                >
                  My Projects
                </Button>
                <Button
                  variant="link"
                  _hover={{
                    textDecoration: "none",
                    color: "#6AABD7",
                  }}
                >
                  Contact Me
                </Button>
              </HStack>
              <Box display={{ base: "inline-flex", md: "none" }}>
                <IconButton
                  display={{ base: "flex", md: "none" }}
                  aria-label="Open menu"
                  fontSize="20px"
                  color={useColorModeValue("gray.800", "inherit")}
                  variant="ghost"
                  icon={<HamburgerIcon />}
                  onClick={mobileNav.onOpen}
                />

                <VStack
                  pos="absolute"
                  top={0}
                  left={0}
                  right={0}
                  display={mobileNav.isOpen ? "flex" : "none"}
                  flexDirection="column"
                  p={2}
                  pb={4}
                  m={2}
                  bg={bg}
                  spacing={3}
                  rounded="sm"
                  shadow="sm"
                >
                  <CloseButton
                    aria-label="Close menu"
                    onClick={mobileNav.onClose}
                  />

                  <Button w="full" variant="ghost">
                    About
                  </Button>
                  <Button w="full" variant="ghost">
                    Experience
                  </Button>
                  <Button w="full" variant="ghost">
                    My Projects
                  </Button>
                  <Button w="full" variant="ghost">
                    Contact Me
                  </Button>
                </VStack>
              </Box>
            </HStack>
          </Flex>
        </Container>
      </chakra.header>
    </Slide>
  );
};

export default Navbar;
