import type { Meta, StoryObj } from "@storybook/react";
import { UnderlineInput } from "./underline-input";

const meta: Meta<typeof UnderlineInput> = {
  title: "Xds/UnderlineInput",
  component: UnderlineInput,
  tags: ["autodocs"],
} satisfies Meta<typeof UnderlineInput>;

export default meta;

type Story = StoryObj<typeof UnderlineInput>;

export const InputStory: Story = {
  args: {
    placeholder: "placeholder",
    disabled: false,
  },
  decorators: (Story) => (
    <div className="flex min-h-screen p-16 flex-col gap-y-16">
      <Story /> <UnderlineInput id="hlelo" placeholder="나이를 입력하세요" className="text-gray-800" />
    </div>
  ),
};