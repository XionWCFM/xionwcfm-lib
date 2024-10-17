import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import * as Dropdown from "./dropdown";

const meta: Meta = {
  title: "Xds/Dropdown",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const DropDowns: Story = {
  args: {},
  decorators: (Story) => {
    return (
      <div className=" p-32">
        <button className="animate-slideUpAndFade">Bdfsamkl</button>
        <Dropdown.Root>
          <Dropdown.Trigger>
            <Button variant={"outline"} size={"md"} className=" w-[250px]">
              hello
            </Button>
          </Dropdown.Trigger>
          <Dropdown.Portal>
            <Dropdown.Content loop>
              <Dropdown.Label />
              <Dropdown.Item>1</Dropdown.Item>
              <Dropdown.Item>1</Dropdown.Item>
              <Dropdown.Item>1</Dropdown.Item>
              <Dropdown.Item>1</Dropdown.Item>
              <Dropdown.Item>1</Dropdown.Item>
              <Dropdown.Item>1</Dropdown.Item>
              <Dropdown.Item>1</Dropdown.Item>
              <Dropdown.Item>1</Dropdown.Item>
              <Dropdown.Sub>
                <Dropdown.SubTrigger>InviteUser</Dropdown.SubTrigger>
                <Dropdown.Portal>
                  <Dropdown.SubContent>
                    <Dropdown.Item>hello</Dropdown.Item>
                    <Dropdown.Item>hellodsa</Dropdown.Item>
                  </Dropdown.SubContent>
                </Dropdown.Portal>
              </Dropdown.Sub>

              <Dropdown.Item>1</Dropdown.Item>

              <Dropdown.Group>
                <Dropdown.Item>안녕하세요</Dropdown.Item>
              </Dropdown.Group>

              <Dropdown.Separator />
            </Dropdown.Content>
          </Dropdown.Portal>
        </Dropdown.Root>
      </div>
    );
  },
};
