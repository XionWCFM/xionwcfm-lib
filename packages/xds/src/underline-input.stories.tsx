import { RocketIcon } from "@radix-ui/react-icons";
import type { Meta, StoryObj } from "@storybook/react";
import { cn } from "./external-utils/cn";
import { Paragraph } from "./paragraph";
import { Pressable } from "./pressable";
import { UnderlineInput } from "./underline-input";

const meta: Meta<typeof UnderlineInput> = {
  title: "Xds/UnderlineInput",
  component: UnderlineInput,
  tags: ["autodocs"],
} satisfies Meta<typeof UnderlineInput>;

export default meta;

type Story = StoryObj<typeof UnderlineInput>;

export const InputStory: Story = {
  args: {
    placeholder: "placeholder",
    disabled: false,
  },
  decorators: (Story) => (
    <div className="flex min-h-screen p-16 flex-col gap-y-16">
      <Paragraph size={"6"} color={"neutral-500"}>
        No Icon
      </Paragraph>
      <Story />

      <Paragraph size={"6"} color={"neutral-500"}>
        With leftSlot , rightSlot
      </Paragraph>
      <UnderlineInput
        leftSlot={
          <RocketIcon
            onClick={() => {
              alert("leftslot");
            }}
          />
        }
        rightSlot={
          <RocketIcon
            onClick={() => {
              alert("rightslot");
            }}
          />
        }
        id="hldelo"
        placeholder="나이를 입력하세요"
      />

      <Paragraph size={"6"} color={"neutral-500"}>
        disabled placeholder case
      </Paragraph>
      <UnderlineInput
        disabled
        leftSlot={
          <RocketIcon
            onClick={() => {
              alert("leftslot");
            }}
          />
        }
        rightSlot={
          <RocketIcon
            onClick={() => {
              alert("rightslot");
            }}
          />
        }
        id="hldsadelo"
        placeholder="나이를 입력하세요"
      />

      <Paragraph size={"6"} color={"neutral-500"}>
        disabled value case
      </Paragraph>
      <UnderlineInput
        disabled
        leftSlot={
          <RocketIcon
            onClick={() => {
              alert("leftslot");
            }}
          />
        }
        rightSlot={
          <RocketIcon
            onClick={() => {
              alert("rightslot");
            }}
          />
        }
        id="hldsadelo"
        placeholder="나이를 입력하세요"
        value={"24"}
      />
    </div>
  ),
};
