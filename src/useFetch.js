import {useState, useEffect} from "react";
import axios from "axios";

const apiUrl = "https://jsonplaceholder.typicode.com";

export const useFetch = (resource) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await axios.get(apiUrl + "/" + resource);
      const json = await response.json();
      setIsLoading(false);
      setData(json);
    }
    getData();
  }, [resource]) // called when the component is mounted 

  return [data, {isLoading}];
}
