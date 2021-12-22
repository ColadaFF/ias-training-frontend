import React from "react";

type UsePromiseResponse<T> = {
  isLoading: boolean;
  error: Error | undefined;
  data: T | undefined;
};

function usePromise<T>(
  promiseFactory: () => Promise<T>
): UsePromiseResponse<T> {
  const [isLoading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<Error>();
  const [data, setData] = React.useState<T>();

  React.useEffect(() => {
    promiseFactory()
      .then((jsonResponse) => setData(jsonResponse))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
    // eslint-disable-next-line
  }, []);

  return {
    isLoading,
    data,
    error,
  };
}

export default usePromise;
