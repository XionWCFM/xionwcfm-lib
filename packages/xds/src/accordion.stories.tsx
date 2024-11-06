import { ChevronDownIcon } from "@radix-ui/react-icons";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import * as Accordion from "./accordion";
import { Button } from "./button";

const meta: Meta = {
  title: "Xds/Accordion",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
아코디언은 콘텐츠를 접고 펼칠 수 있는 상호작용형 컴포넌트입니다.

주요 인터페이스:
- \`Accordion.Root\`: 아코디언의 최상위 컨테이너. type prop으로 'single' 또는 'multiple' 모드 설정
- \`Accordion.Item\`: 개별 아코디언 항목을 감싸는 컨테이너
- \`Accordion.Trigger\`: 아코디언을 펼치고 접는 트리거 버튼
- \`Accordion.Content\`: 아코디언 내부에 표시될 콘텐츠

특징:
- 단일/다중 선택 모드 지원
- 커스텀 아이콘 및 스타일링 지원
- 키보드 네비게이션 지원
`,
      },
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
            React makes it painless to create interactive UIs, efficiently updates and renders components when data changes,
            and can be used with other libraries or frameworks.
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
        story: "아코디언 내부에 다른 아코디언을 중첩하여 계층적인 구조를 표현할 수 있습니다. 복잡한 카테고리나 메뉴 구조에 적합합니다.",
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

export const CustomizedAccordion: Story = {
  parameters: {
    docs: {
      description: {
        story: "아코디언의 스타일과 동작을 커스터마이징한 예시입니다. 프로젝트의 디자인 시스템에 맞춰 스타일을 변경할 수 있습니다.",
      },
    },
  },
  render: () => {
    const [isOpen, setIsOpen] = useState<string[]>([]);

    return (
      <Accordion.Root
        type="multiple"
        value={isOpen}
        onValueChange={setIsOpen}
        className="rounded-lg border border-gray-200"
      >
        <Accordion.Item value="1" className="border-b border-gray-200">
          <Accordion.Trigger
            className="w-full bg-gray-50 p-4 hover:bg-gray-100"
            right={
              <ChevronDownIcon
                className={`transition-transform duration-200 ${isOpen.includes("1") ? "rotate-180" : ""}`}
              />
            }
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Active Projects
            </div>
          </Accordion.Trigger>
          <Accordion.Content className="p-4">
            <div className="space-y-2">
              <div className="rounded-md bg-gray-100 p-2">Project Alpha</div>
              <div className="rounded-md bg-gray-100 p-2">Project Beta</div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="2">
          <Accordion.Trigger
            className="w-full bg-gray-50 p-4 hover:bg-gray-100"
            right={
              <ChevronDownIcon
                className={`transition-transform duration-200 ${isOpen.includes("2") ? "rotate-180" : ""}`}
              />
            }
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-yellow-500" />
              Pending Reviews
            </div>
          </Accordion.Trigger>
          <Accordion.Content className="p-4">
            <div className="space-y-2">
              <div className="rounded-md bg-gray-100 p-2">Review #123</div>
              <div className="rounded-md bg-gray-100 p-2">Review #456</div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    );
  },
};
