import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  chakra,
  Container,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <Container maxW="7xl" id="experience">
      <SimpleGrid
        alignItems="center"
        columns={{ base: 1, md: 2 }}
        flexDirection="column-reverse"
        mb={24}
        spacingY={{ base: 10, md: 32 }}
        spacingX={{ base: 10, md: 24 }}
      >
        <Box order={{ base: "none", md: 2 }}>
          <Heading
            mb={4}
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="extrabold"
            letterSpacing="tight"
            textAlign={{ base: "center", md: "left" }}
            color={useColorModeValue("gray.900", "white")}
            lineHeight={{ md: "shorter" }}
          >
            About Me
          </Heading>
          <chakra.p
            mb={5}
            textAlign={{ base: "center", sm: "left" }}
            color={useColorModeValue("gray.600", "gray.400")}
            fontSize={{ md: "lg" }}
            fontFamily="Inter"
          >
            Hello there! I&#39;m Sebastian. I enjoy solving problems with code.
            My first experience with programming was when I was 14. I was a
            gamer, and I liked gaining an unfair advantage over others, so I
            started messing around with programs like Cheat Engine and watching
            hacking tutorials. I eventually started dabbling in developing games
            as well.
            <br />
            <br />
            Fast forward to today, I&#39;ve had the privilege to assist several
            local businesses in expanding their online presence through the web
            development skills I have developed over the years.
            <br />
            Here are some technologies I&#39;ve been learning recently:
            <Stack direction="row" my={10} spacing={20}>
              <Box>
                <List spacing={2} fontSize="md">
                  <ListItem>
                    <ListIcon
                      as={ChevronRightIcon}
                      color="#6AABD7"
                      fontWeight="bold"
                      fontSize="lg"
                    />
                    Next.js
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={ChevronRightIcon}
                      color="#6AABD7"
                      fontWeight="bold"
                      fontSize="lg"
                    />
                    React
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={ChevronRightIcon}
                      color="#6AABD7"
                      fontWeight="bold"
                      fontSize="lg"
                    />
                    Javascript (ES6+)
                  </ListItem>
                </List>
              </Box>
              <Box>
                <List spacing={2} fontSize="md">
                  <ListItem>
                    <ListIcon
                      as={ChevronRightIcon}
                      color="#6AABD7"
                      fontWeight="bold"
                      fontSize="lg"
                    />
                    Python
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={ChevronRightIcon}
                      color="#6AABD7"
                      fontWeight="bold"
                      fontSize="lg"
                    />
                    Docker
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={ChevronRightIcon}
                      color="#6AABD7"
                      fontWeight="bold"
                      fontSize="lg"
                    />
                    Solidity
                  </ListItem>
                </List>
              </Box>
            </Stack>
          </chakra.p>
          <Button
            rounded="base"
            size="lg"
            fontWeight={"normal"}
            px={6}
            variant="solid"
            _hover={{
              transform: "scale(1.05)",
            }}
          >
            My Works
          </Button>
        </Box>
        <Box
          // bg={useColorModeValue("gray.200", "gray.700")}

          pos="relative"
        >
          <Image
            src="/profile-image.png"
            layout="responsive"
            width="700px"
            height={700}
            objectFit="contain"
            alt="A picture of me - Sebastian"
          />
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default AboutMe;
