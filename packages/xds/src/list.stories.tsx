import { ChevronRightIcon, HomeIcon, RocketIcon } from "@radix-ui/react-icons";
import { Meta, StoryObj } from "@storybook/react";
import { List, Row, Text2Row } from "./list";
import { Paragraph } from "./paragraph";
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
        <div className=" w-[360px]">
          <List>
            <Row
              left={
                <div className=" w-32 h-32 rounded-full object-cover overflow-hidden">
                  <img src="https://picsum.photos/200/300" alt="random" />
                </div>
              }
              right={<ChevronRightIcon />}
            >
              <Text2Row
                top={
                  <Paragraph size={"4"} weight={"semi-bold"} color={"gray-700"}>
                    image
                  </Paragraph>
                }
                bottom={
                  <Paragraph size={"4"} color={"gray-700"} weight={"light"}>
                    hello
                  </Paragraph>
                }
              />
            </Row>
            <Row left={<RocketIcon />} highlighted right={<ChevronRightIcon />}>
              <Text2Row
                top={
                  <Paragraph size={"6"} weight={"bold"} color={"neutral-800"}>
                    hello
                  </Paragraph>
                }
                bottom={
                  <Paragraph size={"4"} color={"neutral-600"} weight={"light"}>
                    world
                  </Paragraph>
                }
              />
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
