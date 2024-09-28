import type { Meta, StoryObj } from "@storybook/react";
import { Paragraph } from "./paragraph";

const meta: Meta<typeof Paragraph> = {
  title: "Xds/Paragraph",
  component: Paragraph,
  tags: ["autodocs"],
} satisfies Meta<typeof Paragraph>;

export default meta;

type Story = StoryObj<typeof Paragraph>;

export const ParagraphPrimitive: Story = {
  args: {},
  decorators: [
    () => (
      <div className=" min-h-screen p-16 flex flex-col">
        <Paragraph size={"12"}>Size 12 Paragraph</Paragraph>
        <Paragraph size={"11"}>Size 11 Paragraph</Paragraph>
        <Paragraph size={"10"}>Size 10 Paragraph</Paragraph>
        <Paragraph size={"9"}>Size 9 Paragraph</Paragraph>
        <Paragraph size={"8"}>Size 8 Paragraph</Paragraph>
        <Paragraph size={"7"}>Size 7 Paragraph</Paragraph>
        <Paragraph size={"6"}>Size 6 Paragraph</Paragraph>
        <Paragraph size={"5"}>Size 5 Paragraph</Paragraph>
        <Paragraph size={"4"}>Size 4 Paragraph</Paragraph>
        <Paragraph size={"3"}>Size 3 Paragraph</Paragraph>
        <Paragraph size={"2"}>Size 2 Paragraph</Paragraph>
        <Paragraph size={"1"}>Size 1 Paragraph</Paragraph>
        <div className=" my-16 border-b w-full" />

        <Paragraph weight={"bold"} size={"5"}>
          Weight Bold
        </Paragraph>
        <Paragraph weight={"semi-bold"} size={"5"}>
          Weight SemiBold
        </Paragraph>
        <Paragraph weight={"medium"} size={"5"}>
          Weight Medium
        </Paragraph>

        <Paragraph weight={"regular"} size={"5"}>
          Weight Regular
        </Paragraph>
        <Paragraph weight={"light"} size={"5"}>
          Weight Light
        </Paragraph>
        <Paragraph weight={"thin"} size={"5"}>
          Weight Thin
        </Paragraph>

        <Paragraph weight={"default"} size={"5"}>
          Weight Default
        </Paragraph>
      </div>
    ),
  ],
};
