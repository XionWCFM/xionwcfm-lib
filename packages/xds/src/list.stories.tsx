import { ChevronRightIcon, HomeIcon } from "@radix-ui/react-icons";
import { Meta, StoryObj } from "@storybook/react";
import { List, Row } from "./list";
const meta: Meta = {
  title: "Xds/List",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "List를 만들수 있는 컴포넌트입니다.",
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const ListStory: Story = {
  args: {},
  decorators: [
    () => (
      <>
        <div className=" w-256">
          <List>
            <Row highlighted right={<ChevronRightIcon />}>
              <div className=" flex flex-col">
                <div>hellodddddddddddddddddddddddddddddddddddddddddddddddddddddddd</div>
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
        </div>
      </>
    ),
  ],
};
