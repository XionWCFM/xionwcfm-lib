import { Meta, StoryFn, StoryObj } from "@storybook/react";
import * as Tabs from "./tabs";

export default {
  title: "Xds/Tabs",
  component: Tabs.Root,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A tabs component with transition bar, trigger, and content management.",
      },
    },
  },
  argTypes: {
    value: {
      control: { type: "text" },
      description: "The currently selected tab value.",
    },
    onValueChange: {
      action: "valueChanged",
      description: "Callback function when the tab value changes.",
    },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <Tabs.Root {...args}>
    <Tabs.List>
      <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
      <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
      <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="tab1">
      <div>Content for Tab 1</div>
    </Tabs.Content>
    <Tabs.Content value="tab2">
      <div>Content for Tab 2</div>
    </Tabs.Content>
    <Tabs.Content value="tab3">
      <div>Content for Tab 3</div>
    </Tabs.Content>
  </Tabs.Root>
);

export const BasicUsageStory: StoryObj = {
  render: () => (
    <Tabs.Root>
      <Tabs.List>
        <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        <div>Content for Tab 1</div>
      </Tabs.Content>
      <Tabs.Content value="tab2">
        <div>Content for Tab 2</div>
      </Tabs.Content>
      <Tabs.Content value="tab3">
        <div>Content for Tab 3</div>
      </Tabs.Content>
    </Tabs.Root>
  ),
};

export const Default: StoryFn = Template.bind({});
Default.args = {
  value: "tab1",
};

export const SecondTabSelected: StoryFn = Template.bind({});
SecondTabSelected.args = {
  value: "tab2",
};

export const ThirdTabSelected: StoryFn = Template.bind({});
ThirdTabSelected.args = {
  value: "tab3",
};
