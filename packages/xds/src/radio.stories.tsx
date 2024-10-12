import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Paragraph } from "./paragraph";
import { Radio } from "./radio";

const meta: Meta<typeof Radio> = {
  title: "Xds/Radio",
  component: Radio,
  tags: ["autodocs"],
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof Radio>;

export const InputStory: Story = {
  args: {},
  decorators: (Story) => {
    const [value, setValue] = useState("123");
    const [value2, setValue2] = useState("");
    return (
      <div className="flex min-h-screen flex-col gap-y-16">
        <Paragraph>active case</Paragraph>

        <Radio value={value} onChange={(e) => setValue(e.target.value)}>
          <Radio.Option id="hello" value={"123"}>
            옵션1
          </Radio.Option>
          <Radio.Option id="2worl" value={"234"}>
            옵션2
          </Radio.Option>
          <Radio.Option id="asd" value={"3"}>
            옵션3
          </Radio.Option>
        </Radio>

        <Paragraph>disabled case</Paragraph>

        <Radio disabled value={value2} onChange={(e) => setValue2(e.target.value)}>
          <Radio.Option id="hellddo" value={"123"}>
            밸류1
          </Radio.Option>
          <Radio.Option id="2wordl" value={"234"}>
            밸류2
          </Radio.Option>
          <Radio.Option id="asdd" value={"3"}>
            밸류3
          </Radio.Option>
        </Radio>

        <Paragraph>Customize Width</Paragraph>
        <div className=" w-[200px]">
          <Radio>
            <Radio.Option id="sadhellddo" value={"123"}>
              밸류1
            </Radio.Option>
            <Radio.Option id="2wodsadsrdl" value={"234"}>
              밸류2
            </Radio.Option>
          </Radio>
        </div>

        <Paragraph>active case</Paragraph>

        <Radio value={value} onChange={(e) => setValue(e.target.value)} variant={"pale"}>
          <Radio.Option id="hello" value={"123"}>
            옵션1
          </Radio.Option>
          <Radio.Option id="2worl" value={"234"}>
            옵션2
          </Radio.Option>
          <Radio.Option id="asd" value={"3"}>
            옵션3
          </Radio.Option>
        </Radio>
        <div className=" bg-gray-100 p-16">
          <Radio value={value} onChange={(e) => setValue(e.target.value)} variant={"primary"}>
            <Radio.Option id="hello" value={"123"}>
              옵션1
            </Radio.Option>
            <Radio.Option id="2worl" value={"234"}>
              옵션2
            </Radio.Option>
            <Radio.Option id="asd" value={"3"}>
              옵션3
            </Radio.Option>
          </Radio>
        </div>
      </div>
    );
  },
};
