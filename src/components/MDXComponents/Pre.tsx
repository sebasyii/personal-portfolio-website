import {
  Box,
  Button,
  chakra,
  ChakraComponent,
  useClipboard,
} from "@chakra-ui/react";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { FiCopy } from "react-icons/fi";

import Confetti from "react-confetti";

interface PreProps {
  children: ReactNode;
  props: ChakraComponent<"pre">;
}

const Pre = ({ children, props }: PreProps) => {
  const preRef = useRef<HTMLPreElement>(null);
  const [clipboardValue, setClipboardValue] = useState(
    preRef.current?.innerText ?? ""
  );
  const { hasCopied, onCopy } = useClipboard(clipboardValue);
  const [mouseInBox, setMouseInBox] = useState(false);

  useEffect(() => {
    setClipboardValue(preRef.current?.innerText ?? "");
  }, [preRef]);

  return (
    <Box
      position="relative"
      onMouseEnter={() => {
        setMouseInBox(true);
      }}
      onMouseLeave={() => {
        setMouseInBox(false);
      }}
    >
      <Button
        position="absolute"
        zIndex={1}
        top={0}
        right={0}
        m={3}
        opacity={mouseInBox ? 1 : 0}
        visibility={mouseInBox ? "visible" : "hidden"}
        transition="all 0.1s ease-in-out"
        colorScheme="brand"
        leftIcon={<FiCopy />}
        onClick={onCopy}
        size="sm"
        variant="outline"
      >
        {hasCopied ? "Copied" : "Copy"}
      </Button>

      <chakra.pre
        fontFamily={"monospace"}
        fontSize="0.9rem"
        lineHeight={1.625}
        my={4}
        p={6}
        rounded="lg"
        bg="gray.800"
        overflowX="scroll"
        {...props}
        position="relative"
        ref={preRef}
      >
        {children}
      </chakra.pre>
    </Box>
  );
};

export default Pre;
