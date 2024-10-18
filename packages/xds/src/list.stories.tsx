import { ChevronRightIcon, HomeIcon } from "@radix-ui/react-icons";
import { Meta, StoryObj } from "@storybook/react";
import { List, Row } from "./list";
const meta: Meta = {
  title: "Xds/List",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const ListStory: Story = {
  args: {},
  decorators: [
    () => (
      <>
        <List className=" w-256">
          <Row highlighted right={<ChevronRightIcon />}>
            <div className=" flex flex-col">
              <div>hellodddddddddddddddddddddddddddd</div>
              <div>world</div>
            </div>
          </Row>
          <Row left={<HomeIcon />} right={<ChevronRightIcon />}>
            hello worldddddddddddddddddddsda
          </Row>
          <Row left={<HomeIcon />} right={<ChevronRightIcon />}>
            hello world
          </Row>
        </List>
      </>
    ),
  ],
};
