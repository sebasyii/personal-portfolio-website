import { MDXComponentsProps } from "@/types/shared";
import {
  ComponentWithAs,
  LinkProps,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import ChakraNextLink from "../common/ChakraNextLink";

const MDXLink = (
  props: MDXComponentsProps<ComponentWithAs<"a", LinkProps>>
) => {
  const textColor = useColorModeValue("brand.600", "brand.500");

  // Check if the link is internal or external
  const isInternal = props.href?.startsWith("/");

  return (
    <ChakraNextLink
      color={textColor}
      _hover={{
        cursor: "pointer",
        color: "brand.400",
      }}
      href={props.href ?? "#"}
      target={isInternal ? "_self" : "_blank"}
      {...props}
    >
      {props.children}
    </ChakraNextLink>
  );
};

export default MDXLink;
