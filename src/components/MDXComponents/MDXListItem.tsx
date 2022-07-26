import { MDXComponentsProps } from "@/types/shared";
import { ComponentWithAs, ListItem, ListItemProps } from "@chakra-ui/react";
import React from "react";

const MDXListItem = ({
  props,
  children,
}: MDXComponentsProps<ComponentWithAs<"li", ListItemProps>>) => {
  return (
    <ListItem ml={2} my={2} pl={2} {...props}>
      {children}
    </ListItem>
  );
};

export default MDXListItem;
