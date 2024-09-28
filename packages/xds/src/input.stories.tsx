import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";
import { Paragraph } from "./paragraph";

const meta: Meta<typeof Input> = {
  title: "Xds/Input",
  component: Input,
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const InputStory: Story = {
  args: {
    placeholder: "placeholder",
    disabled: false,
  },
  decorators: (Story) => (
    <div className="flex min-h-screen p-16 flex-col gap-y-16">
      <Paragraph>Default</Paragraph>
      <Story />
      <Paragraph>Left Slot Case</Paragraph>
      <Input leftSlot={<QuestionMarkCircledIcon />} />
      <Paragraph>Right Slot Case</Paragraph>
      <Input rightSlot={<QuestionMarkCircledIcon />} />
      <Paragraph>Disabled</Paragraph>
      <Input disabled placeholder="placeholder" />
      <Paragraph>Disabled With Value</Paragraph>
      <Input disabled value={"value"} />
    </div>
  ),
};
