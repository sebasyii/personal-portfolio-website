import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

export default {
  global: (props: StyleFunctionProps) => ({
    html: {
      scrollBehavior: "smooth",
    },
    body: {
      color: "default",
      bg: "bg-canvas",
    },
    "*::placeholder": {
      opacity: 1,
      color: "muted",
    },
    "*, *::before, &::after": {
      borderColor: mode("gray.200", "gray.700")(props),
    },
  }),
};
