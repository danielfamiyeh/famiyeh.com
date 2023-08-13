export type FetchedData<T> = {
  fetched: boolean;
  error: null | string;
  data: T | Array<T>;
};
