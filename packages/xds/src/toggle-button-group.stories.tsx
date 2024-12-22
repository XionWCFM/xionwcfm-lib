import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ToggleButton } from "./toggle-button";
import { ToggleButtonGroup } from "./toggle-button-group";

const meta: Meta = {
  title: "Xds/ToggleButtonGroup",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

export const Default: StoryObj = {
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    return (
      <div>
        <ToggleButtonGroup value={value} onChange={(value) => setValue(value)}>
          <ToggleButton value={"1"} className=" bg-primary-100 data-[state=selected]:bg-primary-700">
            1
          </ToggleButton>
          <ToggleButton value={"2"} className=" bg-primary-100 data-[state=selected]:bg-primary-700">
            2
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    );
  },
};
