import { MDXComponentsProps } from "@/types/shared";
import { chakra, ChakraComponent } from "@chakra-ui/react";
import React, { ReactNode } from "react";

const Blockquote = ({
  children,
  props,
}: MDXComponentsProps<ChakraComponent<"blockquote">>) => {
  return (
    <chakra.blockquote
      px={4}
      py={2}
      my={4}
      color="whiteAlpha.700"
      fontStyle="italic"
      rounded="lg"
      bg="gray.800"
      {...props}
    >
      {children}
    </chakra.blockquote>
  );
};

export default Blockquote;
