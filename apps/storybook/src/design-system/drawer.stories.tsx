import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@xionwcfm/ui";
import { Drawer } from "@xionwcfm/ui/drawer";

const ExampleDrawer = () => {
  return (
    <Drawer.Root>
      <Drawer.Trigger>
        <Button variant={"emphasis"} size={"md"}>
          열어보기
        </Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay />
        <Drawer.Content className=" ">
          <div className={` h-[50vh]`}>
            <Drawer.Header>Drawer Header</Drawer.Header>
            <Drawer.Footer>Drawer Footer</Drawer.Footer>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

const meta: Meta<typeof Drawer> = {
  title: "Xds/Drawer",
  component: ExampleDrawer,
  tags: ["autodocs"],
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof ExampleDrawer>;

export const Drawers: Story = {
  args: {},
  decorators: [
    () => (
      <div className=" min-h-screen p-16 flex flex-col">
        <ExampleDrawer />
      </div>
    ),
  ],
};
