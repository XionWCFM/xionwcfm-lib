import type { Meta, StoryObj } from "@storybook/react";
import { Paragraph } from "./paragraph";

const Dialog = () => {
  return (
    <div>
      <Paragraph color={"danger-500"}>hello</Paragraph>
    </div>
  );
};

const meta: Meta<typeof Dialog> = {
  title: "Xds/Paragraph",
  component: Dialog,
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof Dialog>;

export const DialogPrimitive: Story = {
  args: {},
  decorators: [
    () => (
      <div className=" min-h-screen p-16 flex flex-col">
        <Dialog />
      </div>
    ),
  ],
};
