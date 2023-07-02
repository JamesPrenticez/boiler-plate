export const isNullOrWhiteSpace = (input: string | null | undefined): boolean => {
  if (input === undefined) {
    return true;
  }
  if (input === null) {
    return true;
  }
  if (input === "") {
    return true;
  }
  return false;
};
