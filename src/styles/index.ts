import { extendTheme, theme as baseTheme, ThemeConfig } from "@chakra-ui/react";
// import 'focus-visible/dist/focus-visible'
import * as components from "./components";
import * as foundations from "./foundations";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme: Record<string, any> = extendTheme({
  ...foundations,
  config,
  components: { ...components },
  colors: { ...baseTheme.colors, brand: baseTheme.colors.blue },
  space: {
    "4.5": "1.125rem",
  },
});
