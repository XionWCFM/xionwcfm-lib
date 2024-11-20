import { ChevronDownIcon } from "@radix-ui/react-icons";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "./button";
import * as Collapsible from "./collapsible";

const meta: Meta = {
  title: "Xds/Collapsible",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Collapsible은 콘텐츠를 접었다 펼 수 있는 컴포넌트입니다.",
      },
    },
  },
  argTypes: {
    open: {
      description: "콘텐츠의 펼침 상태",
      type: { name: "boolean" },
    },
    onOpenChange: {
      description: "상태 변경 시 호출되는 함수",
      type: { name: "function" },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const BasicCollapsible: Story = {
  parameters: {
    docs: {
      description: {
        story: "기본적인 Collapsible 컴포넌트입니다. 간단한 토글 기능이 필요할 때 사용합니다.",
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Collapsible.Root open={open} onOpenChange={setOpen}>
        <Collapsible.Trigger asChild>
          <Button
            variant="outline"
            right={<ChevronDownIcon className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />}
          >
            상세 정보 보기
          </Button>
        </Collapsible.Trigger>
        <Collapsible.Content className="mt-2 p-4 bg-gray-50 rounded-md">
          <p>여기에 상세 내용이 들어갑니다.</p>
          <p>접었다 펼 수 있는 콘텐츠입니다.</p>
        </Collapsible.Content>
      </Collapsible.Root>
    );
  },
};

export const ListCollapsible: Story = {
  parameters: {
    docs: {
      description: {
        story: "목록 형태의 콘텐츠를 접었다 펼 수 있는 Collapsible입니다.",
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Collapsible.Root open={open} onOpenChange={setOpen}>
        <Collapsible.Trigger asChild>
          <Button
            variant="ghost"
            className="w-full justify-between"
            right={<ChevronDownIcon className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />}
          >
            최근 주문 내역 (3)
          </Button>
        </Collapsible.Trigger>
        <Collapsible.Content className="space-y-2 mt-2">
          {[
            { id: 1, date: "2024-03-01", item: "상품 A" },
            { id: 2, date: "2024-02-28", item: "상품 B" },
            { id: 3, date: "2024-02-27", item: "상품 C" },
          ].map((order) => (
            <div key={order.id} className="p-4 bg-gray-50 rounded-md flex justify-between items-center">
              <span>{order.item}</span>
              <span className="text-gray-500 text-sm">{order.date}</span>
            </div>
          ))}
        </Collapsible.Content>
      </Collapsible.Root>
    );
  },
};

export const NestedCollapsible: Story = {
  parameters: {
    docs: {
      description: {
        story: "중첩된 Collapsible 컴포넌트입니다. 계층적인 구조를 표현할 때 사용합니다.",
      },
    },
  },
  render: () => {
    const [parentOpen, setParentOpen] = useState(false);
    const [childOpen, setChildOpen] = useState(false);

    return (
      <Collapsible.Root open={parentOpen} onOpenChange={setParentOpen}>
        <Collapsible.Trigger asChild>
          <Button
            variant="outline"
            right={
              <ChevronDownIcon className={`transition-transform duration-200 ${parentOpen ? "rotate-180" : ""}`} />
            }
          >
            카테고리
          </Button>
        </Collapsible.Trigger>
        <Collapsible.Content className="mt-2 p-4 bg-gray-50 rounded-md">
          <div className="space-y-4">
            <p>메인 카테고리 내용</p>

            <Collapsible.Root open={childOpen} onOpenChange={setChildOpen}>
              <Collapsible.Trigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  right={
                    <ChevronDownIcon className={`transition-transform duration-200 ${childOpen ? "rotate-180" : ""}`} />
                  }
                >
                  서브 카테고리
                </Button>
              </Collapsible.Trigger>
              <Collapsible.Content className="mt-2 p-4 bg-white rounded-md">
                <p>서브 카테고리 내용</p>
              </Collapsible.Content>
            </Collapsible.Root>
          </div>
        </Collapsible.Content>
      </Collapsible.Root>
    );
  },
};
