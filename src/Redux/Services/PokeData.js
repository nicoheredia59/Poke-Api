import axios from "axios";
import { useEffect, useState } from "react";

const useApi = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      for (let i = 0; i < res.data.results.length; i++) {
        axios.get(res.data.results[i].url).then((result) => {
          setData((prevArray) => [...prevArray, result.data]);
        });
      }
    });
  }, [url]);
  return { data };
};

export { useApi };
