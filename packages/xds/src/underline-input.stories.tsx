import { ClipboardIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Meta, StoryObj } from "@storybook/react";
import { UnderlineInput } from "./underline-input";

export default {
  title: "Xds/UnderlineInput",
  component: UnderlineInput,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A customizable input field with an underline style. Supports left and right slots for icons or elements.",
      },
    },
  },
  argTypes: {
    placeholder: {
      control: { type: "text" },
      description: "The placeholder text for the input.",
    },
    value: {
      control: { type: "text" },
      description: "The value of the input field.",
    },
    left: {
      control: { type: "text" },
      description: "An optional element or icon displayed on the left side of the input.",
    },
    right: {
      control: { type: "text" },
      description: "An optional element or icon displayed on the right side of the input.",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disables the input field if set to true.",
    },
    onChange: {
      action: "valueChanged",
      description: "Callback function when the input value changes.",
    },
  },
} as Meta;

export const Default: StoryObj = {
  args: {
    placeholder: "Enter text here...",
    value: "",
    disabled: false,
  },
  render: (args) => <UnderlineInput {...args} />,
};

export const WithLeftIcon: StoryObj = {
  args: {
    placeholder: "Enter text here...",
    left: <ClipboardIcon className="w-5 h-5 text-gray-500" />,
  },
  render: (args) => <UnderlineInput {...args} />,
};

export const WithRightIcon: StoryObj = {
  args: {
    placeholder: "Search here...",
    right: <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />,
  },
  render: (args) => <UnderlineInput {...args} />,
};

export const WithBothIcons: StoryObj = {
  args: {
    placeholder: "Search clipboard...",
    left: <ClipboardIcon className="w-5 h-5 text-gray-500" />,
    right: <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />,
  },
  render: (args) => <UnderlineInput {...args} />,
};

export const Disabled: StoryObj = {
  args: {
    placeholder: "Can't type here...",
    disabled: true,
  },
  render: (args) => (
    <div className=" flex flex-col gap-16">
      <UnderlineInput {...args} />
      <UnderlineInput {...args} left={<ClipboardIcon className="w-5 h-5 text-gray-500" />} />
      <UnderlineInput {...args} right={<MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />} />
    </div>
  ),
};
