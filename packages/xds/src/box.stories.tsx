import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "./box";
const keys = Object.keys({
  "0": "w-0",
  "4": "w-4",
  "8": "w-8",
  "12": "w-12",
  "16": "w-16",
  "20": "w-20",
  "24": "w-24",
  "28": "w-28",
  "32": "w-32",
  "36": "w-36",
  "40": "w-40",
  "44": "w-44",
  "48": "w-48",
  "64": "w-64",
  "76": "w-76",
  "88": "w-88",
  "100": "w-100",
  "128": "w-128",
  "256": "w-256",
  "512": "w-512",
  "768": "w-768",
  "1024": "w-1024",
  "1440": "w-1440",
  "50%": "w-1/2",
  "100%": "w-full",
  screen: "w-screen",
});

const meta: Meta<typeof Box> = {
  title: "Xds/Box",
  tags: ["autodocs"],
  component: Box,
  argTypes: {
    asChild: {
      control: "boolean",
      description: "asChild",
    },
    h: {
      control: "select",
      description: "height",
      options: keys,
    },
    w: {
      control: "select",
      description: "width",
      options: keys,
    },
    m: {
      control: "select",
      description: "margin",
      options: keys,
    },
    p: {
      control: "select",
      description: "padding",
      options: keys,
    },
    children: {
      control: "object",
      description: "reactnode 타입을 받습니다.",
    },
    position: {
      control: "select",
      description: "position",
      options: [
        "relative",
        "absolute",
        "fixed",
        "sticky",
        "static",
        "inherit",
        "initial",
        "revert",
        "revert-layer",
        "unset",
      ],
    },
    className: {
      control: "text",
      description: "className",
    },
    as: {
      control: "text",
      description: "as",
    },
  },
  parameters: {
    docs: {
      description: {
        component: "Box는 margin, padding에 대한 지원을 가지고 있습니다.",
      },
    },
  },
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {},
};
