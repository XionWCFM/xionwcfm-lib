import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "./button";
import { ConfirmDialog } from "./confirm-dialog";

const meta: Meta = {
  title: "Xds/ConfirmDialog",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "ConfirmDialog는 사용자의 액션을 한 번 더 확인하는 대화상자 컴포넌트입니다.",
      },
    },
  },
  argTypes: {
    isOpen: {
      description: "대화상자의 열림/닫힘 상태",
      type: { name: "boolean" },
    },
    onClose: {
      description: "대화상자를 닫을 때 호출되는 함수",
      type: { name: "function" },
    },
    title: {
      description: "대화상자의 제목",
      type: { name: "string" },
    },
    description: {
      description: "대화상자의 내용",
      type: { name: "string" },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const BasicConfirm: Story = {
  parameters: {
    docs: {
      description: {
        story: "기본적인 확인 대화상자입니다. 단순한 확인/취소 선택이 필요할 때 사용됩니다.",
      },
    },
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Delete Item</Button>
        <ConfirmDialog
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="항목 삭제"
          description="정말 이 항목을 삭제하시겠습니까?"
          primaryButton={
            <Button
              w="100%" // 여기에 추가
              variant="emphasis"
              size={"md"}
              onClick={() => {
                alert("항목이 삭제되었습니다.");
                setIsOpen(false);
              }}
            >
              삭제
            </Button>
          }
          secondaryButton={
            <Button
              w="100%" // 여기에 추가
              size={"md"}
              variant="ghost"
              onClick={() => setIsOpen(false)}
            >
              취소
            </Button>
          }
        />
      </div>
    );
  },
};

export const DangerousAction: Story = {
  parameters: {
    docs: {
      description: {
        story: "위험한 작업을 수행하기 전 확인하는 대화상자입니다. 되돌릴 수 없는 작업에 사용됩니다.",
      },
    },
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <Button variant="emphasis" onClick={() => setIsOpen(true)}>
          계정 삭제
        </Button>
        <ConfirmDialog
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="계정 영구 삭제"
          description={
            <div className="space-y-2">
              <p className="text-red-500 font-semibold">이 작업은 되돌릴 수 없습니다.</p>
              <p>계정을 삭제하면:</p>
              <ul className="list-disc pl-4 space-y-1">
                <li>모든 데이터가 영구적으로 삭제됩니다</li>
                <li>진행 중인 작업이 모두 취소됩니다</li>
                <li>구독이 즉시 해지됩니다</li>
              </ul>
            </div>
          }
          primaryButton={
            <Button
              size={"md"}
              variant="emphasis"
              onClick={() => {
                alert("계정이 삭제되었습니다.");
                setIsOpen(false);
              }}
              w="100%" // 여기에 추가
            >
              영구 삭제
            </Button>
          }
          secondaryButton={
            <Button
              size={"md"}
              variant="ghost"
              onClick={() => setIsOpen(false)}
              w="100%" // 여기에 추가
            >
              취소
            </Button>
          }
        />
      </div>
    );
  },
};

export const AsyncConfirm: Story = {
  parameters: {
    docs: {
      description: {
        story: "비동기 작업을 처리하는 대화상자입니다. 서버 통신이 필요한 작업에 사용됩니다.",
      },
    },
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleConfirm = async () => {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        alert("처리가 완료되었습니다.");
        setIsOpen(false);
      } catch (error) {
        alert("오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Process Data</Button>
        <ConfirmDialog
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="데이터 처리"
          description="대용량 데이터를 처리하시겠습니까?"
          primaryButton={
            <Button
              size={"md"}
              variant="emphasis"
              onClick={handleConfirm}
              loading={loading}
              w="100%" // 여기에 추가
            >
              {loading ? "처리 중..." : "처리하기"}
            </Button>
          }
          secondaryButton={
            <Button
              size={"md"}
              variant="ghost"
              onClick={() => setIsOpen(false)}
              disabled={loading}
              w="100%" // 여기에 추가
            >
              취소
            </Button>
          }
        />
      </div>
    );
  },
};
