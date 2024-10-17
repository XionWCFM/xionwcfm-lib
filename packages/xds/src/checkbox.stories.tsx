import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
const meta: Meta = {
  title: "Xds/Checkbox",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const CollapsibleStory: Story = {
  args: {},
  decorators: (Story) => {
    return <></>;
  },
};
