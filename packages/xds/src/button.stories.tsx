import { ArrowRightIcon, ReloadIcon } from "@radix-ui/react-icons";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta = {
  title: "Xds/Button",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "버튼은 사용자의 행동을 유도하고 상호작용을 처리하는 기본적인 컴포넌트입니다.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "secondaryLow",
        "outline",
        "primary",
        "emphasis",
        "secondary",
        "ghost",
        "link",
        "icon",
        "ghostIcon",
      ],
      description: "버튼의 시각적 스타일",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "full", "icon"],
      description: "버튼의 크기",
    },
    rounded: {
      control: "select",
      options: ["default", "sm", "md", "xl", "full"],
      description: "버튼 모서리의 둥글기",
    },
    loading: {
      control: "boolean",
      description: "로딩 상태 표시",
    },
    disabled: {
      control: "boolean",
      description: "버튼 비활성화 상태",
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const ButtonVariants: Story = {
  args: {
    children: "Button",
    variant: "default",
    size: "md",
    rounded: "md",
    disabled: false,
    loading: false,
  },
  parameters: {
    docs: {
      description: {
        story: "다양한 상황에 맞는 버튼 스타일을 제공합니다. args를 통해 버튼의 스타일을 직접 변경해볼 수 있습니다.",
      },
    },
  },
  render: (args) => <Button {...args} />,
};

export const ButtonSizes: Story = {
  parameters: {
    docs: {
      description: {
        story: "상황에 맞는 다양한 크기의 버튼을 제공합니다.",
      },
    },
  },
  render: () => (
    <div className="space-y-4">
      <div className="space-x-4">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
      <div>
        <Button size="full" variant="primary">
          Full Width
        </Button>
      </div>
      <div className="space-x-4">
        <Button size="icon" variant="icon">
          <ArrowRightIcon />
        </Button>
      </div>
    </div>
  ),
};

export const LoadingStates: Story = {
  parameters: {
    docs: {
      description: {
        story: "작업 진행 상태를 표시하는 로딩 버튼입니다.",
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

export const IconButtons: Story = {
  parameters: {
    docs: {
      description: {
        story: "아이콘과 함께 사용하여 버튼의 목적을 시각적으로 강조할 수 있습니다.",
      },
    },
  },
  render: () => (
    <div className="space-x-4">
      <Button left={<ArrowRightIcon />}>Start Icon</Button>
      <Button right={<ArrowRightIcon />}>End Icon</Button>
      <Button left={<ReloadIcon />} right={<ArrowRightIcon />}>
        Both Icons
      </Button>
    </div>
  ),
};

export const RoundedButtons: Story = {
  parameters: {
    docs: {
      description: {
        story: "상황에 맞는 다양한 모서리 둥글기를 제공합니다.",
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

export const ButtonStates: Story = {
  parameters: {
    docs: {
      description: {
        story: "버튼의 다양한 상태를 보여줍니다.",
      },
    },
  },
  render: () => (
    <div className="space-y-4">
      <div className="space-x-4">
        <Button>Normal</Button>
        <Button disabled>Disabled</Button>
        <Button loading>Loading</Button>
      </div>
      <div className="space-x-4">
        <Button variant="primary">Normal</Button>
        <Button variant="primary" disabled>
          Disabled
        </Button>
        <Button variant="primary" loading>
          Loading
        </Button>
      </div>
    </div>
  ),
};

export const CallToAction: Story = {
  parameters: {
    docs: {
      description: {
        story: "주요 행동을 유도하는 강조된 버튼입니다.",
      },
    },
  },
  render: () => (
    <div className="space-y-4 max-w-sm">
      <Button variant="emphasis" size="full" rounded="xl">
        시작하기
      </Button>
      <Button variant="outline" size="full" rounded="xl">
        더 알아보기
      </Button>
    </div>
  ),
};
