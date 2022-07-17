import {
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  SimpleGrid,
  Stack,
  Icon,
  Text,
  Link,
} from "@chakra-ui/react";

import React from "react";
import { items } from "./data";
import { PopoverIcon } from "./PopoverIcon";

interface ButtonWithDropdownProps {
  label: string;
}

const ButtonWithDropdown = ({ label }: ButtonWithDropdownProps) => {
  return (
    <Popover
      defaultIsOpen={false}
      gutter={12}
      openDelay={0}
      placement="bottom"
      trigger="click"
    >
      {({ isOpen }) => (
        <>
          <PopoverTrigger>
            <Button rightIcon={<PopoverIcon isOpen={isOpen} />} variant="link">
              {label}
            </Button>
          </PopoverTrigger>
          <PopoverContent width={{ base: "sm", md: "2xl" }} p="5">
            <SimpleGrid rowGap="2" columnGap="6" columns={{ base: 1, md: 2 }}>
              {items.map((item, id) => (
                <Link key={id} href={item.href} variant="menu">
                  <Stack direction="row" p="3" spacing="4">
                    <Icon as={item.icon} boxSize="6" color="accent" />
                    <Stack spacing="1">
                      <Text fontWeight="medium">{item.title}</Text>
                      <Text color="muted" fontFamily="heading" fontSize="sm">
                        {item.description}
                      </Text>
                    </Stack>
                  </Stack>
                </Link>
              ))}
            </SimpleGrid>
          </PopoverContent>
        </>
      )}
    </Popover>
  );
};

export default ButtonWithDropdown;
