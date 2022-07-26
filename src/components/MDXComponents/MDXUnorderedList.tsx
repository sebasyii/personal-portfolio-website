import { MDXComponentsProps } from "@/types/shared";
import React from "react";
import { ComponentWithAs, ListProps, UnorderedList } from "@chakra-ui/react";

const MDXUnorderedList = ({
  props,
  children,
}: MDXComponentsProps<ComponentWithAs<"ul", ListProps>>) => {
  return (
    <UnorderedList my={4} {...props}>
      {children}
    </UnorderedList>
  );
};

export default MDXUnorderedList;
