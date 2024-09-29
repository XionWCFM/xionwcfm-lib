import { BoxIcon, HomeIcon, RocketIcon } from "@radix-ui/react-icons";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { BottomNavigation } from "./bottom-navigation";
import { MobileViewLayout } from "./mobile-view-layout";
const meta: Meta = {
  title: "Xds/BottomNavigation",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const BottomNavigationStory: Story = {
  args: {},
  decorators: [
    () => {
      const [open, onOpenChange] = useState(true);
      return (
        <>
          <MobileViewLayout>
            <button onClick={() => onOpenChange((p) => !p)}>네비게이션 토글</button>
            <BottomNavigation.Root open={open}>
              <BottomNavigation.Action icon={<HomeIcon />} value="home" label={"home"} />
              <BottomNavigation.Action icon={<BoxIcon />} value="home3" label={"box"} />
              <BottomNavigation.Action icon={<RocketIcon />} value="hi2" label={"rocket"} />
            </BottomNavigation.Root>
          </MobileViewLayout>
        </>
      );
    },
  ],
};
