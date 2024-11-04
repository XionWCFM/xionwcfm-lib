import { ChevronDownIcon } from "@radix-ui/react-icons";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import * as Accordion from "./accordion";
import { Button } from "./button";

const meta: Meta = {
  title: "Xds/Accordion",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const SingleAccordionStory: Story = {
  args: {},
  render: (args) => {
    return (
      <>
        <Accordion.Root type="single">
          <Accordion.Item value="1">
            <Accordion.Trigger right={<ChevronDownIcon />}>hello</Accordion.Trigger>
            <Accordion.Content className=" bg-gray-100">hello</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="2">
            <Accordion.Trigger right={<ChevronDownIcon />}>two content</Accordion.Trigger>
            <Accordion.Content className=" bg-gray-100">hello</Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </>
    );
  },
};

export const MultipleAccordionStory: Story = {
  args: {},
  render: (args) => {
    return (
      <Accordion.Root type="multiple">
        <Accordion.Item value="1">
          <Accordion.Trigger right={<ChevronDownIcon />}>one content</Accordion.Trigger>
          <Accordion.Content className=" bg-gray-100">hello</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="2">
          <Accordion.Trigger right={<ChevronDownIcon />}>two content</Accordion.Trigger>
          <Accordion.Content className=" bg-gray-100">hello</Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    );
  },
};
