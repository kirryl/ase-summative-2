import { useState } from "react";
import axios from "axios";

const baseURL = "https://restcountries.com/v3.1";

export default function useLoadCountries() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getCountries = () => {
    setLoading(true);
    axios
      .get(baseURL + "/all")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((er) => {
        setError(er);
        setLoading(false);
      });
  };
  return { data, loading, error, getCountries };
}
