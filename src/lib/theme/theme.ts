import { extendTheme, theme as chakraTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  components: {
    Button: {
      variants: {
        outline: {
          border: "2px solid",
          borderColor: "#6AABD7",
          color: "#6AABD7",
          "&:hover": {
            color: "#fff",
            bg: "#6AABD7",
            boxShadow: "2xl",
          },
        },
        solid: {
          bg: "#6AABD7",
          color: "#fff",
          border: "2px solid",
          borderColor: "#6AABD7",
          "&:hover": {
            border: "2px solid",
            borderColor: "#6AABD7",
            color: "#6AABD7",
            bg: "transparent",
            boxShadow: "2xl",
          },
        },
      },
    },
  },
  fonts: {
    ...chakraTheme.fonts,
    heading: `"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    body: "Space Mono",
  },
  config,
});

export default theme;
