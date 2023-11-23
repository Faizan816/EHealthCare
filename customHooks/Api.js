import axios from "axios";
import { useState } from "react";

export function apiHook() {
  const [data, setData] = useState(null);

  function getData(url) {
    axios.get(url).then((response) => {
      setData(response.data.movies);
    });
  }

  return { data, getData };
}
