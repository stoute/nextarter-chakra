import { extendTheme } from "@chakra-ui/react";

import { colors } from "./colors";
import { components } from "./components";
import { config } from "./config";
import { fonts } from "./fonts";

const customTheme = extendTheme({
  fonts,
  colors,
  config,
  components,
});

export default customTheme;

// todo: let chakra theme inherit from tailwind
// My current theme.ts file for Chakra merges some of the Tailwind config into
// it to get the colours to match. The object schema seems the same but the colours are
// difference in each library. This way I can get both to work
// better together, but a proper integration would be nicer.

//   import { theme as chakraTheme } from "@chakra-ui/core";
// // @ts-ignore
// import resolveConfig from "tailwindcss/resolveConfig";
// import tailwindConfig from "../../tailwind.config";
//
// const tailwind = resolveConfig(tailwindConfig);
//
// chakraTheme.colors.blue = tailwind.theme.colors.blue;
//
// export const theme = {
//   ...chakraTheme,
//   colors: {
//     ...chakraTheme.colors,
//     blue: {
//       ...chakraTheme.colors.blue,
//       50: chakraTheme.colors.gray[50],
//       100: chakraTheme.colors.gray[100],
//     },
//     darkBlue: {
//       ...chakraTheme.colors.blue,
//       50: chakraTheme.colors.gray[50],
//       500: chakraTheme.colors.blue[800],
//       600: chakraTheme.colors.blue[700],
//       700: chakraTheme.colors.blue[800],
//       800: chakraTheme.colors.blue[900],
//       900: chakraTheme.colors.blue[900],
//     },
//   },
// };
