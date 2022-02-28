import { Flex, Stack, Text, useColorModeValue } from '@chakra-ui/react';

type MobileNavProps = {
  navLinks: {
    name: string;
    href: string;
  }[];
};

const MobileNav = ({ navLinks }: MobileNavProps) => {
  const textColor = useColorModeValue('gray.600', 'gray.200');

  return (
    <Stack d={{ md: 'none' }} p={6} bg={useColorModeValue('white', 'gray.800')}>
      {navLinks.map((link) => (
        <Flex key={link.name} py={2}>
          <Text color={textColor} fontWeight={600}>
            {link.name}
          </Text>
        </Flex>
      ))}
    </Stack>
  );
};

export default MobileNav;
