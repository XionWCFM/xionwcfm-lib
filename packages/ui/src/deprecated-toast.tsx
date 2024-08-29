"use client";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { FillCheckIcon } from "@xionwcfm/icon/fill-check-icon";
import { FillInfoIcon } from "@xionwcfm/icon/fill-info-icon";
import { FillWarningIcon } from "@xionwcfm/icon/fill-warning-icon";
import { Pubsub } from "@xionwcfm/pubsub";
import { type ReactNode, useEffect, useReducer } from "react";
import { Box } from "./box";
import { Paragraph } from "./paragraph";
import { SwitchCase } from "./switch-case";

const TOAST_TIMEOUT_DEFAULT = 1_500;

type ToastEvent = "add" | "delete" | "clear";
type ToastOption = "success" | "error" | "warning";
export type ToastType = {
  id: string;
  content: ReactNode;
  option: ToastOption;
  time: number;
};

type AddAction = {
  type: "add";
  payload: ToastType;
};

type DeleteAction = {
  type: "delete";
  payload: { id: string };
};

type ToastAction = AddAction | DeleteAction;

type ToastParamType = Partial<Pick<ToastType, "content" | "option" | "time">>;

type ToastOmitOptionType = Omit<ToastParamType, "option">;

const toastPubsub = new Pubsub<ToastEvent>();

export const toast = {
  show: (param: ToastParamType) => {
    toastPubsub.publish<ToastParamType>("add", param);
  },
  delete: (id: string) => {
    toastPubsub.publish<DeleteAction["payload"]>("delete", { id });
  },
  success: (param: ToastOmitOptionType) => {
    toastPubsub.publish<ToastParamType>("add", { ...param, option: "success" });
  },
  error: (param: ToastOmitOptionType) => {
    toastPubsub.publish<ToastParamType>("add", { ...param, option: "error" });
  },
  warning: (param: ToastOmitOptionType) => {
    toastPubsub.publish<ToastParamType>("add", { ...param, option: "warning" });
  },
};

const initialState: ToastType[] = [];

const reducer = (state: ToastType[], action: ToastAction): ToastType[] => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((toast) => toast.id !== action.payload.id);
    default:
      return state;
  }
};

const createRandomId = (prefix: string) => {
  return `${prefix}-${Math.random().toString(36).substring(7)}`;
};

export const Toaster = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const addHandler = async (toast: ToastParamType) => {
      const id = createRandomId("xionwcfm-toast");
      const title = toast.content ?? "";
      const option = toast.option ?? "success";
      const time = toast.time ?? 1500;
      dispatch({ type: "add", payload: { id, content: title, option, time } });
    };

    const deleteHandler = (id: ToastType["id"]) => {
      dispatch({ type: "delete", payload: { id } });
    };

    toastPubsub.subscribe("add", addHandler);
    toastPubsub.subscribe("delete", deleteHandler);
    return () => {
      toastPubsub.unsubscribe("add", addHandler);
      toastPubsub.unsubscribe("delete", deleteHandler);
    };
  }, []);

  return (
    <ToastPrimitives.Provider duration={TOAST_TIMEOUT_DEFAULT}>
      {state.map((toast) => {
        const { option } = toast;
        return (
          <ToastPrimitives.Root
            className={`
              group pointer-events-auto transition-all duration-200 flex justify-center gap-x-8 
              font-regular items-center bg-neutral-200 text-neutral-500 rounded-full w-[300px] min-h-[48px] py-8 px-16 
              data-[state=open]:animate-in  data-[state=open]:slide-in-from-top-full
              data-[state=closed]:animate-out  data-[state=closed]:fade-out-80
              `}
            key={toast.id}
            duration={toast.time}
          >
            <Box className="flex justify-center items-center translate-y-[1px]">
              <SwitchCase
                value={option}
                caseBy={{ success: <FillCheckIcon />, warning: <FillInfoIcon />, error: <FillWarningIcon /> }}
                defaultComponent={<FillCheckIcon />}
              />
            </Box>

            <ToastPrimitives.Title>
              <Paragraph overflow={"ellipsis"} className=" max-w-[270px]">
                {toast.content}
              </Paragraph>
            </ToastPrimitives.Title>
          </ToastPrimitives.Root>
        );
      })}
      <ToastPrimitives.Viewport className=" z-50 fixed top-[16px] left-[50%] translate-x-[-50%] flex flex-col gap-y-16" />
    </ToastPrimitives.Provider>
  );
};
