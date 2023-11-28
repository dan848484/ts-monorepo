export const permutation = <T>(
  options: T[],
  k: number,
  selected: T[] = []
): T[][] => {
  if (selected.length === k) {
    return [selected];
  }
  let result = [];
  for (let i = 0; i < options.length; i++) {
    const filteredOptions = options.filter((_, j) => i !== j);
    const selection = [...selected, options[i]];
    result = result.concat(permutation(filteredOptions, k, selection));
  }
  return result;
};
