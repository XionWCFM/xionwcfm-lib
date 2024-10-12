import { Meta, StoryObj } from "@storybook/react";
import * as Tabs from "./tabs";
const meta: Meta = {
  title: "Xds/Tabs",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Tab: Story = {
  args: {},
  decorators: [
    () => {
      return (
        <>
          <Tabs.Root>
            <Tabs.List>
              <Tabs.Trigger value="1">Tab 1</Tabs.Trigger>
              <Tabs.Trigger value="2">Tab 2</Tabs.Trigger>
              <Tabs.Trigger value="3">Tab 3</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="1">Content 1</Tabs.Content>
            <Tabs.Content value="2">Content 2</Tabs.Content>
            <Tabs.Content value="3">Content 3</Tabs.Content>
          </Tabs.Root>
        </>
      );
    },
  ],
};
