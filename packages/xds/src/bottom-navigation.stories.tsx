import {
  HomeIcon,
  PersonIcon,
  MagnifyingGlassIcon as SearchIcon,
  GearIcon as SettingsIcon,
} from "@radix-ui/react-icons";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { BottomNavigation } from "./bottom-navigation";

const meta: Meta = {
  title: "Xds/BottomNavigation",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
하단 네비게이션은 모바일 앱에서 주요 섹션 간 이동을 위한 네비게이션 컴포넌트입니다.

`,
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const BasicNavigation: Story = {
  parameters: {
    docs: {
      description: {
        story: "기본적인 하단 네비게이션 바입니다. 아이콘과 라벨을 함께 사용하여 주요 섹션을 표시합니다.",
      },
    },
  },
  render: () => {
    const [value, setValue] = useState("home");

    return (
      <div className="h-[200px] relative">
        <BottomNavigation.Root value={value} onValueChange={setValue}>
          <BottomNavigation.Action value="home" icon={<HomeIcon />} label="홈" />
          <BottomNavigation.Action value="search" icon={<SearchIcon />} label="검색" />
          <BottomNavigation.Action value="profile" icon={<PersonIcon />} label="프로필" />
          <BottomNavigation.Action value="settings" icon={<SettingsIcon />} label="설정" />
        </BottomNavigation.Root>
      </div>
    );
  },
};

export const IconOnlyNavigation: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "아이콘만 사용하는 미니멀한 디자인의 하단 네비게이션입니다. 공간이 제한적이거나 간단한 인터페이스가 필요할 때 사용합니다.",
      },
    },
  },
  render: () => {
    const [value, setValue] = useState("home");

    return (
      <div className="h-[200px] relative">
        <BottomNavigation.Root value={value} onValueChange={setValue}>
          <BottomNavigation.Action value="home" icon={<HomeIcon className="w-6 h-6" />} />
          <BottomNavigation.Action value="search" icon={<SearchIcon className="w-6 h-6" />} />
          <BottomNavigation.Action value="profile" icon={<PersonIcon className="w-6 h-6" />} />
          <BottomNavigation.Action value="settings" icon={<SettingsIcon className="w-6 h-6" />} />
        </BottomNavigation.Root>
      </div>
    );
  },
};

export const HideableNavigation: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "스크롤이나 특정 상황에서 숨길 수 있는 하단 네비게이션입니다. 콘텐츠에 집중이 필요한 상황에서 유용합니다.",
      },
    },
  },
  render: () => {
    const [value, setValue] = useState("home");
    const [isVisible, setIsVisible] = useState(true);

    return (
      <div className="h-[200px] relative">
        <div className="mb-4 flex gap-2">
          <button className="px-4 py-2 bg-gray-100 rounded" onClick={() => setIsVisible((prev) => !prev)}>
            {isVisible ? "Hide Navigation" : "Show Navigation"}
          </button>
        </div>
        <BottomNavigation.Root value={value} onValueChange={setValue} open={isVisible}>
          <BottomNavigation.Action value="home" icon={<HomeIcon />} label="홈" />
          <BottomNavigation.Action value="search" icon={<SearchIcon />} label="검색" />
          <BottomNavigation.Action value="profile" icon={<PersonIcon />} label="프로필" />
          <BottomNavigation.Action value="settings" icon={<SettingsIcon />} label="설정" />
        </BottomNavigation.Root>
      </div>
    );
  },
};

export const CustomStyledNavigation: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "커스텀 스타일이 적용된 하단 네비게이션입니다. 프로젝트의 디자인 시스템에 맞춰 스타일을 변경할 수 있습니다.",
      },
    },
  },
  render: () => {
    const [value, setValue] = useState("home");

    return (
      <div className="h-[200px] relative">
        <BottomNavigation.Root value={value} onValueChange={setValue} className="bg-gray-900">
          <BottomNavigation.Action
            value="home"
            icon={<HomeIcon className="text-white" />}
            label="홈"
            className="text-white hover:bg-gray-800"
          />
          <BottomNavigation.Action
            value="search"
            icon={<SearchIcon className="text-white" />}
            label="검색"
            className="text-white hover:bg-gray-800"
          />
          <BottomNavigation.Action
            value="profile"
            icon={<PersonIcon className="text-white" />}
            label="프로필"
            className="text-white hover:bg-gray-800"
          />
          <BottomNavigation.Action
            value="settings"
            icon={<SettingsIcon className="text-white" />}
            label="설정"
            className="text-white hover:bg-gray-800"
          />
        </BottomNavigation.Root>
      </div>
    );
  },
};
