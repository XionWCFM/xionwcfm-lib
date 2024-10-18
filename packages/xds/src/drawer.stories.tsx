import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import * as Drawer from "./drawer";
import { FixedLayout } from "./fixed-layout";

const meta: Meta = {
  title: "Xds/Drawer",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Drawer 컴포넌트는 다양한 서브컴포넌트로 구성된 컴파운드 컴포넌트입니다. https://www.radix-ui.com/primitives/docs/components/dialog 의 설명을 참조하세요",
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "Drawer의 기본적인 사용예시입니다. Show Code를 눌러주세요",
      },
    },
  },
  render: () => {
    return (
      <Drawer.Root>
        <Drawer.Trigger>
          <Button variant={"emphasis"} size={"md"}>
            열어보기
          </Button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay />
          <FixedLayout x={"normal"} b={"normal"}>
            <Drawer.Content className=" ">
              <div className={` h-[50vh]`}>
                <Drawer.Header>Drawer Header</Drawer.Header>
                <Drawer.Footer>Drawer Footer</Drawer.Footer>
              </div>
            </Drawer.Content>
          </FixedLayout>
        </Drawer.Portal>
      </Drawer.Root>
    );
  },
};

export const Header: StoryObj<typeof Drawer.Header> = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          "Drawer의 Header 컴포넌트는 모달 창의 상단에 위치하는 컨테이너입니다. 이 컨테이너는 모달 창의 제목과 추가적인 컨텐츠를 포함할 수 있습니다.",
      },
    },
  },
  render: () => {
    return (
      <Drawer.Root>
        <Drawer.Header>hello</Drawer.Header>
      </Drawer.Root>
    );
  },
};

export const Footer: StoryObj<typeof Drawer.Header> = {
  args: {},
  argTypes: {},
  parameters: {
    docs: {
      description: {
        story: "Drawer의 Footer 컴포넌트는 모달 창의 하단에 위치하는 컨테이너입니다.",
      },
    },
  },
  render: () => {
    return (
      <Drawer.Root>
        <Drawer.Header>hello</Drawer.Header>
      </Drawer.Root>
    );
  },
};
