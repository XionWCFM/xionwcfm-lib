export function round(value: number, precision = 0): number {
  if (!Number.isInteger(precision)) {
    throw new Error("Precision must be an integer.");
  }
  // biome-ignore lint/style/useExponentiationOperator: <explanation>
  const multiplier = Math.pow(10, precision);
  return Math.round(value * multiplier) / multiplier;
}
