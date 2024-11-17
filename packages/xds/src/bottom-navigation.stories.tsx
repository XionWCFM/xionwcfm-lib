import { GearIcon, HomeIcon, MagnifyingGlassIcon, PersonIcon } from "@radix-ui/react-icons";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { BottomNavigation } from "./bottom-navigation";

const meta: Meta = {
  title: "Xds/BottomNavigation",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "하단 네비게이션은 모바일 앱의 주요 섹션 간 이동을 위한 컴포넌트입니다.",
      },
    },
  },
  argTypes: {
    value: {
      description: "현재 선택된 메뉴 값",
      type: { name: "string" },
    },
    onValueChange: {
      description: "메뉴 선택 시 호출되는 함수",
      type: { name: "function" },
    },
    open: {
      description: "네비게이션 바의 표시 여부",
      type: { name: "boolean" },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const BasicNavigation: Story = {
  parameters: {
    docs: {
      description: {
        story: "기본적인 하단 네비게이션입니다. 아이콘과 라벨을 함께 사용하여 주요 섹션을 표시합니다.",
      },
    },
  },
  render: () => {
    const [value, setValue] = useState("home");

    return (
      <div className="h-[200px] relative">
        <BottomNavigation.Root value={value} onValueChange={setValue}>
          <BottomNavigation.Action value="home" icon={<HomeIcon />} label="홈" />
          <BottomNavigation.Action value="search" icon={<MagnifyingGlassIcon />} label="검색" />
          <BottomNavigation.Action value="profile" icon={<PersonIcon />} label="프로필" />
          <BottomNavigation.Action value="settings" icon={<GearIcon />} label="설정" />
        </BottomNavigation.Root>
      </div>
    );
  },
};

export const IconOnlyNavigation: Story = {
  parameters: {
    docs: {
      description: {
        story: "필요한 경우 아이콘만 사용할 수 있습니다.",
      },
    },
  },
  render: () => {
    const [value, setValue] = useState("home");

    return (
      <div className="h-[200px] relative">
        <BottomNavigation.Root value={value} onValueChange={setValue}>
          <BottomNavigation.Action value="home" icon={<HomeIcon className="w-16 h-16" />} />
          <BottomNavigation.Action value="search" icon={<MagnifyingGlassIcon className="w-16 h-16" />} />
          <BottomNavigation.Action value="profile" icon={<PersonIcon className="w-16 h-16" />} />
          <BottomNavigation.Action value="settings" icon={<GearIcon className="w-16 h-16" />} />
        </BottomNavigation.Root>
      </div>
    );
  },
};

export const HideableNavigation: Story = {
  parameters: {
    docs: {
      description: {
        story: "스크롤이나 특정 상황에서 숨길 수 있는 하단 네비게이션입니다.",
      },
    },
  },
  render: () => {
    const [value, setValue] = useState("home");
    const [isVisible, setIsVisible] = useState(true);

    return (
      <div className="h-[200px] relative">
        <div className="mb-4">
          <button className="px-4 py-2 bg-gray-100 rounded" onClick={() => setIsVisible((prev) => !prev)}>
            {isVisible ? "Hide Navigation" : "Show Navigation"}
          </button>
        </div>
        <BottomNavigation.Root value={value} onValueChange={setValue} open={isVisible}>
          <BottomNavigation.Action value="home" icon={<HomeIcon />} label="홈" />
          <BottomNavigation.Action value="search" icon={<MagnifyingGlassIcon />} label="검색" />
          <BottomNavigation.Action value="profile" icon={<PersonIcon />} label="프로필" />
          <BottomNavigation.Action value="settings" icon={<GearIcon />} label="설정" />
        </BottomNavigation.Root>
      </div>
    );
  },
};

export const NotificationBadge: Story = {
  parameters: {
    docs: {
      description: {
        story: "알림이나 카운터를 표시하는 배지가 있는 하단 네비게이션입니다.",
      },
    },
  },
  render: () => {
    const [value, setValue] = useState("home");

    return (
      <div className="h-[200px] relative">
        <BottomNavigation.Root value={value} onValueChange={setValue}>
          <BottomNavigation.Action value="home" icon={<HomeIcon />} label="홈" />
          <BottomNavigation.Action
            value="notifications"
            icon={
              <div className="relative">
                <HomeIcon />
                <span className="absolute -top-4 -right-4 w-8 h-8 bg-danger-400 rounded-full" />
              </div>
            }
            label="알림"
          />
          <BottomNavigation.Action
            value="messages"
            icon={
              <div className="relative">
                <HomeIcon />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full px-1">12</span>
              </div>
            }
            label="메시지"
          />
          <BottomNavigation.Action value="profile" icon={<PersonIcon />} label="프로필" />
        </BottomNavigation.Root>
      </div>
    );
  },
};
