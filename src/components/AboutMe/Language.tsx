import { Stack, Box, Text } from '@chakra-ui/react';
import React from 'react';

type LanguageProps = {
  title: string;
  icon: React.ReactElement;
};

const Language = (props: LanguageProps) => {
  const { title, icon } = props;
  return (
    <Stack
      align="center"
      direction={{ base: 'column', sm: 'row' }}
      spacing={{ base: '2', md: '3' }}
    >
      <Box fontSize="md">{icon}</Box>
      <Stack spacing="1">
        <Text fontFamily="Space Mono" fontSize="md" fontWeight="semibold">
          {title}
        </Text>
      </Stack>
    </Stack>
  );
};

export default Language;
