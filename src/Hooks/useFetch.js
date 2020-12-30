import React, {useCallback} from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = useCallback(async (url, options) => {
    let response;
    let json;

    try {
        setError(null);
        setLoading(true);
        response = await fetch(url, options);
        json = response.json();
        if(response.ok === false) throw new Error(json.message);
    } catch (err) {
        setError(err.message);
    } finally {
        setLoading(false);
    }
  }, []);

  return {
    data, 
    loading, 
    error,
    request
  };
};

export default useFetch;
