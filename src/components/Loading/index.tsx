import { Box, Center, chakra, keyframes } from '@chakra-ui/react';
import React from 'react';

const textDraw = keyframes`
  from {stroke-dasharray: 0 50%;}
  to {stroke-dasharray: 50% 0;}
`;

const Loading = () => {
  return (
    <Box w="100vw" h="100vh">
      <Center w="100%" h="100%">
        <chakra.svg
          viewBox="0 0 1350 600"
          className="animated-text"
          animation={`${textDraw} infinite 2s linear`}
        >
          <text x="50%" y="50%" fill="transparent" textAnchor="middle">
            SY
          </text>
        </chakra.svg>
      </Center>
    </Box>
  );
};

export default Loading;
