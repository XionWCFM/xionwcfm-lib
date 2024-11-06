import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "./box";

const meta: Meta = {
  title: "Xds/Box",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Box는 레이아웃을 구성하는 기본 컴포넌트입니다.
`,
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const BasicBox: Story = {
  parameters: {
    docs: {
      description: {
        story: "기본적인 Box 컴포넌트입니다. 여백과 크기를 지정할 수 있습니다.",
      },
    },
  },
  render: () => (
    <Box className="bg-gray-100 p-16">
      <Box className="bg-blue-100 p-16 mb-16">Box with margin bottom</Box>
      <Box className="bg-green-100 p-16">Another box</Box>
    </Box>
  ),
};

export const PolymorphicBox: Story = {
  parameters: {
    docs: {
      description: {
        story: "다양한 HTML 요소로 렌더링할 수 있는 Box입니다. as prop을 사용하여 요소를 지정합니다.",
      },
    },
  },
  render: () => (
    <Box className="space-y-16">
      <Box as="section" className="bg-blue-100 p-16">
        This is a section
      </Box>
      <Box as="article" className="bg-green-100 p-16">
        This is an article
      </Box>
      <Box as="button" className="bg-red-100 p-16">
        This is a button
      </Box>
    </Box>
  ),
};

export const SpacingBox: Story = {
  parameters: {
    docs: {
      description: {
        story: "여백 시스템을 활용한 Box입니다. m, p 등의 spacing props를 사용할 수 있습니다.",
      },
    },
  },
  render: () => (
    <Box className="bg-gray-100">
      <Box m="16" p="16" className="bg-blue-100">
        Box with margin and padding
      </Box>
      <Box mt="32" px="24" className="bg-green-100">
        Box with margin-top and horizontal padding
      </Box>
    </Box>
  ),
};

export const DimensionsBox: Story = {
  parameters: {
    docs: {
      description: {
        story: "크기를 지정할 수 있는 Box입니다. w, h, minW, maxW 등의 dimension props를 사용할 수 있습니다.",
      },
    },
  },
  render: () => (
    <Box className="space-y-16">
      <Box h="32" className=" bg-primary-50">
        Half width box
      </Box>
      <Box h="32" className=" bg-gray-200">
        Max width constrained box
      </Box>
      <Box h="32" className=" bg-warning-200">
        Min width box
      </Box>
    </Box>
  ),
};
