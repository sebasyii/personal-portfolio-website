import {
  Box,
  Button,
  Container,
  ContainerProps,
  Divider,
  Flex,
  Heading,
  IconButton,
  SlideFade,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Header = (props: ContainerProps) => {
  return (
    <Container maxW={"7xl"} {...props}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 72 }}
        direction={{ base: "column", md: "row" }}
      >
        <Flex direction="column">
          <SlideFade
            in={true}
            transition={{ enter: { duration: 0.4, delay: 0.7 } }}
          >
            <Flex direction="row" align="center">
              <Text as={"span"} fontSize="xl" color="#6AABD7">
                Hi, my name is
              </Text>
              <Flex width={24} ml={3}>
                <Divider backgroundColor="#6AABD7" />
              </Flex>
            </Flex>

            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "7xl" }}
              mb={3}
            >
              Sebastian Yii.
            </Heading>
            <Text
              color="gray.400"
              maxW="2xl"
              lineHeight={1.4}
              mb={5}
              fontFamily="Inter"
              fontSize="lg"
            >
              I am a developer based in Singapore, working on building fun and
              useful apps. I love solving problems, and I&#x27;m always excited
              to learn new things.
            </Text>
          </SlideFade>
          <SlideFade
            in={true}
            transition={{ enter: { duration: 0.4, delay: 0.8 } }}
          >
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
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
                Get In Touch
              </Button>
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
            </Stack>
          </SlideFade>
        </Flex>
      </Stack>
    </Container>
  );
};

export default Header;
