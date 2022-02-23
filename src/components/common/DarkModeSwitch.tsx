import { Switch, useColorMode } from "@chakra-ui/react";
import React from "react";

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <div>
      <Switch color="green" isChecked={isDark} onChange={toggleColorMode} />
    </div>
  );
};

export default DarkModeSwitch;
