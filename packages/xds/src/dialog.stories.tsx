import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import * as DialogPrimitives from "./dialog";

const Dialog = () => {
  return (
    <div>
      <DialogPrimitives.Root>
        <DialogPrimitives.Trigger>
          <Button variant={"emphasis"} size={"md"}>
            열어보기
          </Button>
        </DialogPrimitives.Trigger>
        <DialogPrimitives.Portal>
          <DialogPrimitives.Overlay />
          <DialogPrimitives.Content>hello</DialogPrimitives.Content>
        </DialogPrimitives.Portal>
      </DialogPrimitives.Root>
    </div>
  );
};

const meta: Meta<typeof Dialog> = {
  title: "Xds/Dialog",
  component: Dialog,
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof Dialog>;

export const DialogPrimitive: Story = {
  args: {},
  decorators: [
    () => (
      <div className="p-16 flex flex-col">
        <DialogPrimitives.Root>
          <DialogPrimitives.Trigger>
            <Button variant={"emphasis"} size={"md"}>
              열어보기
            </Button>
          </DialogPrimitives.Trigger>
          <DialogPrimitives.Portal>
            <DialogPrimitives.Overlay />
            <DialogPrimitives.Content className=" w-[300px] h-[300px] bg-white rounded-md">
              hello
            </DialogPrimitives.Content>
          </DialogPrimitives.Portal>
        </DialogPrimitives.Root>
      </div>
    ),
  ],
};
