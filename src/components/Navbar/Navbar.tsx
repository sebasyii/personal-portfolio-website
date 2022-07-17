import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

import { FiMenu, FiMoon, FiSun } from "react-icons/fi";

import React from "react";
import Logo from "../shared/Logo";

import useSound from "use-sound";
import ButtonWithDropdown from "../common/ButtonWithDropdown";
import { AnimatePresence, motion } from "framer-motion";

import NextLink from "next/link";

const links = [
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Posts",
    href: "/posts",
  },
  {
    label: "Contact Me",
    href: "mailto:sebastian.yii.xh@gmail.com",
  },
];

const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const [playToggle] = useSound("../audio/switch-audio.mp3");

  return (
    <Box
      as="nav"
      bg="bg-surface"
      borderBottomWidth="1px"
      boxShadow={useColorModeValue("sm", "sm-dark")}
    >
      <Container py={{ base: "4", lg: "5" }}>
        <HStack justify="space-between" spacing="10">
          <Flex justify="space-between" flex="1">
            <Logo />
            {isDesktop ? (
              <ButtonGroup spacing="8" variant="link">
                {links.map((item, key) => {
                  // coniditional
                  if (item.label === "Posts") {
                    return (
                      <ButtonWithDropdown
                        key={`navlink-${key}`}
                        label={item.label}
                      />
                    );
                  }
                  return (
                    <NextLink key={`navlink-${key}`} href={item.href} passHref>
                      <Button as="a">{item.label}</Button>
                    </NextLink>
                  );
                })}

                <IconButton
                  as={motion.button}
                  aria-label="Dark and Light Mode Switch Icon Button"
                  icon={
                    <AnimatePresence exitBeforeEnter initial={false}>
                      {colorMode === "light" ? (
                        <motion.div
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          key="light"
                        >
                          <FiMoon fontSize="1.25rem" />
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          key="dark"
                        >
                          <FiSun fontSize="1.25rem" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  }
                  onClick={() => {
                    onToggle();
                    toggleColorMode();
                    playToggle();
                  }}
                  variant="ghost"
                  whileTap={{ scale: 0.9 }}
                />
              </ButtonGroup>
            ) : (
              <IconButton
                aria-label="Open Menu"
                icon={<FiMenu fontSize="1.25rem" />}
                variant="ghost"
              />
            )}
          </Flex>
        </HStack>
      </Container>
    </Box>
  );
};

export default Navbar;
