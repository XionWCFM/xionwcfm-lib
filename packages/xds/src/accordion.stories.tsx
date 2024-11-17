import { ChevronDownIcon } from "@radix-ui/react-icons";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import * as Accordion from "./accordion";
import { Checkbox, CircleCheckbox } from "./checkbox";

const meta: Meta = {
  title: "Xds/Accordion",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "아코디언은 콘텐츠를 접고 펼칠 수 있는 상호작용형 컴포넌트입니다.",
      },
    },
  },
  argTypes: {
    type: {
      control: "select",
      options: ["single", "multiple"],
      description: "아코디언의 동작 모드",
    },
    value: {
      description: "현재 열린 아코디언 항목의 값",
    },
    onValueChange: {
      description: "아코디언 상태 변경 시 호출되는 함수",
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const SingleAccordionStory: Story = {
  parameters: {
    docs: {
      description: {
        story: "한 번에 하나의 항목만 열 수 있는 기본적인 아코디언입니다. FAQ, 설정 메뉴 등에서 주로 사용됩니다.",
      },
    },
  },
  render: () => {
    return (
      <Accordion.Root type="single">
        <Accordion.Item value="1">
          <Accordion.Trigger right={<ChevronDownIcon />}>What is React?</Accordion.Trigger>
          <Accordion.Content className="bg-gray-50 p-4">
            React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and
            isolated pieces of code called "components".
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="2">
          <Accordion.Trigger right={<ChevronDownIcon />}>Why use React?</Accordion.Trigger>
          <Accordion.Content className="bg-gray-50 p-4">
            React makes it painless to create interactive UIs, efficiently updates and renders components when data
            changes, and can be used with other libraries or frameworks.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    );
  },
};

export const MultipleAccordionStory: Story = {
  parameters: {
    docs: {
      description: {
        story: "여러 항목을 동시에 열 수 있는 아코디언입니다. 복잡한 설정 메뉴나 다중 섹션 문서에서 활용됩니다.",
      },
    },
  },
  render: () => {
    return (
      <Accordion.Root type="multiple">
        <Accordion.Item value="1">
          <Accordion.Trigger right={<ChevronDownIcon />}>Development Setup</Accordion.Trigger>
          <Accordion.Content className="bg-gray-50 p-4">
            <ul className="list-disc pl-4">
              <li>Node.js 설치</li>
              <li>Git 설치</li>
              <li>IDE 설정</li>
            </ul>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="2">
          <Accordion.Trigger right={<ChevronDownIcon />}>Project Structure</Accordion.Trigger>
          <Accordion.Content className="bg-gray-50 p-4">
            <ul className="list-disc pl-4">
              <li>src 디렉토리</li>
              <li>설정 파일들</li>
              <li>패키지 관리</li>
            </ul>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    );
  },
};

export const NestedAccordion: Story = {
  parameters: {
    docs: {
      description: {
        story: "아코디언을 중첩해야하는 경우 최대 2번까지만 중첩해서 사용하도록 합니다.",
      },
    },
  },
  render: () => {
    return (
      <Accordion.Root type="single">
        <Accordion.Item value="1">
          <Accordion.Trigger right={<ChevronDownIcon />}>Frontend Development</Accordion.Trigger>
          <Accordion.Content className="bg-gray-50 p-4">
            <Accordion.Root type="multiple">
              <Accordion.Item value="1-1">
                <Accordion.Trigger right={<ChevronDownIcon />}>React</Accordion.Trigger>
                <Accordion.Content className="bg-white p-4">React Fundamentals</Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value="1-2">
                <Accordion.Trigger right={<ChevronDownIcon />}>Vue</Accordion.Trigger>
                <Accordion.Content className="bg-white p-4">Vue Basics</Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    );
  },
};

export const FAQAccordion: Story = {
  parameters: {
    docs: {
      description: {
        story: "FAQ 섹션을 구현한 아코디언입니다. ",
      },
    },
  },
  render: () => (
    <Accordion.Root type="single" className="space-y-2">
      {[
        {
          q: "배송은 얼마나 걸리나요?",
          a: "일반적으로 2-3일 소요되며, 지역에 따라 달라질 수 있습니다.",
        },
        {
          q: "교환/반품이 가능한가요?",
          a: "구매 후 7일 이내에 교환/반품이 가능합니다.",
        },
        {
          q: "해외 배송도 가능한가요?",
          a: "현재 해외 배송은 지원하지 않습니다.",
        },
      ].map((item, index) => (
        <Accordion.Item key={index} value={`faq-${index}`} className="rounded-lg border border-gray-200">
          <Accordion.Trigger className="w-full p-4 hover:bg-gray-50" right={<ChevronDownIcon />}>
            {item.q}
          </Accordion.Trigger>
          <Accordion.Content className="p-4 bg-gray-50">{item.a}</Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  ),
};

export const NavigationAccordion: Story = {
  parameters: {
    docs: {
      description: {
        story: "사이드바와 조합하여 사용할 수 있습니다.",
      },
    },
  },
  render: () => (
    <div className="w-[400px] border-r border-gray-200 h-[400px] p-4">
      <Accordion.Root type="multiple" className="space-y-2">
        <Accordion.Item value="products">
          <Accordion.Trigger className="w-full text-left" right={<ChevronDownIcon />}>
            제품
          </Accordion.Trigger>
          <Accordion.Content>
            <div className="pl-4 py-2 space-y-2">
              <div className="hover:bg-gray-100 p-2 rounded cursor-pointer">신상품</div>
              <div className="hover:bg-gray-100 p-2 rounded cursor-pointer">베스트</div>
              <div className="hover:bg-gray-100 p-2 rounded cursor-pointer">특가</div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="categories">
          <Accordion.Trigger className="w-full text-left" right={<ChevronDownIcon />}>
            카테고리
          </Accordion.Trigger>
          <Accordion.Content>
            <div className="pl-4 py-2 space-y-2">
              <div className="hover:bg-gray-100 p-2 rounded cursor-pointer">의류</div>
              <div className="hover:bg-gray-100 p-2 rounded cursor-pointer">신발</div>
              <div className="hover:bg-gray-100 p-2 rounded cursor-pointer">액세서리</div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  ),
};

export const FilterAccordion: Story = {
  parameters: {
    docs: {
      description: {
        story: "필터링이 필요한 경우 체크박스 컴포넌트와 조합할 수 있습니다.",
      },
    },
  },
  render: () => {
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

    return (
      <div className="w-[400px] border rounded-lg p-4">
        <Accordion.Root type="multiple" className="space-y-2">
          <Accordion.Item value="price">
            <Accordion.Trigger className="w-full text-left" right={<ChevronDownIcon />}>
              가격대
            </Accordion.Trigger>
            <Accordion.Content>
              <div className="space-y-2 p-2">
                {["0-50,000원", "50,000-100,000원", "100,000원 이상"].map((range) => (
                  <label key={range} className="flex items-center space-x-2">
                    <Checkbox
                      checked={selectedFilters.includes(range)}
                      onCheckedChange={() => {
                        setSelectedFilters((prev) =>
                          prev.includes(range) ? prev.filter((item) => item !== range) : [...prev, range],
                        );
                      }}
                    />
                    <span>{range}</span>
                  </label>
                ))}
              </div>
            </Accordion.Content>
          </Accordion.Item>
          {/* 추가 필터 항목들... */}
        </Accordion.Root>
      </div>
    );
  },
};
