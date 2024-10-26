import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";
import { Paragraph } from "./paragraph";

const meta: Meta<typeof Input> = {
  title: "Xds/Input",
  args: {
    value: "",
    disabled: false,
    left: undefined,
    right: undefined,
    placeholder: "placeholder",
    className: "",
  },
  argTypes: {
    value: { control: "text" },
    placeholder: { control: "text" },
    className: { control: "text" },
    disabled: { control: "boolean" },
    left: { control: "text", description: "Input Props : React.ReactNode" },
    right: { control: "text", description: "Input Props : React.ReactNode" },
  },
  component: Input,
  tags: ["autodocs"],
  render: (props) => <Input {...props} />,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const InputStory: Story = {
  args: {
    placeholder: "placeholder",
    disabled: false,
  },
};
