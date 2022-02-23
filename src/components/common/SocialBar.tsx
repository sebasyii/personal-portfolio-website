import { Icon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Divider,
  Flex,
  Link,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialBar = () => {
  return (
    <Flex position="fixed" right={10} bottom={0} zIndex={30} height="350px">
      <VStack gap={2}>
        <Link isExternal href="https://github.com/sebasyii">
          <Icon as={FaGithub} fontSize={30} />
        </Link>
        <Link
          isExternal
          href="https://www.linkedin.com/in/sebastian-yii-5272841a3/"
        >
          <Icon as={FaLinkedin} fontSize={30} />
        </Link>
        <Divider
          orientation="vertical"
          height={350}
          mt={2}
          backgroundColor="red"
        />
      </VStack>
    </Flex>
  );
};

export default SocialBar;
