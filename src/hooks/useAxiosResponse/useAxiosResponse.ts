import { useEffect, useState } from 'react';
import { axios } from '../../helpers';
import { AxiosResponse } from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addToChars } from '../../redux/actions/charsActions';
import { AppDispatch, RootState } from '../../redux/store/store';

const useAxiosResponse = () => {
  const dispatch = useDispatch<AppDispatch>();

  const state = useSelector((state: RootState) => state.charsReducers.results);
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(true);

  const [limit, setLimit] = useState(12);

  useEffect(() => {
    axios
      .get(`api/character?_limit=${limit}`)
      .then((data: AxiosResponse) => {
        dispatch(addToChars(data));
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch, limit]);

  return { state, error, isLoading, setLoading, limit, setLimit };
};

export default useAxiosResponse;
