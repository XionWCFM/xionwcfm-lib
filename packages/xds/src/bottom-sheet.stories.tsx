import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { BottomSheet } from "./bottom-sheet";
import { Button } from "./button";
import { Input } from "./input";

const meta: Meta = {
  title: "Xds/BottomSheet",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
바텀시트는 화면 하단에서 올라오는 모달형 컴포넌트입니다.

상태 관리:
open: boolean - 바텀시트의 열림/닫힘 상태
onOpenChange: (open: boolean) => void - 바텀시트 상태 변경 시 호출되는 함수

주요 설정:
snapPoints: number[] - 바텀시트가 멈출 수 있는 높이 지점들을 지정 (0~1 사이의 값)
modal: boolean - 배경과의 상호작용 허용 여부
dismissible: boolean - 외부 클릭이나 드래그로 닫기 가능 여부
shouldScaleBackground: boolean - 배경 스케일 효과 적용 여부
`,
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const BasicBottomSheet: Story = {
  parameters: {
    docs: {
      description: {
        story: "가장 기본적인 바텀시트입니다. 단순한 내용을 표시하거나 간단한 작업을 수행할 때 사용됩니다.",
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <BottomSheet.Root open={open} onOpenChange={setOpen}>
        <BottomSheet.Trigger asChild>
          <Button>Open Bottom Sheet</Button>
        </BottomSheet.Trigger>
        <BottomSheet.Portal>
          <BottomSheet.Overlay />
          <BottomSheet.Content handle={<BottomSheet.Handle />}>
            <h2 className="text-lg font-semibold mb-4">Basic Bottom Sheet</h2>
            <p>This is a basic bottom sheet content.</p>
          </BottomSheet.Content>
        </BottomSheet.Portal>
      </BottomSheet.Root>
    );
  },
};

export const KeyboardAwareSheet: Story = {
  parameters: {
    docs: {
      description: {
        story: "모바일 환경에서 키보드가 올라올 때 바텀시트의 위치가 자동으로 조정됩니다.",
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <BottomSheet.Root open={open} onOpenChange={setOpen}>
        <BottomSheet.Trigger asChild>
          <Button>Form Sheet</Button>
        </BottomSheet.Trigger>
        <BottomSheet.Portal>
          <BottomSheet.Overlay />
          <BottomSheet.Content handle={<BottomSheet.Handle />}>
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">회원가입</h2>
              <form className="space-y-4">
                <Input placeholder="이메일" type="email" />
                <Input placeholder="비밀번호" type="password" />
                <Input placeholder="비밀번호 확인" type="password" />
                <Button className="w-full">가입하기</Button>
              </form>
            </div>
          </BottomSheet.Content>
        </BottomSheet.Portal>
      </BottomSheet.Root>
    );
  },
};
