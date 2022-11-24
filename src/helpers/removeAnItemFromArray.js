export default function removeAnItemFromArray(item, array) {
  const firstSlice = array.slice(0, array.indexOf(item));

  const secondSlice = array.slice(array.indexOf(item) + 1);
  return [...firstSlice, ...secondSlice];
}
