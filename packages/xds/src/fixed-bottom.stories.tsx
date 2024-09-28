import { Meta, StoryObj } from "@storybook/react";
import { FixedBottom } from "./fixed-bottom";
import { MobileViewLayout } from "./mobile-view-layout";

const meta: Meta<typeof FixedBottom> = {
  title: "Xds/FixedBottom",
  component: FixedBottom,
  tags: ["autodocs"],
} satisfies Meta<typeof FixedBottom>;

export default meta;

type Story = StoryObj<typeof FixedBottom>;

export const FixedBottoms: Story = {
  args: {},
  decorators: [
    () => (
      <MobileViewLayout>
        <FixedBottom>화면 하단에 요소를 고정합니다.</FixedBottom>
      </MobileViewLayout>
    ),
  ],
};
