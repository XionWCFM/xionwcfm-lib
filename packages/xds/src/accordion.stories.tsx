import type { Meta, StoryObj } from "@storybook/react";
import * as Accordion from "./accordion";
import { Button } from "./button";

const meta: Meta = {
  title: "Xds/Accordion",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const AccordionStory: Story = {
  args: {},
  render: (args) => (
    <>
      <Accordion.Root type="multiple">
        <Accordion.Item value="1">
          <Accordion.Trigger>hello</Accordion.Trigger>
          <Accordion.Content>hello</Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </>
  ),
};
