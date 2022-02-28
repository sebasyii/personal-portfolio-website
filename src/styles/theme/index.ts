import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import colors from './colors';

import fonts from './fonts';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const customTheme = extendTheme({
  fonts,
  config,
  colors,
  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth',
      },
      'html, body': {
        overflowX: 'hidden',
        w: '100%',
        h: '100%',
      },
      '.animated-underline': {
        display: 'inline-block',
        position: 'relative',
        '&::after': {
          content: "''",
          position: 'absolute',
          transform: 'scaleX(0)',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '0.1em',
          backgroundColor: 'brand.400',
          transformOrigin: 'bottom right',
          transition: 'transform 0.25s ease-out',
        },
        '&:hover::after, a:focus::after': {
          transform: 'scaleX(1)',
          transformOrigin: 'bottom left',
        },
      },
      '.animated-text': {
        '& text': {
          stroke: 'brand.500',
          fontSize: '100px',
          fontWeight: 'extrabold',
          strokeWidth: 5,
        },
      },
    },
  },
});

export default customTheme;
