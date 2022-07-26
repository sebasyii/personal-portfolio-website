import { MDXComponentsProps } from "@/types/shared";
import { Heading, HeadingProps, Link } from "@chakra-ui/react";
import React from "react";

import { FiLink } from "react-icons/fi";

const HeadingTwo = ({ props, children }: MDXComponentsProps<HeadingProps>) => {
  return (
    <Heading
      marginTop="2.25rem"
      marginBottom="0.75rem"
      fontSize="1.85rem"
      fontWeight="semibold"
      lineHeight={1.3}
      {...props}
      // _hover={{
      //   cursor: "pointer",
      //   color: "brand.500",
      // }}

      transition="all 0.2s ease-in-out"
    >
      {children}
    </Heading>
  );
};

export default HeadingTwo;
