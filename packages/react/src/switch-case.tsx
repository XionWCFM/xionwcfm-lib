interface Props<Case extends string | number> {
  caseBy: Partial<Record<Case, JSX.Element | null>>;
  value: Case;
  defaultComponent?: JSX.Element | null;
}

export function SwitchCase<Case extends string | number>({
  value,
  caseBy,
  // biome-ignore lint/complexity/noUselessRename: <explanation>
  defaultComponent: defaultComponent = null,
}: Props<Case>) {
  if (value == null) {
    return defaultComponent;
  }

  return caseBy[value] ?? defaultComponent;
}
