import {
  Stack,
  StackProps,
  Tag,
  TagLabel,
  TagLeftIcon,
} from '@chakra-ui/react';
import React, { ReactElement } from 'react';

import {
  SiChakraui,
  SiDocker,
  SiFlask,
  SiGooglechrome,
  SiNextdotjs,
  SiReact,
} from 'react-icons/si';

type ProjectMetaType = StackProps & {
  tags: string[];
};

const labelToIcon: Record<string, { icon: ReactElement; colorScheme: string }> =
  {
    'Chakra UI': { icon: <SiChakraui />, colorScheme: 'teal' },
    React: { icon: <SiReact />, colorScheme: 'blue' },
    'Next.js': { icon: <SiNextdotjs />, colorScheme: 'red' },
    Docker: { icon: <SiDocker />, colorScheme: 'orange' },
    Flask: { icon: <SiFlask />, colorScheme: 'green' },
    'Chrome Extension': { icon: <SiGooglechrome />, colorScheme: 'yellow' },
  };

const ProjectMeta = (props: ProjectMetaType) => {
  const { tags, ...rest } = props;
  return (
    <Stack
      align={{ base: 'baseline', sm: 'revert' }}
      wrap={{ base: 'wrap', sm: 'nowrap' }}
      direction={{ base: 'row', sm: 'row' }}
      gap={{ base: 2, sm: 0 }}
      {...rest}
    >
      {tags.map((tag) => (
        <Tag
          key={tag}
          gap={2}
          colorScheme={labelToIcon[tag].colorScheme}
          size="lg"
          variant="subtle"
        >
          <TagLeftIcon as={() => labelToIcon[tag].icon} boxSize="12px" />
          <TagLabel>{tag}</TagLabel>
        </Tag>
      ))}
    </Stack>
  );
};

export default ProjectMeta;
