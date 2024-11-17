import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "./button";
import * as Dropdown from "./dropdown";

const meta: Meta = {
  title: "Xds/Dropdown",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
드롭다운은 사용자에게 선택 가능한 옵션 목록을 제공하는 컴포넌트입니다.

- \`Dropdown.Root\`: 드롭다운의 최상위 컨테이너
- \`Dropdown.Trigger\`: 드롭다운을 열고 닫는 트리거 버튼
- \`Dropdown.Content\`: 드롭다운의 내용을 담는 컨테이너
- \`Dropdown.Item\`: 드롭다운 내부의 선택 가능한 항목

`,
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const BasicDropDown: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          "가장 기본적인 드롭다운 메뉴입니다. 단순한 항목 목록을 표시할 때 사용됩니다. 주로 간단한 선택 메뉴나 네비게이션에 활용됩니다.",
      },
    },
  },
  render: () => {
    return (
      <div className=" p-32">
        <Dropdown.Root>
          <Dropdown.Trigger asChild>
            <Button rounded={"md"} variant={"outline"} size={"md"} className=" w-[250px]">
              Dropdown
            </Button>
          </Dropdown.Trigger>
          <Dropdown.Portal>
            <Dropdown.Content loop>
              {["apple", "banana", "cherry"].map((item) => (
                <Dropdown.Item key={item}>{item}</Dropdown.Item>
              ))}
            </Dropdown.Content>
          </Dropdown.Portal>
        </Dropdown.Root>
      </div>
    );
  },
};

export const SubDropdown: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "중첩된 메뉴 구조를 보여주는 드롭다운입니다. 복잡한 메뉴 구조나 카테고리화된 옵션을 표시할 때 유용합니다. 주로 복잡한 설정 메뉴나 다계층 네비게이션에서 사용됩니다.",
      },
    },
  },
  render: () => {
    return (
      <div className=" p-32">
        <Dropdown.Root>
          <Dropdown.Trigger asChild>
            <Button variant={"outline"} size={"md"} className=" w-[250px]">
              Fruits
            </Button>
          </Dropdown.Trigger>
          <Dropdown.Portal>
            <Dropdown.Content loop>
              <Dropdown.Item>Apple</Dropdown.Item>
              <Dropdown.Label>Heelo</Dropdown.Label>
              <Dropdown.Sub>
                <Dropdown.SubTrigger>Citrus</Dropdown.SubTrigger>
                <Dropdown.Portal>
                  <Dropdown.SubContent>
                    <Dropdown.Item>Orange</Dropdown.Item>
                    <Dropdown.Item>Lemon</Dropdown.Item>
                  </Dropdown.SubContent>
                </Dropdown.Portal>
              </Dropdown.Sub>
            </Dropdown.Content>
          </Dropdown.Portal>
        </Dropdown.Root>
      </div>
    );
  },
};

export const CheckboxDropdown: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "다중 선택이 가능한 체크박스 드롭다운입니다. 사용자가 여러 옵션을 동시에 선택해야 하는 경우에 사용됩니다. 설정 메뉴나 필터 옵션 선택 등에 적합합니다.",
      },
    },
  },
  render: () => {
    const [checkedItems, setCheckedItems] = useState({
      notifications: true,
      sounds: false,
      messages: true,
    });

    return (
      <div className="p-32">
        <Dropdown.Root>
          <Dropdown.Trigger asChild>
            <Button variant="outline" size="md" className="w-[250px]">
              Settings
            </Button>
          </Dropdown.Trigger>
          <Dropdown.Portal>
            <Dropdown.Content className="w-56">
              <Dropdown.Label>System Preferences</Dropdown.Label>
              <Dropdown.Separator />
              <Dropdown.CheckboxItem
                checked={checkedItems.notifications}
                onCheckedChange={(checked) => setCheckedItems((prev) => ({ ...prev, notifications: checked }))}
              >
                Enable notifications
              </Dropdown.CheckboxItem>
              <Dropdown.CheckboxItem
                checked={checkedItems.sounds}
                onCheckedChange={(checked) => setCheckedItems((prev) => ({ ...prev, sounds: checked }))}
              >
                Enable sounds
              </Dropdown.CheckboxItem>
              <Dropdown.CheckboxItem
                checked={checkedItems.messages}
                onCheckedChange={(checked) => setCheckedItems((prev) => ({ ...prev, messages: checked }))}
              >
                Allow messages
              </Dropdown.CheckboxItem>
            </Dropdown.Content>
          </Dropdown.Portal>
        </Dropdown.Root>
      </div>
    );
  },
};

export const SeparatedDropdown: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "구분선을 사용하여 메뉴 항목을 논리적으로 그룹화한 드롭다운입니다. 관련된 옵션들을 시각적으로 구분하여 사용자의 이해를 돕습니다. 프로필 메뉴나 설정 메뉴와 같이 다양한 기능을 구분해서 보여줄 때 사용됩니다.",
      },
    },
  },
  render: () => {
    return (
      <div className="p-32">
        <Dropdown.Root>
          <Dropdown.Trigger asChild>
            <Button variant="outline" size="md" className="w-[250px]">
              Account
            </Button>
          </Dropdown.Trigger>
          <Dropdown.Portal>
            <Dropdown.Content className="w-56">
              <Dropdown.Label>My Account</Dropdown.Label>
              <Dropdown.Separator />
              <Dropdown.Item>Profile</Dropdown.Item>
              <Dropdown.Item>Billing</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Separator />
              <Dropdown.Label>Teams</Dropdown.Label>
              <Dropdown.Separator />
              <Dropdown.Item>New Team</Dropdown.Item>
              <Dropdown.Item>Invite Members</Dropdown.Item>
              <Dropdown.Separator />
              <Dropdown.Item className="text-red-500">Log out</Dropdown.Item>
            </Dropdown.Content>
          </Dropdown.Portal>
        </Dropdown.Root>
      </div>
    );
  },
};

export const RadioDropdown: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "단일 선택만 가능한 라디오 버튼 드롭다운입니다. 여러 옵션 중 하나만 선택해야 하는 경우에 사용됩니다. 테마 선택, 언어 설정과 같은 상호 배타적인 옵션 선택에 적합합니다.",
      },
    },
  },
  render: () => {
    const [selectedColor, setSelectedColor] = useState("blue");

    return (
      <div className="p-32">
        <Dropdown.Root>
          <Dropdown.Trigger asChild>
            <Button variant="outline" size="md" className="w-[250px]">
              Select Color
            </Button>
          </Dropdown.Trigger>
          <Dropdown.Portal>
            <Dropdown.Content className="w-56">
              <Dropdown.Label>Choose Theme Color</Dropdown.Label>
              <Dropdown.Separator />
              <Dropdown.RadioGroup value={selectedColor} onValueChange={setSelectedColor}>
                <Dropdown.RadioItem value="blue">Blue Theme</Dropdown.RadioItem>
                <Dropdown.RadioItem value="red">Red Theme</Dropdown.RadioItem>
                <Dropdown.RadioItem value="green">Green Theme</Dropdown.RadioItem>
                <Dropdown.RadioItem value="purple">Purple Theme</Dropdown.RadioItem>
              </Dropdown.RadioGroup>
            </Dropdown.Content>
          </Dropdown.Portal>
        </Dropdown.Root>
      </div>
    );
  },
};

export const DisabledDropdown: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "특정 항목이 비활성화된 드롭다운입니다. 현재 사용할 수 없는 기능이나 권한이 없는 작업을 표시할 때 사용됩니다. 사용자의 권한 레벨이나 현재 상태에 따라 특정 기능을 제한해야 할 때 활용됩니다.",
      },
    },
  },
  render: () => {
    return (
      <div className="p-32">
        <Dropdown.Root>
          <Dropdown.Trigger asChild>
            <Button variant="outline" size="md" className="w-[250px]">
              Actions
            </Button>
          </Dropdown.Trigger>
          <Dropdown.Portal>
            <Dropdown.Content className="w-56">
              <Dropdown.Label>Document Actions</Dropdown.Label>
              <Dropdown.Separator />
              <Dropdown.Item>Edit</Dropdown.Item>
              <Dropdown.Item disabled>Delete</Dropdown.Item>
              <Dropdown.Separator />
              <Dropdown.Label>Sharing</Dropdown.Label>
              <Dropdown.Separator />
              <Dropdown.Item>Share</Dropdown.Item>
              <Dropdown.Item disabled>Export to PDF</Dropdown.Item>
              <Dropdown.Sub>
                <Dropdown.SubTrigger disabled>More Options</Dropdown.SubTrigger>
                <Dropdown.Portal>
                  <Dropdown.SubContent>
                    <Dropdown.Item>Option 1</Dropdown.Item>
                    <Dropdown.Item>Option 2</Dropdown.Item>
                  </Dropdown.SubContent>
                </Dropdown.Portal>
              </Dropdown.Sub>
            </Dropdown.Content>
          </Dropdown.Portal>
        </Dropdown.Root>
      </div>
    );
  },
};
