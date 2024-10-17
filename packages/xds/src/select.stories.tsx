import type { Meta, StoryObj } from "@storybook/react";
import * as Select from "./select";

const meta: Meta = {
  title: "Xds/Select",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Selects: Story = {
  args: {},
  decorators: (Story) => {
    return (
      <div className=" p-32">
        <div className=" w-[250px]">
          <Select.Root>
            <Select.Trigger>
              <Select.Value placeholder="Select a fruit" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="apple">Apple</Select.Item>
              <Select.Item disabled value="banana">
                Banana
              </Select.Item>
              <Select.Item value="grape">Grape</Select.Item>
              <Select.Item value="orange">Orange</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>
      </div>
    );
  },
};
