import type { Preview } from "@storybook/react";
import "@xionwcfm/token/style";
import "../style.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
