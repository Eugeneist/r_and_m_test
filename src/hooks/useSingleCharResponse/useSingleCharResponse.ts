import { useEffect, useState } from 'react';
import { axios } from '../../helpers';
import { AxiosResponse } from 'axios';

const useSingleCharResponse = (id: number) => {
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(true);

  const [charInfo, setCharInfo] = useState({});

  useEffect(() => {
    axios
      .get(`api/character/${id}`, {
        headers: { 'Access-Control-Allow-Origin': 'http://localhost:3000' },
      })
      .then((data: AxiosResponse) => {
        setCharInfo(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return { charInfo, error, isLoading };
};

export default useSingleCharResponse;
