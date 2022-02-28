import { chakra, HTMLChakraProps } from '@chakra-ui/react';
import React from 'react';

type DotGridProps = HTMLChakraProps<'svg'> & {
  iconColor?: string;
  width?: number;
  height?: number;
  space?: number;
  radius?: number;
};

const DotGrid = (props: DotGridProps) => {
  const {
    iconColor = 'currentColor',
    width = 10,
    height = 10,
    space = 10,
    radius = 1.5,
    ...rest
  } = props;

  const viewWidth = width * radius * 2 + (width - 1) * (space - radius * 2);
  const viewHeight = height * radius * 2 + (height - 1) * (space - radius * 2);

  // Create a grid of circles
  const circles = [];
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      circles.push(
        <circle
          key={`${i}-${j}`}
          cx={j * (space + radius * 2) + radius}
          cy={i * (space + radius * 2) + radius}
          r={radius}
          fill={iconColor}
        />,
      );
    }
  }

  return (
    <chakra.svg
      width={viewWidth}
      height={viewHeight}
      viewBox={`0 0 ${viewWidth} ${viewHeight}`}
      version="1.1"
      {...rest}
    >
      <g fill={iconColor}>{circles}</g>
    </chakra.svg>
  );
};

export default DotGrid;
