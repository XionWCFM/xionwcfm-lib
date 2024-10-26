import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import * as Collapsible from "./collapsible";
const meta: Meta = {
  title: "Xds/Collapsible",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const CollapsibleStory: Story = {
  args: {},
  decorators: (Story) => {
    return (
      <>
        <Collapsible.Root>
          <Collapsible.Trigger asChild>
            <Button>hello</Button>
          </Collapsible.Trigger>
          <Collapsible.Content>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
          </Collapsible.Content>
        </Collapsible.Root>
      </>
    );
  },
};
