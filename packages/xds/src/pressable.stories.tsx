import { Meta, StoryObj } from "@storybook/react";
import { Paragraph } from "./paragraph";
import { Pressable } from "./pressable";

const meta: Meta<typeof Pressable> = {
  title: "Xds/Pressable",
  component: Pressable,
  tags: ["autodocs"],
} satisfies Meta<typeof Pressable>;

export default meta;

type Story = StoryObj<typeof Pressable>;

export const Pressables: Story = {
  args: {},
  decorators: [
    () => (
      <div>
        <Paragraph>Pressable</Paragraph>
        <Paragraph>자식 요소를 Pressable하게 만듭니다.</Paragraph>
        <Pressable>
          <button className=" w-384 rounded-sm p-12">Pressable</button>
        </Pressable>
      </div>
    ),
  ],
};
