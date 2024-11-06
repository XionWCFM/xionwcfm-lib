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

export const SnapPointsBottomSheet: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "snapPoints를 사용하여 바텀시트가 특정 높이에서 멈추도록 설정할 수 있습니다. 각 스냅 포인트는 화면 높이의 비율(0~1)로 지정됩니다.",
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <BottomSheet.Root open={open} onOpenChange={setOpen} snapPoints={[0.4, 0.6, 0.9]} shouldScaleBackground>
        <BottomSheet.Trigger asChild>
          <Button>Snap Points Sheet</Button>
        </BottomSheet.Trigger>
        <BottomSheet.Portal>
          <BottomSheet.Overlay />
          <BottomSheet.Content handle={<BottomSheet.Handle />}>
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">스냅 포인트가 있는 바텀시트</h2>
              <p>드래그하여 다음 높이로 조절해보세요:</p>
              <ul className="list-disc pl-4">
                <li>40% - 미리보기</li>
                <li>60% - 상세 내용</li>
                <li>90% - 전체 보기</li>
              </ul>
            </div>
          </BottomSheet.Content>
        </BottomSheet.Portal>
      </BottomSheet.Root>
    );
  },
};

export const NonModalBottomSheet: Story = {
  parameters: {
    docs: {
      description: {
        story: "modal={false}로 설정하여 바텀시트가 열려있을 때도 배경과 상호작용할 수 있습니다.",
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div className="space-y-4">
        <Button onClick={() => console.log("Background button clicked!")}>배경의 버튼도 클릭 가능합니다</Button>

        <BottomSheet.Root open={open} onOpenChange={setOpen} modal={false} snapPoints={[0.4]}>
          <BottomSheet.Trigger asChild>
            <Button>Non-Modal Sheet</Button>
          </BottomSheet.Trigger>
          <BottomSheet.Portal>
            <BottomSheet.Overlay className="bg-transparent" />
            <BottomSheet.Content handle={<BottomSheet.Handle />}>
              <div className="space-y-4">
                <h2 className="text-lg font-semibold">배경 상호작용 가능</h2>
                <p>이 바텀시트가 열려있어도 배경의 요소들과 상호작용할 수 있습니다.</p>
              </div>
            </BottomSheet.Content>
          </BottomSheet.Portal>
        </BottomSheet.Root>
      </div>
    );
  },
};

export const HandleOnlySheet: Story = {
  parameters: {
    docs: {
      description: {
        story: "핸들만 사용하여 간단한 바텀시트를 구현할 수 있습니다. 최소한의 UI가 필요한 경우에 유용합니다.",
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <BottomSheet.Root open={open} onOpenChange={setOpen}>
        <BottomSheet.Trigger asChild>
          <Button>Handle Only Sheet</Button>
        </BottomSheet.Trigger>
        <BottomSheet.Portal>
          <BottomSheet.Overlay />
          <BottomSheet.Content>
            <BottomSheet.Handle className="absolute left-1/2 -translate-x-1/2" />
            <div className="pt-8 space-y-4">
              <h2 className="text-lg font-semibold">Simple Sheet</h2>
              <p>핸들만 있는 심플한 바텀시트입니다.</p>
            </div>
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

export const NonDismissibleSheet: Story = {
  parameters: {
    docs: {
      description: {
        story: "dismissible={false}로 설정하여 외부 클릭이나 드래그로 닫을 수 없는 바텀시트를 만들 수 있습니다.",
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <BottomSheet.Root open={open} onOpenChange={setOpen} dismissible={false}>
        <BottomSheet.Trigger asChild>
          <Button>Non-Dismissible Sheet</Button>
        </BottomSheet.Trigger>
        <BottomSheet.Portal>
          <BottomSheet.Overlay />
          <BottomSheet.Content handle={<BottomSheet.Handle />}>
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">중요 알림</h2>
              <p>이 바텀시트는 확인 버튼을 눌러야만 닫을 수 있습니다.</p>
              <Button className="w-full" onClick={() => setOpen(false)}>
                확인했습니다
              </Button>
            </div>
          </BottomSheet.Content>
        </BottomSheet.Portal>
      </BottomSheet.Root>
    );
  },
};
