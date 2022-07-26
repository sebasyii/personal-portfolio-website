import {
  Collapse,
  Flex,
  Icon,
  Link,
  Stack,
  useColorModeValue,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import React from "react";

import { FaChevronDown } from "react-icons/fa";
import { links } from "./Navbar";

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack onClick={children && onToggle} spacing={4}>
      <Flex
        as={Link}
        align={"center"}
        justify={"space-between"}
        py={2}
        _hover={{
          textDecoration: "none",
        }}
        href={href ?? "#"}
      >
        <Text
          color={useColorModeValue("gray.600", "gray.200")}
          fontWeight={600}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={FaChevronDown}
            w={6}
            h={6}
            transform={isOpen ? "rotate(180deg)" : ""}
            transition={"all .25s ease-in-out"}
          />
        )}
      </Flex>

      <Collapse animateOpacity in={isOpen} style={{ marginTop: "0!important" }}>
        <Stack
          align={"start"}
          mt={2}
          pl={4}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          borderLeft={1}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const MobileNav = () => {
  return (
    <Stack
      display={{ md: "none" }}
      p={4}
      bg={useColorModeValue("white", "gray.800")}
    >
      {links.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

export default MobileNav;
