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

export const BasicInput: Story = {
  parameters: {
    docs: {
      description: {
        story: "사용자에게 입력해야하는 값을 알려주기 위해 되도록 Placeholder를 제공합니다.",
      },
    },
  },
  args: {
    placeholder: "placeholder",
    disabled: false,
  },
};

export const DisabledInput: Story = {
  parameters: {
    docs: {
      description: {
        story: "disabled props를 조작하여 input을 비활성화할 수 있습니다.",
      },
    },
  },
  args: {
    disabled: true,
    placeholder: "disabled",
  },
};
