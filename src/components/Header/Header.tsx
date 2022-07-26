import {
  Box,
  HStack,
  Divider,
  Heading,
  Stack,
  Button,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const Header = () => {
  const textColor = useColorModeValue("black", "white");
  const textHoverColor = useColorModeValue("brand.600", "brand.200");
  const backgroundColor = useColorModeValue("white", "gray.800");

  return (
    <Box as="section" py={{ base: 24, sm: 32, md: 56 }} bg={backgroundColor}>
      <Box maxW="6xl" mx="auto" px={{ base: 6, md: 8 }}>
        <Box maxW="xl">
          <HStack>
            <Text
              color={textHoverColor}
              fontFamily={"Space Mono"}
              fontSize={{ sm: "md", md: "md", lg: "lg" }}
            >
              Hi, My name is
            </Text>
            <Divider w={24} borderColor={textHoverColor} />
          </HStack>
          <Heading
            as="h1"
            color={textColor}
            fontSize={{ base: "5xl", md: "6xl" }}
            fontWeight="extrabold"
          >
            Sebastian Yii.
          </Heading>
          <Text
            maxW="lg"
            mt={3}
            color={textColor}
            fontFamily="heading"
            fontSize={{ base: "lg", md: "lg" }}
          >
            Developer and creator based in Singapore, working on building fun
            and useful apps. I love solving problems, and I&#39;m always excited
            to learn new things.
          </Text>
          <Stack direction={{ base: "row", sm: "row" }} mt="10" spacing="4">
            <Button
              as="a"
              colorScheme="brand"
              href="mailto:sebastian.yii.xh@gmail.com"
              rounded="lg"
              size={"lg"}
            >
              Get In Touch
            </Button>
            <Button
              as="a"
              colorScheme="brand"
              href="#projects"
              rounded="lg"
              size="lg"
              variant="outline"
            >
              See Works
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
