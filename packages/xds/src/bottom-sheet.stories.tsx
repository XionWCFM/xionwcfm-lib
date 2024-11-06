import type { Meta, StoryObj } from "@storybook/react";
import { BottomSheet } from "./bottom-sheet";
import { Button } from "./button";
import { Input } from "./input";
import { Paragraph } from "./paragraph";
import { Scrollable } from "./scrollable";
import { Stack } from "./stack";

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
          <BottomSheet.Trigger asChild>
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

        <div className=" h-128" />
        <BottomSheet.Root>
          <BottomSheet.Trigger asChild>
            <Button variant={"emphasis"} size={"md"}>
              Input BottomhSheet Trigger
            </Button>
          </BottomSheet.Trigger>
          <BottomSheet.Portal>
            <BottomSheet.Overlay />
            <BottomSheet.Content title="sr-only title" description="sr-only description">
              <Input />
            </BottomSheet.Content>
          </BottomSheet.Portal>
        </BottomSheet.Root>
      </div>
    ),
  ],
};

export const ImageBottomSheet: Story = {
  render: () => {
    return (
      <div>
        <BottomSheet.Root>
          <BottomSheet.Trigger asChild>
            <Button variant={"emphasis"} size={"md"}>
              Image BottomhSheet Trigger
            </Button>
          </BottomSheet.Trigger>
          <BottomSheet.Portal>
            <BottomSheet.Overlay />
            <BottomSheet.Content
              className=" bg-cover bg-center min-h-[40vh]"
              style={{ backgroundImage: "url(https://picsum.photos/200/300)" }}
              title="sr-only title"
              description="sr-only description"
            >
              <Stack className=" inset-0 bg-white-50">dsasa</Stack>
            </BottomSheet.Content>
          </BottomSheet.Portal>
        </BottomSheet.Root>
      </div>
    );
  },
};
