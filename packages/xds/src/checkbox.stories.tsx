import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Checkbox, CircleCheckbox, NumberCheckbox, SquareCheckbox } from "./checkbox";
import { List, Row } from "./list";

const meta: Meta = {
  title: "Xds/Checkbox",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "체크박스는 사용자가 여러 옵션 중에서 하나 이상을 선택할 수 있게 해주는 폼 컨트롤입니다.",
      },
    },
  },
  argTypes: {
    checked: {
      control: "boolean",
      description: "체크박스의 선택 상태",
      type: { name: "boolean" },
    },
    disabled: {
      control: "boolean",
      description: "체크박스의 비활성화 상태",
      type: { name: "boolean" },
    },
    onCheckedChange: {
      description: "체크박스 상태 변경 시 호출되는 함수",
      type: { name: "function" },
    },
    className: {
      description: "추가 스타일링을 위한 클래스",
      type: { name: "string" },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const BasicCheckbox: Story = {
  parameters: {
    docs: {
      description: {
        story: "기본적인 체크박스입니다. 단순한 선택/해제 기능이 필요할 때 사용합니다.",
      },
    },
  },
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <div className="flex flex-col gap-y-16">
        <List as="button" onClick={() => setChecked(!checked)}>
          <Row left={<Checkbox checked={checked} />}>이용약관에 동의합니다</Row>
        </List>
        <Checkbox disabled />
      </div>
    );
  },
};

export const SquareStyleCheckbox: Story = {
  parameters: {
    docs: {
      description: {
        story: "네모난 체크박스입니다.",
      },
    },
  },
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <div className="flex flex-col gap-y-16">
        <List as="button" onClick={() => setChecked(!checked)}>
          <Row left={<SquareCheckbox checked={checked} />}>이용약관에 동의합니다</Row>
        </List>
        <SquareCheckbox disabled />
      </div>
    );
  },
};

export const CircleStyle: Story = {
  parameters: {
    docs: {
      description: {
        story: "동그란 모양의 체크박스입니다. 시각적으로 부드러운 느낌이 필요할 때 사용합니다.",
      },
    },
  },
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <div className="flex flex-col gap-y-16">
        <CircleCheckbox checked={checked} onCheckedChange={(checked) => setChecked(checked === true)} />
        <CircleCheckbox disabled />
      </div>
    );
  },
};

export const NumberStyle: Story = {
  parameters: {
    docs: {
      description: {
        story: "숫자를 포함할 수 있는 체크박스입니다. 순서나 수량을 표시해야 하는 선택 상황에서 사용합니다.",
      },
    },
  },
  render: () => {
    return (
      <div className="gap-y-16 flex flex-col">
        <NumberCheckbox>1</NumberCheckbox>
        <NumberCheckbox>100</NumberCheckbox>
        <NumberCheckbox disabled />
      </div>
    );
  },
};

export const CheckboxGroup: Story = {
  parameters: {
    docs: {
      description: {
        story: "체크박스 그룹을 사용한 예시입니다. 관련된 옵션들을 그룹화하여 표시할 때 사용합니다.",
      },
    },
  },
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);

    const languages = [
      { id: "js", label: "JavaScript" },
      { id: "ts", label: "TypeScript" },
      { id: "py", label: "Python" },
      { id: "java", label: "Java" },
    ];

    return (
      <div className="space-y-4">
        <div className="text-lg font-semibold">선호하는 프로그래밍 언어</div>
        <div className="space-y-2">
          {languages.map((lang) => (
            <List
              key={lang.id}
              as="button"
              onClick={() =>
                setSelected((prev) =>
                  prev.includes(lang.id) ? prev.filter((item) => item !== lang.id) : [...prev, lang.id],
                )
              }
            >
              <Row left={<Checkbox checked={selected.includes(lang.id)} />}>{lang.label}</Row>
            </List>
          ))}
        </div>
        <div className="text-sm text-gray-500">
          선택된 언어: {selected.map((id) => languages.find((lang) => lang.id === id)?.label).join(", ")}
        </div>
      </div>
    );
  },
};

export const IndeterminateCheckbox: Story = {
  parameters: {
    docs: {
      description: {
        story: "중간 상태를 가진 체크박스입니다. 하위 항목 중 일부만 선택된 경우를 표시할 때 사용합니다.",
      },
    },
  },
  render: () => {
    const [parentChecked, setParentChecked] = useState(false);
    const [childItems, setChildItems] = useState({
      item1: false,
      item2: false,
      item3: false,
    });

    const handleParentChange = () => {
      const newValue = !parentChecked;
      setParentChecked(newValue);
      const newChildItems = Object.keys(childItems).reduce<typeof childItems>(
        (acc, key) => {
          acc[key as keyof typeof childItems] = newValue;
          return acc;
        },
        { ...childItems },
      );
      setChildItems(newChildItems);
    };

    const handleChildChange = (key: string) => {
      const newChildItems = {
        ...childItems,
        [key]: !childItems[key as keyof typeof childItems],
      };
      setChildItems(newChildItems);

      // 부모 체크박스 상태 업데이트
      const checkedCount = Object.values(newChildItems).filter(Boolean).length;
      if (checkedCount === 0) setParentChecked(false);
      else if (checkedCount === Object.keys(newChildItems).length) setParentChecked(true);
      else setParentChecked(false);
    };

    return (
      <div className="space-y-2">
        <List as="button" onClick={handleParentChange}>
          <Row
            left={
              <Checkbox
                checked={
                  Object.values(childItems).some(Boolean) && !Object.values(childItems).every(Boolean)
                    ? "indeterminate"
                    : parentChecked
                }
              />
            }
          >
            전체 선택
          </Row>
        </List>
        <div className="ml-8 space-y-2">
          <List>
            {Object.entries(childItems).map(([key, checked]) => (
              <Row key={key} onClick={() => handleChildChange(key)} left={<Checkbox checked={checked} />}>
                {key}
              </Row>
            ))}
          </List>
        </div>
      </div>
    );
  },
};
