import { Meta, StoryFn } from "@storybook/react";
import * as Switch from "./switch";

export default {
  title: "Xds/Switch",
  component: Switch.Root,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A toggle switch component with customizable states, built with Radix UI Switch Primitives.",
      },
    },
  },
  argTypes: {
    checked: {
      control: { type: "boolean" },
      description: "Defines whether the switch is checked or not.",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disables the switch if set to true.",
    },
    onCheckedChange: {
      action: "checkedChanged",
      description: "Callback function that triggers when the switch state changes.",
    },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <Switch.Root {...args}>
    <Switch.Thumb />
  </Switch.Root>
);

export const Default: StoryFn = Template.bind({});
Default.args = {
  checked: false,
  disabled: false,
};

export const Checked: StoryFn = Template.bind({});
Checked.args = {
  checked: true,
  disabled: false,
};

export const Disabled: StoryFn = Template.bind({});
Disabled.args = {
  checked: false,
  disabled: true,
};

export const CheckedDisabled: StoryFn = Template.bind({});
CheckedDisabled.args = {
  checked: true,
  disabled: true,
};
