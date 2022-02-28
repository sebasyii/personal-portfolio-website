import { Box, BoxProps } from '@chakra-ui/react';
import Image from 'next/image';

const ChakraNextImage = ({
  src,
  alt,
  ...rest
}: { src: string; alt: string } & Omit<BoxProps, 'as'>) => {
  return (
    <Box position="relative" {...rest}>
      <Image objectFit="cover" layout="fill" src={src} alt={alt} />
    </Box>
  );
};

export default ChakraNextImage;
