import { propertyParams } from "../../../../helpers/params";

export function getPropertyWithPriority(properties) {
  const sequenceMap = { true: 0, false: 1, null: "1" };
  const filterProperty = properties.sort((a, b) => {
    const first = propertyParams(a);
    const second = propertyParams(b);

    return sequenceMap[first.Priority] - sequenceMap[second.Priority];
  });
  return filterProperty;
}
