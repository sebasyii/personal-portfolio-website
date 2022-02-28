import {
  Box,
  Heading,
  Stack,
  Button,
  HStack,
  Text,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

const Header = () => {
  const textColor = useColorModeValue('black', 'white');
  const textHoverColor = useColorModeValue('brand.600', 'brand.200');

  return (
    <Box py={{ base: 24, sm: 32, md: 56 }}>
      <Box maxW="6xl" mx="auto" px={{ base: 6, md: 8 }}>
        <Box maxW="xl">
          <HStack>
            <Text
              color={textHoverColor}
              fontFamily="Space Mono"
              fontSize={{ sm: 'sm', md: 'md', lg: 'lg' }}
            >
              Hi, My name is
            </Text>
            <Divider w={24} borderColor={textHoverColor} />
          </HStack>
          <Heading
            as="h1"
            color={textColor}
            fontSize={{ base: '4xl', md: '6xl' }}
            fontWeight="extrabold"
          >
            Sebastian Yii.
          </Heading>
          <Text
            maxW="lg"
            mt={3}
            color={textColor}
            fontSize={{ base: 'sm', md: 'lg' }}
          >
            I am a developer based in Singapore, working on building fun and
            useful apps. I love solving problems, and I&#39;m always excited to
            learn new things.
          </Text>
          <Stack direction={{ base: 'column', sm: 'row' }} mt="10" spacing="4">
            <Button as="a" colorScheme="brand" href="#" rounded="lg" size="lg">
              Get In Touch
            </Button>
            <Button
              as="a"
              colorScheme="brand"
              href="#"
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
