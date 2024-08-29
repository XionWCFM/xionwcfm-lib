const writeText = async (text: string) => {
  if (typeof window === "undefined") return false;
  if (typeof navigator === "undefined") return false;
  if (typeof navigator?.clipboard === "undefined") return false;
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (e) {
    return false;
  }
};

export const clipboard = {
  writeText,
};
