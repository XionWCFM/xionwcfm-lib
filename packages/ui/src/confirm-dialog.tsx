import { Cross2Icon } from "@radix-ui/react-icons";
import { XION_STYLE } from "@xionwcfm/token";
import { ReactNode } from "react";
import { Box } from "./box";
import { Button } from "./button";
import { DialogPrimitives } from "./dialog";
import { Paragraph } from "./paragraph";
import { Spacing } from "./spacing";
type ConfirmDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  primaryButton?: ReactNode;
  secondaryButton?: ReactNode;
};

export const ConfirmDialog = (props: ConfirmDialogProps) => {
  const { isOpen, onClose, primaryButton, secondaryButton, description } = props;
  return (
    <DialogPrimitives.Root open={isOpen} onOpenChange={onClose}>
      <DialogPrimitives.Portal>
        <DialogPrimitives.Overlay />
        <DialogPrimitives.Content className="flex flex-col bg-white px-24 py-16 shadow-sm rounded-sm w-[calc(100vw-48px)] max-w-[440px]">
          <Box className=" items-center flex justify-between">
            <Paragraph color={"gray-600"} weight={"regular"} size={"4"} responsive>
              {props.title}
            </Paragraph>
            <DialogPrimitives.Close>
              <Button variant={"ghost"} size={"icon"}>
                <Cross2Icon color={XION_STYLE.colors.gray[600]} />
              </Button>
            </DialogPrimitives.Close>
          </Box>
          <Paragraph
            className=" mb-24 mt-4 xs:mt-8"
            color={"gray-500"}
            weight={"thin"}
            size={"3"}
            leading={"normal"}
            responsive
          >
            {description}
          </Paragraph>
          <Box className=" flex  justify-center items-center gap-x-8 xs:gap-x-16">
            {primaryButton}
            {secondaryButton}
          </Box>
        </DialogPrimitives.Content>
      </DialogPrimitives.Portal>
    </DialogPrimitives.Root>
  );
};
