import { Flex, Stack, Text, useColorModeValue } from '@chakra-ui/react';

const MobileNav = () => {
  return (
    <Stack d={{ md: 'none' }} p={6} bg={useColorModeValue('white', 'gray.800')}>
      <Flex py={2}>
        <Text
          color={useColorModeValue('gray.600', 'gray.200')}
          fontWeight={600}
        >
          About
        </Text>
      </Flex>
      <Flex py={2}>
        <Text
          color={useColorModeValue('gray.600', 'gray.200')}
          fontWeight={600}
        >
          About
        </Text>
      </Flex>
      <Flex py={2}>
        <Text
          color={useColorModeValue('gray.600', 'gray.200')}
          fontWeight={600}
        >
          About
        </Text>
      </Flex>
    </Stack>
  );
};

export default MobileNav;
