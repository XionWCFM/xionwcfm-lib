import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./switch";

const SwitchExample = () => {
  return (
    <Switch.Root>
      <Switch.Thumb />
    </Switch.Root>
  );
};

const meta: Meta<typeof SwitchExample> = {
  title: "Xds/Switch",
  component: SwitchExample,
  tags: ["autodocs"],
} satisfies Meta<typeof SwitchExample>;

export default meta;

type Story = StoryObj<typeof SwitchExample>;

export const SwitchPrimitive: Story = {
  args: {},
  decorators: [
    () => (
      <div className=" min-h-screen p-16 flex flex-col">
        <SwitchExample />
      </div>
    ),
  ],
};
