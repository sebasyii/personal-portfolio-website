import {
  Box,
  Stack,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import React from "react";
import Logo from "../shared/Logo";

import { SocialMediaLinks } from "./SocialMediaLinks";

const Footer = () => {
  const backgroundColor = useColorModeValue("white", "gray.800");
  return (
    <Box
      as="footer"
      px={{ base: "4", md: "8" }}
      py="12"
      bg={backgroundColor}
      role="contentinfo"
    >
      <Box maxW="7xl" mx="auto">
        <Stack>
          <Stack
            align="center"
            justify="space-between"
            direction="row"
            spacing={4}
          >
            <Box as="a" display="inline" href="/" rel="home">
              <VisuallyHidden>
                Sebastian Yii&#39;s Portfolio Logo
              </VisuallyHidden>
              <Logo h={12} />
            </Box>
            <SocialMediaLinks />
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
