import { useEffect, useState } from 'react';
import { axios } from '../../helpers';
import { AxiosResponse } from 'axios';
import { iCharOrigin } from '../../interfaces/interfaces';

const useCharOrigin = (link: string) => {
  const [charOrigin, setCharOrigin] = useState<iCharOrigin>({});

  const getDirect = (link: string): string => {
    let substr = 'https://rickandmortyapi.com/';
    return link.replace(substr + '', '');
  };

  useEffect(() => {
    axios.get(getDirect(link)).then((data: AxiosResponse & iCharOrigin) => {
      setCharOrigin(data);
    });
  }, [link]);

  let locName = charOrigin?.name;

  return { locName, charOrigin };
};

export default useCharOrigin;
