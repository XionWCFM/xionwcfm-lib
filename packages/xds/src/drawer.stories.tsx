import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import * as Drawer from "./drawer";
import { Button } from "./button";
import { Input } from "./input";

const meta: Meta = {
  title: "Xds/Drawer",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Drawer는 화면 측면에서 슬라이드되어 나타나는 패널 컴포넌트입니다.",
      },
    },
  },
  argTypes: {
    open: {
      description: '드로어의 열림/닫힘 상태',
      type: { name: 'boolean' }
    },
    onOpenChange: {
      description: '드로어 상태 변경 시 호출되는 함수',
      type: { name: 'function' }
    }
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const BasicDrawer: Story = {
  parameters: {
    docs: {
      description: {
        story: "기본적인 드로어입니다. 측면에서 슬라이드되어 나타나는 패널을 제공합니다.",
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer.Root open={open} onOpenChange={setOpen}>
          <Drawer.Portal>
            <Drawer.Overlay />
            <Drawer.Content>
              <div className="p-4">
                <h2 className="text-lg font-semibold">Drawer Title</h2>
                <p>This is drawer content</p>
                <Button onClick={() => setOpen(false)}>Close</Button>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      </div>
    );
  },
};

export const NavigationDrawer: Story = {
  parameters: {
    docs: {
      description: {
        story: "네비게이션 메뉴를 포함하는 드로어입니다. 모바일 메뉴나 사이드바로 활용됩니다.",
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(false);
    const menuItems = [
      { label: '홈', href: '#' },
      { label: '프로필', href: '#' },
      { label: '설정', href: '#' },
      { label: '도움말', href: '#' },
    ];

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Menu</Button>
        <Drawer.Root open={open} onOpenChange={setOpen}>
          <Drawer.Portal>
            <Drawer.Overlay />
            <Drawer.Content>
              <div className="p-4 h-full">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold">Menu</h2>
                  <Button variant="ghost" onClick={() => setOpen(false)}>✕</Button>
                </div>
                <nav className="space-y-2">
                  {menuItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block p-2 hover:bg-gray-100 rounded transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      </div>
    );
  },
};

export const FormDrawer: Story = {
  parameters: {
    docs: {
      description: {
        story: "폼을 포함하는 드로어입니다. 새로운 항목 추가나 편집 기능에 활용됩니다.",
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Add New Item</Button>
        <Drawer.Root open={open} onOpenChange={setOpen}>
          <Drawer.Portal>
            <Drawer.Overlay />
            <Drawer.Content>
              <div className="p-4">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold">Add New Item</h2>
                  <Button variant="ghost" onClick={() => setOpen(false)}>✕</Button>
                </div>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Title</label>
                    <Input placeholder="Enter title" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <Input placeholder="Enter description" />
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
                    <Button variant="primary">Save</Button>
                  </div>
                </form>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      </div>
    );
  },
};

export const PreviewDrawer: Story = {
  parameters: {
    docs: {
      description: {
        story: "미리보기나 상세 정보를 표시하는 드로어입니다. 목록에서 항목을 선택했을 때 상세 정보를 보여주는 데 활용됩니다.",
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setOpen(true)}>View Details</Button>
        <Drawer.Root open={open} onOpenChange={setOpen}>
          <Drawer.Portal>
            <Drawer.Overlay />
            <Drawer.Content>
              <div className="p-4">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold">Item Details</h2>
                  <Button variant="ghost" onClick={() => setOpen(false)}>✕</Button>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-100 p-4 rounded">
                    <h3 className="font-medium">Title</h3>
                    <p>Sample Item</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded">
                    <h3 className="font-medium">Description</h3>
                    <p>This is a detailed description of the item...</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded">
                    <h3 className="font-medium">Additional Info</h3>
                    <p>More information about the item...</p>
                  </div>
                </div>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      </div>
    );
  },
};
