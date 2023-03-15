import { useEffect, useState } from 'react';
import { axios } from '../../helpers';
import { AxiosResponse } from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addToChars } from '../../redux/actions/charsActions';
import { AppDispatch, RootState } from '../../redux/store/store';

const useAxiosResponse = () => {
  const dispatch = useDispatch<AppDispatch>();

  const state = useSelector((state: RootState) =>
    state.charsReducers.filtered
      ? state.charsReducers.filtered
      : state.charsReducers.results,
  );
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(true);

  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`api/character?page=${page}`)
      .then((data: AxiosResponse) => {
        dispatch(addToChars(data));
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch, page]);

  return { state, error, isLoading, setLoading, page, setPage };
};

export default useAxiosResponse;
