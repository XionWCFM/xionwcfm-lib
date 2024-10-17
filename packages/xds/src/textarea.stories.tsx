import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./textarea";

const meta: Meta = {
  title: "Xds/Textarea",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Selects: Story = {
  args: {},
  decorators: (Story) => {
    return (
      <div className=" p-32">
        <Textarea placeholder="hello" />
        <Textarea placeholder="hello" disabled />
        <Textarea placeholder="hello" value={"hello"} />
      </div>
    );
  },
};
