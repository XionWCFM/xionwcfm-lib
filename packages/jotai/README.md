![jotai thumbnail](./jotai-thumb.webp)

# @xionwcfm/jotai

`@xionwcfm/jotai` is a small `12.2kb` library that wraps jotai. check the [@xionwcfm/jotai npm](https://www.npmjs.com/package/@xionwcfm/jotai)


## Why need to use?

`@xionwcfm/jotai` was created with the purpose of taking advantage of both jotai and context API.

For example, jotai's Provider forces you to choose between using all atoms globally or using all atoms locally.

However, we want to use very small parts of our service (authentication, user themes) globally, while restricting the state locally for most of the business logic.

`@xionwcfm/jotai` provides a solution to securely manage atoms locally while maintaining access to global atoms.


## Peer Dependencies

```
"react": ">=18",
"react-dom": ">=18",
"jotai": ">=2"
```



## installation

`@xionwcfm/jotai` requires jotai as a peer dependency


```
pnpm i jotai @xionwcfm/jotai
```

```
npm i jotai @xionwcfm/jotai
```

```
yarn add jotai @xionwcfm/jotai
```


## Quick Start

### Installation

First we proceed with the installation

```
pnpm i jotai @xionwcfm/jotai
```

### use createSafeAtom

```tsx
import {createSafeAtom} from '@xionwcfm/jotai'
import {atom} from 'jotai'

export const myFirstStore = createSafeAtom(atom("hello world!"))
```

### Wrapped Context

```tsx
export const MyPage = () => {
    return (
        <myFirstStore.Provider>
            <MyComponent>
        </myFirstStore.Provider>
    )
}
```

### use atom

```tsx

export const MyComponent = () => {
    const [value,setValue] = myFirstStore.useAtom()
    // hello world!
    return <div>{value}</div>
}

```


That's it

## Why should I use @xionwcfm/jotai instead of Context API?

Consumers of the Context API do not operate properly in an environment where a provider is not provided.

This is the antithesis of the ugly design of global state management libraries.

When using a global state management library, it is easy to forget where and how the state is changed and how modifying the code that uses the state will affect it.

<br/>

However, since the Context API is not a state management tool, a lot of effort is needed to optimize rendering and long boilerplate code is written.

Should I add a potential cancer to my code base in exchange for the performance and concise syntax I get with `Jotai`?

Should you sacrifice performance and accept lengthy boilerplate instead of simplifying your design with the `Context API`?

<br/>

**However, by using `@xionwcfm/jotai,` you can achieve concise syntax and rendering optimization through jotai, while also increasing code cohesion, which is an advantage of the Context API.**


## Next.js App Router Usage


If you are using the next.js app router you can see: 

`Unsupported server component type: undefined`

This error occurs due to the way the server component operates.

In this case, you can bypass it by defining the component once more in the file declared as 'use client' as follows.

This is inelegant, but it was a limitation of the implementation.

```tsx
'use client'
export const appRouterStore = createSafeAtom(appRouterAtom);

export const AppRouterContextProvider = ({ children }: PropsWithChildren) => {
  return <appRouterStore.Provider>{children}</appRouterStore.Provider>;
};

```

## API

### createSafeAtom

This is a simplified interface for easier understanding.

```tsx

type CreateSafeAtomReturnType<Value> = {
    Provider: (props:{children:ReactNode; value?:Value}) => ReactNode
    with: <T>(Component:FunctionComponent<T> , options?:AtomOptionType ) => (props:T) => ReactNode
    useAtom?:() => readonly [Value, SetAtom<Value>] // Not provided if readonlyAtom is provided as an argument
    useSetAtom?: () => SetAtom<Value> // Not provided if readonlyAtom is provided as an argument
    useAtomValue: () => Value
}
```

**Provider**

You can pass children and atom. If no value is passed, the atom passed to the first argument of createSafeAtom is used as the value.

**with**

A hoc function that returns a component wrapped in Provider. Like Provider, you can pass another atom through the second optional argument options.


**useAtom**

Same as jotai's useAtom. If used in an environment where context is not provided, an error will be returned. You do not need to pass an atom as an argument.

Not provided if a readonly Atom is provided to createSafeAtom.

**useSetAtom**

Same as jotai's useSetAtom. If used in an environment where context is not provided, an error will be returned. You do not need to pass an atom as an argument.

Not provided if a readonly Atom is provided to createSafeAtom.


**useAtomValue**

Same as jotai's useAtomValue. If used in an environment where context is not provided, an error will be returned. You do not need to pass an atom as an argument.


## Advanced Usage

### create Reusable Atom

```tsx
    const createResuableAtom = (initialState?: string) => atom(initialState ?? "");

    const reusableStore = createSafeAtom(createResuableAtom());

    const ReusableContextProvider = ({ children, initial }: PropsWithChildren<{ initial: string }>) => {
      const [value] = useState(() => createResuableAtom(initial));
      return <reusableStore.Provider value={value}>{children}</reusableStore.Provider>;
    };

    const ReusableConsumer = () => {
      const [state, setState] = reusableStore.useAtom();
      return <div>{state}</div>;
    };

    
      <>
        <ReusableContextProvider initial="hello">
          <ReusableConsumer />
        </ReusableContextProvider>
        <ReusableContextProvider initial="world">
          <ReusableConsumer />
        </ReusableContextProvider>
      </>,
```

By changing the atoms you pass, you can implement reusable local state.


### with TypeScript

```tsx
const typeStore = createSafeAtom(atom<"dark" | "light">('dark'))
```

Enhance the type by setting the generic of atom


Known issue: You should not rely on generic argument inference for correct type inference. Please explicitly inject the type into the atom.

This is a feature of jotai.

## with readonlyAtom

```tsx
const readonlyStore = createSafeAtom(atom(() => 'hello'))
// error
readonlyStore.useAtom()

// error
readonlyStore.useSetAtom()

// success
readonlyStore.useAtomValue()
```

If readonlyAtom is passed as an argument, useAtom and useSetAtom cannot be used.

## with asyncAtom

```tsx
const asyncAtomStore = createSafeAtom(atom(async () => "hello"));
const AsyncConsumer = () => {
  const state = asyncAtomStore.useAtomValue();
  return <div>{state}</div>;
};

<asyncAtomStore.Provider>
  <AsyncConsumer />
</asyncAtomStore.Provider>,
```

Same as jotai's implementation, asyncAtom triggers suspense.


## with anotherAtom

```tsx
const localStorageAtomStore = createSafeAtom(atomWithStorage('localstorage_key' , 'hello'))
```

It doesn't matter which atom you use. Just pass the atom as an argument.


## Maintainers

[@XionWCFM](https://github.com/XionWCFM)

## License

MIT