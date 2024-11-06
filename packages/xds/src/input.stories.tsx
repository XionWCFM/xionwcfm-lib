import { MagnifyingGlassIcon, QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Input } from "./input";
import { Button } from "./button";

const meta: Meta = {
  title: "Xds/Input",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Input은 사용자로부터 텍스트 입력을 받는 컴포넌트입니다.",
      },
    },
  },
  argTypes: {
    value: {
      description: '입력 필드의 값',
      type: { name: 'string' }
    },
    placeholder: {
      description: '입력 필드의 플레이스홀더',
      type: { name: 'string' }
    },
    disabled: {
      description: '입력 필드의 비활성화 상태',
      type: { name: 'boolean' }
    },
    type: {
      description: '입력 필드의 타입',
      control: 'select',
      options: ['text', 'password', 'email', 'number']
    }
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const BasicInput: Story = {
  parameters: {
    docs: {
      description: {
        story: "기본적인 입력 필드입니다. 단순한 텍스트 입력에 사용됩니다.",
      },
    },
  },
  render: () => (
    <div className="space-y-4 w-[300px]">
      <Input placeholder="이름을 입력하세요" />
      <Input placeholder="이메일을 입력하세요" type="email" />
      <Input placeholder="비밀번호를 입력하세요" type="password" />
    </div>
  ),
};

export const SearchInput: Story = {
  parameters: {
    docs: {
      description: {
        story: "검색 기능을 위한 입력 필드입니다. 검색 아이콘과 클리어 버튼을 포함합니다.",
      },
    },
  },
  render: () => {
    const [value, setValue] = useState('');
    
    return (
      <div className="w-[300px]">
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input 
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="검색어를 입력하세요"
            className="pl-10"
          />
          {value && (
            <button 
              onClick={() => setValue('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          )}
        </div>
      </div>
    );
  },
};

export const FormInput: Story = {
  parameters: {
    docs: {
      description: {
        story: "폼에서 사용되는 입력 필드입니다. 라벨과 에러 메시지를 포함할 수 있습니다.",
      },
    },
  },
  render: () => {
    const [values, setValues] = useState({
      username: '',
      email: '',
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const newErrors: Record<string, string> = {};
      
      if (!values.username) {
        newErrors.username = '사용자 이름을 입력해주세요.';
      }
      if (!values.email) {
        newErrors.email = '이메일을 입력해주세요.';
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        newErrors.email = '올바른 이메일 형식이 아닙니다.';
      }

      setErrors(newErrors);
      
      if (Object.keys(newErrors).length === 0) {
        alert('제출 성공!');
      }
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-4 w-[300px]">
        <div>
          <label className="block text-sm font-medium mb-1">사용자 이름</label>
          <Input
            value={values.username}
            onChange={(e) => setValues(prev => ({ ...prev, username: e.target.value }))}
            placeholder="사용자 이름"
            className={errors.username ? 'border-red-500' : ''}
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">{errors.username}</p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">이메일</label>
          <Input
            type="email"
            value={values.email}
            onChange={(e) => setValues(prev => ({ ...prev, email: e.target.value }))}
            placeholder="example@email.com"
            className={errors.email ? 'border-red-500' : ''}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <Button type="submit" className="w-full">
          제출
        </Button>
      </form>
    );
  },
};

export const DisabledInput: Story = {
  parameters: {
    docs: {
      description: {
        story: "비활성화된 입력 필드입니다. 수정할 수 없는 정보를 표시할 때 사용됩니다.",
      },
    },
  },
  render: () => (
    <div className="space-y-4 w-[300px]">
      <Input 
        value="읽기 전용 정보"
        disabled
      />
      <Input 
        value="시스템 생성 ID"
        disabled
        className="bg-gray-50"
      />
    </div>
  ),
};

export const PasswordInput: Story = {
  parameters: {
    docs: {
      description: {
        story: "비밀번호 입력 필드입니다. 비밀번호 표시/숨김 토글 기능을 포함합니다.",
      },
    },
  },
  render: () => {
    const [showPassword, setShowPassword] = useState(false);
    const [value, setValue] = useState('');

    return (
      <div className="w-[300px]">
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="비밀번호를 입력하세요"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? '숨기기' : '표시'}
          </button>
        </div>
      </div>
    );
  },
};
