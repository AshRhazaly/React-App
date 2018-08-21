export default function convertToPercentage(number, precision) {
  return `${(number * 100).toFixed(precision)}%`;
}
