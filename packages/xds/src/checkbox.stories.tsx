import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Checkbox, CircleCheckbox, NumberCheckbox } from "./checkbox";
import { List, Row } from "./list";

const meta: Meta = {
  title: "Xds/Checkbox",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const CheckboxStory: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <div className=" flex flex-col gap-y-16">
        <List as={"button"} onClick={() => setChecked(!checked)}>
          <Row left={<Checkbox checked={checked} />}>checkbox</Row>
        </List>
        <Checkbox disabled />
      </div>
    );
  },
};

export const CircleCheckboxStory: Story = {
  args: {},
  decorators: (Story) => {
    return (
      <div className=" flex flex-col gap-y-16">
        <CircleCheckbox />
        <CircleCheckbox disabled />
      </div>
    );
  },
};

export const NumberCheckBoxStory: Story = {
  render: () => {
    return (
      <div className=" gap-y-16 flex flex-col">
        <NumberCheckbox>1</NumberCheckbox>
        <NumberCheckbox>100</NumberCheckbox>
        <NumberCheckbox disabled />
      </div>
    );
  },
};
