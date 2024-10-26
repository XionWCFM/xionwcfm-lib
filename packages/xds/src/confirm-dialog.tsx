import { Cross2Icon } from "@radix-ui/react-icons";
import { XION_STYLE } from "@xionwcfm/token";
import { ReactNode } from "react";
import { Box } from "./box";
import { Button } from "./button";
import * as DialogPrimitives from "./dialog";
import { Paragraph } from "./paragraph";

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
        <DialogPrimitives.Content className="flex flex-col bg-white px-24 py-16 shadow-sm rounded-sm w-[calc(100vw-48px)] max-w-[416px]">
          <Box className=" items-center flex justify-between">
            <DialogPrimitives.Title asChild>
              <Paragraph color={"gray-600"} weight={"regular"} size={"4"}>
                {props.title}
              </Paragraph>
            </DialogPrimitives.Title>

            <DialogPrimitives.Close asChild>
              <Button variant={"ghost"} size={"icon"}>
                <Cross2Icon color={XION_STYLE.colors.gray[600]} />
              </Button>
            </DialogPrimitives.Close>
          </Box>
          <DialogPrimitives.Description asChild>
            <Paragraph className=" mb-24 mt-4 xs:mt-8" color={"gray-500"} weight={"thin"} size={"3"} leading={"normal"}>
              {description}
            </Paragraph>
          </DialogPrimitives.Description>

          <Box className=" flex  justify-center items-center gap-x-8 xs:gap-x-16">
            {primaryButton}
            {secondaryButton}
          </Box>
        </DialogPrimitives.Content>
      </DialogPrimitives.Portal>
    </DialogPrimitives.Root>
  );
};
