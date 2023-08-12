import { FetchedData } from "@/type";
import { useEffect, useState } from "react";

export interface Args {
  key: string;
  getAction: Function;
}

export function useDatabaseData<T>({ key, getAction }: Args) {
  const [data, setData] = useState<FetchedData<T>>({
    fetched: false,
    error: null,
    data: [],
  });

  useEffect(() => {
    const init = async () => {
      try {
        const res = await getAction();
        setData({ ...data, fetched: true, data: res[key] });
      } catch (error: any) {
        setData({ ...data, error: error.message, fetched: true });
      }
    };

    init();
  }, []);

  return data;
}
