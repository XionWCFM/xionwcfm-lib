import { useState } from "react";

const generateId = (id: string) => `${id}-${Math.random().toString(36).substring(2, 9)}`;

export const useUniqueId = (id = "prefix-xds-design-system") => {
  const [uniqueId] = useState(() => generateId(id));
  return uniqueId;
};
