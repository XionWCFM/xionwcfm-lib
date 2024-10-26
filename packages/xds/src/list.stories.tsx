import { ChevronRightIcon, HomeIcon, RocketIcon } from "@radix-ui/react-icons";
import { Meta, StoryObj } from "@storybook/react";
import { List, Row, Text2Row } from "./list";
import { Paragraph } from "./paragraph";
import { toast } from "./toast";

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
  argTypes: {},
  parameters: {
    docs: {
      description: {
        story:
          "List는 Row를 나열합니다. 기본적으로 세로 나열입니다. 추가적인 커스터마이징이 필요한 경우 className , style을 사용하세요",
      },
    },
  },
  render: (props) => (
    <List {...props}>
      <Row>Lorem ipsum dolor sit amet, consectetur adipiscing</Row>
      <Row>Lorem ipsum dolor sit amet, consectetur adipiscing</Row>
      <Row>Lorem ipsum dolor sit amet, consectetur adipiscing</Row>
    </List>
  ),
};

export const RowStory: StoryObj<typeof Row> = {
  args: {},
  argTypes: {
    highlighted: {
      control: "boolean",
      table: { summary: "boolean" },
      description: "Row Props : 강조효과를 주기 위한 property입니다.",
    },
    left: { control: "object", description: "Row Props : React.ReactNode" },
    right: { control: "object", description: "Row Props : React.ReactNode" },
  },
  parameters: {
    docs: {
      description: {
        story: "List를 구성하는 Row입니다. 추가적인 커스터마이징이 필요한 경우 className , style을 사용하세요",
      },
    },
  },
  render: (props) => <Row {...props}>Lorem ipsum dolor sit amet, consectetur adipiscing</Row>,
};

export const Text2RowStory: StoryObj<typeof Text2Row> = {
  args: {
    top: "top text",
    bottom: "bottom text",
  },
  argTypes: {
    top: { control: "text", description: "Text2Row Props : React.ReactNode" },
    bottom: { control: "text", description: "Text2Row Props : React.ReactNode" },
  },
  parameters: {
    docs: {
      description: {
        story:
          "2줄 텍스트를 표시하는 컴포넌트입니다. top, bottom props를 이용하세요 Text2Row는 Box Component의 Spec을 만족합니다.",
      },
    },
  },
  render: ({ top, bottom, ...rest }) => (
    <Row>
      <Text2Row top={<div>{top}</div>} bottom={<div>{bottom}</div>} {...rest} />
    </Row>
  ),
};

export const LeftPropsStory: StoryObj = {
  args: {},
  argTypes: {},
  parameters: {
    docs: {
      description: {
        story: "left에는 Image, Icon 등 Text가 아닌 것을 렌더링하는 것을 권장합니다.",
      },
    },
  },
  render: () => {
    return (
      <List>
        <Row left={<RandomImage />}>
          <Text2Row
            top={
              <Paragraph size={"5"} weight={"semi-bold"} color={"neutral-700"}>
                Random Image
              </Paragraph>
            }
            bottom={
              <Paragraph size={"4"} color={"neutral-400"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </Paragraph>
            }
          />
        </Row>
        <Row
          left={
            <div className=" justify-center items-center flex w-32 h-32">
              <RocketIcon />
            </div>
          }
        >
          <Text2Row
            top={
              <Paragraph size={"5"} weight={"semi-bold"} color={"neutral-700"}>
                Random Image
              </Paragraph>
            }
            bottom={
              <Paragraph size={"4"} color={"neutral-400"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </Paragraph>
            }
          />
        </Row>
      </List>
    );
  },
};

export const ClickEventStory: StoryObj = {
  args: {},
  argTypes: {},
  parameters: {
    docs: {
      description: {
        story:
          "카드의 영역별로 다른 클릭이벤트가 발생해야하는 경우 stopPropagation 대신 element 별로 클릭 이벤트를 부착하는 것을 권장합니다.",
      },
    },
  },
  render: () => {
    return (
      <Row
        className=" w-[360px]"
        left={<RandomImage onClick={() => toast.success("image clicked")} />}
        right={<ChevronRightIcon onClick={() => toast.success("right clicked")} />}
      >
        <Text2Row
          top={
            <Paragraph size={"5"} weight={"semi-bold"} color={"neutral-700"}>
              Random Image
            </Paragraph>
          }
          bottom={
            <Paragraph size={"4"} color={"neutral-400"}>
              Lorem ipsum dolor sit amet
            </Paragraph>
          }
        />
      </Row>
    );
  },
};

const RandomImage = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button className=" w-32 h-32 rounded-full object-cover overflow-hidden" onClick={onClick}>
      <img src="https://picsum.photos/200/300" alt="random" />
    </button>
  );
};
