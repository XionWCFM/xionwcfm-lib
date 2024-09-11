import { useEffect } from "react";

export type CreateNavigateRouterType = {
  push: (to: string) => void;
  replace: (to: string) => void;
};

export const createNavigate = (useInjectRouter: () => CreateNavigateRouterType) => {
  return function Navigate(props: { to: string; replace?: boolean }) {
    const { to, replace } = props;
    const router = useInjectRouter();

    useEffect(() => {
      if (replace) {
        router.replace(to);
      } else {
        router.push(to);
      }
    }, [router, to, replace]);

    return null;
  };
};
