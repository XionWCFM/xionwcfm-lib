import type { Meta, StoryObj } from "@storybook/react";
import * as TopNavigation from "./top-navigation";

const meta: Meta = {
  title: "Xds/TopNavigation",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const TopNavigationBar: Story = {
  args: {},
  decorators: (Story) => {
    return (
      <>
        <TopNavigation.Layout className=" bg-primary-300">
          <TopNavigation.Right>
            <div className=" bg-primary-100">hewo</div>
          </TopNavigation.Right>
          <TopNavigation.Left>
            <div className="  bg-primary-100">hello</div>
          </TopNavigation.Left>
          <TopNavigation.Center>
            <div>hello</div>
          </TopNavigation.Center>
        </TopNavigation.Layout>
      </>
    );
  },
};
