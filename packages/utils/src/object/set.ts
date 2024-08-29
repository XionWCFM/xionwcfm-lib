export const set = (obj: Record<string, any>, path: string, value: any) => {
  // Regex explained: https://regexr.com/58j0k
  const pathArray = path.match(/([^[.\]])+/g);

  pathArray?.reduce((acc, key, i) => {
    if (acc[key] == null) {
      acc[key] = {};
    }
    if (i === pathArray.length - 1) {
      acc[key] = value;
    }
    return acc[key];
  }, obj);

  return obj;
};
