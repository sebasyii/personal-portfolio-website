import { MDXComponentsProps } from "@/types/shared";
import {
  Box,
  Stack,
  Table,
  TableProps,
  useBreakpointValue,
  useColorModeValue,
  Text,
  HStack,
} from "@chakra-ui/react";
import React from "react";

const MDXTable = (props: MDXComponentsProps<TableProps>) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box
      my={4}
      py={5}
      bg="bg-surface"
      borderRadius={useBreakpointValue({ base: "none", md: "lg" })}
      boxShadow={{ base: "none", md: useColorModeValue("sm", "sm-dark") }}
    >
      <Box overflowX="auto">
        <Table {...props}>{props.children}</Table>
      </Box>
    </Box>
  );
};

export default MDXTable;
