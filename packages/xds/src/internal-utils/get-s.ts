import { formatClass } from "./format-class";
import type { CssSpacingElementType, CssSpacingGapType, ResponsiveEnumProps } from "./type";

export type SpacingSystemProps = Partial<Record<CssSpacingElementType, ResponsiveEnumProps<CssSpacingGapType>>>;

export const getS = (system: SpacingSystemProps) => {
  const { m, mb, mx, ml, my, mr, mt, p, pb, pl, pr, pt, px, py } = system;

  const classes = [
    formatClass(m, "m"),
    formatClass(my, "my"),
    formatClass(mx, "mx"),
    formatClass(mb, "mb"),
    formatClass(ml, "ml"),
    formatClass(mr, "mr"),
    formatClass(mt, "mt"),
    formatClass(p, "p"),
    formatClass(py, "py"),
    formatClass(px, "px"),
    formatClass(pb, "pb"),
    formatClass(pl, "pl"),
    formatClass(pr, "pr"),
    formatClass(pt, "pt"),
  ];

  // 공백을 기준으로 클래스들을 결합
  return classes.filter(Boolean).join(" ");
};
