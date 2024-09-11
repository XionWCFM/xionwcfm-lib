import { Reducer, useReducer } from "react";

type ActionMap<H> = {
  [K in keyof H]: H[K] extends (state: any) => any
    ? { type: K }
    : H[K] extends (state: any, payload: infer P) => any
      ? { type: K; payload: P }
      : never;
};

type InferState<H> = H extends { [K in keyof H]: (state: infer S, ...args: any[]) => any } ? S : never;

type ActionUnion<H> = ActionMap<H>[keyof H];

export function createReducer<H extends Record<string, (state: any, ...args: any[]) => any>>(handlers: H) {
  type State = InferState<H>;
  type Action = ActionUnion<H>;

  const reducer: Reducer<State, Action> = (state, action) => {
    const handler = handlers[action.type as keyof H];
    if (handler) {
      return "payload" in action ? (handler as any)(state, action.payload) : (handler as any)(state);
    }
    return state;
  };
  return reducer;
}

type Todo = { checked: boolean };

const reducer = createReducer({
  addTodo: (state: Todo) => {
    return state;
  },
  removeTodo: (state: Todo, payload: string) => {
    return state;
  },
});
