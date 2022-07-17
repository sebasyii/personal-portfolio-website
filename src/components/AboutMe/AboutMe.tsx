import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import {
  SiDocker,
  SiJavascript,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiSolidity,
} from "react-icons/si";
import ChakraNextImage from "../common/ChakraNextImage";
import DotGrid from "../common/DotGrid";
import Language from "./Language";

const AboutMe = () => {
  const textColor = useColorModeValue("brand.600", "brand.200");
  const backgroundColor = useColorModeValue("white", "gray.800");
  return (
    <Box
      as="section"
      pt={{ base: 8, md: 16 }}
      pb={{ base: 12, md: 24 }}
      bg={backgroundColor}
      id="about"
    >
      <Box pos="relative" maxW="5xl" mx="auto" px={{ base: 6, md: 8 }}>
        <DotGrid
          width={30}
          height={20}
          radius={5}
          space={15}
          pos="absolute"
          right={-250}
          top={{ base: 20, md: 0 }}
        />
        <HStack mb={2} spacing={3}>
          <Heading
            color={textColor}
            fontFamily="Space Mono"
            fontSize={{ base: "2xl", md: "4xl" }}
          >
            About Me
          </Heading>
          <Divider w={48} borderColor={textColor} />
        </HStack>
        <Flex
          direction={{ base: "column-reverse", md: "row" }}
          gap={{ base: 2, md: 10 }}
        >
          <Box flex={{ base: 1, md: 2 }} mt={4}>
            <Text
              mb={4}
              fontFamily="heading"
              fontSize={{ base: "md", md: "lg" }}
            >
              Hello there! I&#39;m Sebastian. I enjoy solving problems with
              code. My first experience with programming was when I was 14. I
              was a gamer, and I liked gaining an unfair advantage over others,
              so I started messing around with programs like Cheat Engine and
              watching hacking tutorials. I eventually started dabbling in
              developing games as well.
            </Text>
            <Text
              mb={4}
              fontFamily="heading"
              fontSize={{ base: "md", md: "lg" }}
            >
              Fast forward to today, I&#39;ve had the privilege to assist
              several local businesses in expanding their online presence
              through the web development skills I have developed over the
              years.
            </Text>
            <Text
              mb={4}
              fontFamily="heading"
              fontSize={{ base: "md", md: "lg" }}
            >
              Here are some technologies I&#39;ve been learning recently:
            </Text>
            <SimpleGrid
              maxW="sm"
              mx={{ base: "auto", md: "revert" }}
              columns={{ base: 2, md: 2 }}
              spacingX={2}
              spacingY={3}
            >
              <Language title={"Next.js"} icon={<SiNextdotjs />} />
              <Language title={"Docker"} icon={<SiDocker />} />
              <Language title={"Python"} icon={<SiPython />} />
              <Language title={"React"} icon={<SiReact />} />
              <Language title={"Javascript (ES6+)"} icon={<SiJavascript />} />
              <Language title={"Solidity"} icon={<SiSolidity />} />
            </SimpleGrid>
          </Box>

          <Box mx="auto">
            <ChakraNextImage
              src="/profile-image.jpg"
              alt="A Profile photo of me"
              width={300}
              height={300}
              flex={{ base: 1, md: 2 }}
              rounded="lg"
              overflow="hidden"
              my={6}
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default AboutMe;
