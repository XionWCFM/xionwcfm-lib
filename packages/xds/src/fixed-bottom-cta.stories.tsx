import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { FixedBottom } from "./fixed-bottom";
import { FixedBottomCta } from "./fixed-bottom-cta";
import { MobileViewLayout } from "./mobile-view-layout";
import { Paragraph } from "./paragraph";

const meta: Meta<typeof FixedBottomCta> = {
  title: "Xds/FixedBottomCta",
  component: FixedBottomCta,
  tags: ["autodocs"],
} satisfies Meta<typeof FixedBottomCta>;

export default meta;

type Story = StoryObj<typeof FixedBottomCta>;

export const FixedBottomCtaStories: Story = {
  args: {},
  decorators: [
    () => {
      const [loading, transitionStart] = useState(false);

      return (
        <MobileViewLayout>
          <Paragraph>FixedBottom과 함께 사용하는 CTA 버튼입니다.</Paragraph>
          <FixedBottom>
            <FixedBottomCta
              loading={loading}
              onClick={async () => {
                transitionStart(true);
                await new Promise((res) => setTimeout(res, 2000));
                transitionStart(false);
              }}
            >
              다음으로
            </FixedBottomCta>
          </FixedBottom>
        </MobileViewLayout>
      );
    },
  ],
};
