import { ArrowRightIcon, ReloadIcon } from "@radix-ui/react-icons";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta = {
  title: "Xds/Button",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
버튼은 사용자 상호작용을 위한 기본적인 컴포넌트입니다.

Props:
variant: 'default' | 'outline' | 'primary' | 'emphasis' | 'secondary' | 'ghost' | 'link' | 'icon' | 'ghostIcon'
size: 'sm' | 'md' | 'lg' | 'full' | 'icon'
rounded: 'sm' | 'md' | 'xl' | 'full'
loading: boolean - 로딩 상태 표시
startIcon/endIcon: ReactNode - 버튼 내 아이콘 배치
`,
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const ButtonVariants: Story = {
  parameters: {
    docs: {
      description: {
        story: "다양한 스타일 변형을 가진 버튼들입니다. variant prop으로 스타일을 지정할 수 있습니다.",
      },
    },
  },
  render: () => (
    <div className="space-y-4">
      <div className="space-x-4">
        <Button variant="default">Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="emphasis">Emphasis</Button>
      </div>
      <div className="space-x-4">
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
    </div>
  ),
};

export const ButtonSizes: Story = {
  parameters: {
    docs: {
      description: {
        story: "다양한 크기의 버튼들입니다. size prop으로 크기를 지정할 수 있습니다.",
      },
    },
  },
  render: () => (
    <div className="space-x-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="icon" variant="icon">
        <ArrowRightIcon />
      </Button>
    </div>
  ),
};

export const LoadingButton: Story = {
  parameters: {
    docs: {
      description: {
        story: "로딩 상태를 표시할 수 있는 버튼입니다. loading prop으로 로딩 상태를 제어합니다.",
      },
    },
  },
  render: () => (
    <div className="space-x-4">
      <Button loading>Loading</Button>
      <Button variant="primary" loading>
        Submitting
      </Button>
      <Button variant="outline" loading>
        Processing
      </Button>
    </div>
  ),
};

export const IconButton: Story = {
  parameters: {
    docs: {
      description: {
        story: "아이콘이 포함된 버튼입니다. startIcon과 endIcon prop으로 아이콘을 배치할 수 있습니다.",
      },
    },
  },
  render: () => (
    <div className="space-x-4">
      <Button startIcon={<ArrowRightIcon />}>Start Icon</Button>
      <Button endIcon={<ArrowRightIcon />}>End Icon</Button>
      <Button startIcon={<ReloadIcon />} endIcon={<ArrowRightIcon />}>
        Both Icons
      </Button>
    </div>
  ),
};

export const RoundedButton: Story = {
  parameters: {
    docs: {
      description: {
        story: "다양한 모서리 둥글기를 가진 버튼들입니다. rounded prop으로 둥글기를 지정할 수 있습니다.",
      },
    },
  },
  render: () => (
    <div className="space-x-4">
      <Button rounded="sm">Small Rounded</Button>
      <Button rounded="md">Medium Rounded</Button>
      <Button rounded="xl">Large Rounded</Button>
      <Button rounded="full">Full Rounded</Button>
    </div>
  ),
};
