import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "./button";
import { ConfirmDialog } from "./confirm-dialog";

const Dialog = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button variant={"emphasis"} size={"md"} onClick={() => setOpen(true)}>
        열어보기
      </Button>
      <ConfirmDialog
        isOpen={open}
        onClose={() => setOpen(false)}
        title="정말 수락하시겠습니까?"
        description={"여기서의 결정은 \n되돌릴 수 없어요"}
        primaryButton={
          <Button w={"100%"} variant={"primary"} size={"lg"} onClick={() => setOpen(false)}>
            수락하기
          </Button>
        }
        secondaryButton={
          <Button w={"100%"} variant={"secondary"} size={"lg"} onClick={() => setOpen(false)}>
            취소하기
          </Button>
        }
      />
    </div>
  );
};

const meta: Meta<typeof Dialog> = {
  title: "Xds/ConfrimDialog",
  component: Dialog,
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof Dialog>;

export const ConfirmDialogStory: Story = {
  args: {},
  decorators: [
    () => (
      <div className=" p-16 flex flex-col">
        <Dialog />
      </div>
    ),
  ],
};
