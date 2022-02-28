// 1. Import and rename Chakra UI Link
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

// 2. Import Next.js Link
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import React from 'react';

const ChakraNextLink = (props: NextLinkProps & ChakraLinkProps) => {
  const { children, href, ...rest } = props;
  // 3. Next.js will clone Chakra UI's Link
  // And add routing capabilities
  return (
    <NextLink passHref href={href}>
      <ChakraLink {...rest}>{children}</ChakraLink>
    </NextLink>
  );
};

export default ChakraNextLink;
