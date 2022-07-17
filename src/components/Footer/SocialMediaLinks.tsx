import { ButtonGroup, ButtonGroupProps, IconButton } from '@chakra-ui/react';
import * as React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const SocialMediaLinks = (props: ButtonGroupProps) => (
  <ButtonGroup color="gray.600" variant="ghost" {...props}>
    <IconButton
      as="a"
      aria-label="LinkedIn"
      href="https://github.com/sebasyii"
      icon={<FaLinkedin fontSize="20px" />}
    />
    <IconButton
      as="a"
      aria-label="GitHub"
      href="https://www.linkedin.com/in/sebastian-yii-5272841a3/"
      icon={<FaGithub fontSize="20px" />}
    />
    {/* <IconButton
      as="a"
      aria-label="Twitter"
      href="#"
      icon={<FaTwitter fontSize="20px" />}
    /> */}
  </ButtonGroup>
);
