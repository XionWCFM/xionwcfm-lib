import React from "react";

import type { Preview } from "@storybook/react";
import "../src/css/index.css";
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className=" bg-neutral-50">
        <Story />
      </div>
    ),
  ],
};

export default preview;
