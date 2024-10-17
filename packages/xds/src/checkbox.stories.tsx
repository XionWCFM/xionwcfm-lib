import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox, NumberCheckbox } from "./checkbox";
const meta: Meta = {
  title: "Xds/Checkbox",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const CheckboxStory: Story = {
  args: {},
  decorators: (Story) => {
    return (
      <div className=" flex flex-col gap-y-16">
        <Checkbox />
        <Checkbox disabled />
        <NumberCheckbox>1</NumberCheckbox>
        <NumberCheckbox>100</NumberCheckbox>
        <div className=" ">
          <NumberCheckbox disabled />
        </div>
      </div>
    );
  },
};
