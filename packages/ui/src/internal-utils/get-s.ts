import { VariantProps } from "class-variance-authority";
import { formatResponsiveEnum } from "./responsive-enum";
import { spacingVariants } from "./spacing-variants";
import type { CssSpacingElementType, CssSpacingGapType, ResponsiveEnum, ResponsiveEnumProps } from "./type";

export type SpacingSystemProps = Partial<Record<CssSpacingElementType, ResponsiveEnumProps<CssSpacingGapType>>>;

const formatSpacing = (
  item: ResponsiveEnumProps<CssSpacingGapType> | undefined,
  id: CssSpacingElementType,
): VariantProps<typeof spacingVariants> => {
  if (item === undefined) {
    return {};
  }
  const format = formatResponsiveEnum(item);
  return {
    initial: format.initial ? `${id}-${format.initial}` : undefined,
    xs: format.xs ? `${id}-${format.xs}` : undefined,
    md: format.md ? `${id}-${format.md}` : undefined,
    xl: format.xl ? `${id}-${format.xl}` : undefined,
  };
};

export const getS = (system: SpacingSystemProps) => {
  const { m, mb, mx, ml, my, mr, mt, p, pb, pl, pr, pt, px, py } = system;
  return `${spacingVariants(formatSpacing(m, "m"))} 
  ${spacingVariants(formatSpacing(my, "my"))} ${spacingVariants(formatSpacing(mx, "mx"))} 

  ${spacingVariants(formatSpacing(mb, "mb"))} ${spacingVariants(formatSpacing(ml, "ml"))} 
   ${spacingVariants(formatSpacing(mr, "mr"))} ${spacingVariants(formatSpacing(mt, "mt"))}

  ${spacingVariants(formatSpacing(p, "p"))} 
  ${spacingVariants(formatSpacing(py, "py"))} ${spacingVariants(formatSpacing(px, "px"))}
  
  ${spacingVariants(formatSpacing(pb, "pb"))} ${spacingVariants(formatSpacing(pl, "pl"))}
  ${spacingVariants(formatSpacing(pr, "pr"))} ${spacingVariants(formatSpacing(pt, "pt"))} 
  `;
};
