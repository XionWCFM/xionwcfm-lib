import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@xionwcfm/ui";

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
      <Story />
    </div>
  ),
};
