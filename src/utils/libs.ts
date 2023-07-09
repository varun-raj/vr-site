export const groupBy = (
  arr: Array<any>,
  key: string
): { [key: string]: object[] } =>
  arr.reduce((_previousValue: any, a: any) => {
    const currentKey = a[key];
    const previousValue = { ..._previousValue };
    previousValue[currentKey] = previousValue[currentKey] || [];
    previousValue[currentKey].push(a);
    return previousValue;
  }, Object.create(null));

export interface IGroupedItem {
  label: string;
  items: any[];
}

export const groupToArray = (
  arr: Array<any>,
  groupKey: string
): IGroupedItem[] => {
  const groupMap = groupBy(arr, groupKey);
  const keys = Object.keys(groupMap);
  if (!keys.length) return [];

  return keys.map((key: string) => ({
    label: key,
    items: groupMap[key] || [],
  }));
};
