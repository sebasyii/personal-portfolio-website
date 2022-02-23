import { Container, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Flex>
      <Container
        py={5}
        maxW="7xl"
        borderTop="1px"
        borderColor="#EBE6E350"
        borderTopWidth="thin"
      >
        <Flex justifyContent="space-between">
          <Text>Sebastian Yii</Text>
          <Text>2022</Text>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Footer;
