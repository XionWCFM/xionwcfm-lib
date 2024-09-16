import { Meta, StoryObj } from "@storybook/react";
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
        <Pressable>
          <button className=" w-384 rounded-sm p-12">hello</button>
        </Pressable>
      </div>
    ),
  ],
};
