import type { Meta, StoryObj } from "@storybook/react";
import { BottomSheet } from "./bottom-sheet";
import { Button } from "./button";
import { Scrollable } from "./scrollable";

const meta: Meta = {
  title: "Xds/BottomSheet",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const ScrollableBottomhSheet: Story = {
  args: {},
  decorators: [
    () => (
      <div className=" p-16 flex flex-col">
        <BottomSheet.Root>
          <BottomSheet.Trigger>
            <Button variant={"emphasis"} size={"md"}>
              Scrollable BottomhSheet Trigger
            </Button>
          </BottomSheet.Trigger>
          <BottomSheet.Portal>
            <BottomSheet.Overlay />
            <BottomSheet.Content
              title="sr-only title"
              description="sr-only description"
              handle={<BottomSheet.Handle />}
            >
              <Scrollable height="400px">
                <div className=" min-h-screen">scrollable content</div>
              </Scrollable>
            </BottomSheet.Content>
          </BottomSheet.Portal>
        </BottomSheet.Root>
      </div>
    ),
  ],
};
