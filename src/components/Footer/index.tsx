import { Box, Stack, VisuallyHidden } from '@chakra-ui/react';
import React from 'react';

import { SocialMediaLinks } from './SocialMediaLinks';
import Logo from '../Navbar/Logo';

const Footer = () => {
  return (
    <Box
      as="footer"
      maxW="7xl"
      mx="auto"
      px={{ base: '4', md: '8' }}
      py="12"
      role="contentinfo"
    >
      <Stack>
        <Stack
          align="center"
          justify="space-between"
          direction="row"
          spacing={4}
        >
          <Box as="a" d="inline" href="#" rel="home">
            <VisuallyHidden>Sebastian Yii&#39;s Portfolio Logo</VisuallyHidden>
            <Logo h={12} />
          </Box>
          <SocialMediaLinks />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
