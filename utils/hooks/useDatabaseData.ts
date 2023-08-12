import { FetchedData } from "@/type";
import { useEffect, useState } from "react";

export interface Args {
  key: string;
  getAction: Function;
}

/**
 * Fetches data from the database
 *
 * @param {Args} args Hook args
 * @returns {FetchedData<T>}
 */
export function useDatabaseData<T>({ key, getAction }: Args): FetchedData<T> {
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
