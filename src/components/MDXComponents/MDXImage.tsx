import { MDXComponentsProps } from "@/types/shared";
import { BoxProps } from "@chakra-ui/react";
import React from "react";
import ChakraNextImage from "../common/ChakraNextImage";

const MDXImage = (props: { src: string; alt: string }) => {
  return <ChakraNextImage src={props.src} alt={props.alt} />;
};

export default MDXImage;
