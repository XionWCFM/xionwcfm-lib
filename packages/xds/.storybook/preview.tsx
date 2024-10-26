import type { Preview } from "@storybook/react";
import React from "react";
import { Toaster } from "../src/toast";
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
  decorators: [
    (Story) => (
      <>
        <Toaster position={"bottom-left"} />
        <Story />
      </>
    ),
  ],
};

export default preview;
