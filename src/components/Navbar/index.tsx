import {
  Box,
  Flex,
  HStack,
  useColorModeValue,
  VisuallyHidden,
  useDisclosure,
  IconButton,
  Collapse,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import ChakraNextLink from '../common/ChakraNextLink';
import Logo from './Logo';
import MobileNav from './MobileNav';

import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';

// Create a list of links to be rendered in the navbar
const navLinks = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Contact Me',
    href: '/contact',
  },
];

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const boxBg = useColorModeValue('white', 'gray.800');
  const textHoverColor = useColorModeValue('brand.600', 'brand.200');

  // TODO: Change this to Next.js Link with Box

  return (
    <Box as="header" bg={boxBg} borderBottomWidth="1px">
      <Box maxW="7xl" mx="auto" px={{ base: 6, md: 8 }} py={4}>
        <Flex as="nav" align="center" justify="space-between">
          <Box as="a" href="#" rel="home">
            <VisuallyHidden>Sebastian Yii&#39;s Portfolio Logo</VisuallyHidden>
            <Logo h={12} />
          </Box>
          <HStack
            d={{ base: 'none', md: 'flex' }}
            fontFamily="Space Mono"
            _hover={{
              textDecoration: 'none',
            }}
            spacing={8}
          >
            {navLinks.map((link) => (
              <ChakraNextLink
                key={link.name}
                href={link.href}
                transition="all 0.2s"
                fontWeight="medium"
                _hover={{
                  textDecoration: 'none',
                  color: textHoverColor,
                }}
              >
                {link.name}
              </ChakraNextLink>
            ))}

            <IconButton
              aria-label="Switch Color Mode"
              colorScheme="brand"
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
            />
          </HStack>

          <IconButton
            d={{ base: 'flex', md: 'none' }}
            aria-label={'Toggle Navigation'}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            onClick={onToggle}
            variant="ghost"
          />
        </Flex>
      </Box>
      <Collapse animateOpacity in={isOpen}>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

export default Navbar;
