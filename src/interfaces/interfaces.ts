export interface iCharactersProps {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: object;
  location: object;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface iAxiosResponse {
  info: object;
  results: iCharactersProps[];
  filtered?: iCharactersProps[];
}

export interface useAxiosResponseProps {
  state: iCharactersProps[];
  isLoading: boolean;
  error?: boolean;
  setPage: any;
  page: number;
}

export interface iCharCardProps {
  id?: number;
  image: string;
  name: string;
  species: string;
}

export interface iCharMoreProps {
  id: number;
}

export interface iInfoStringProps {
  title?: string;
  value: string;
}

export interface iOrigin {
  name: string;
  url: string;
}

export interface Character {
  id?: number;
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: iOrigin;
  location?: object;
  image?: string;
  episode?: string[];
  url?: string;
  created?: string;
}

export interface iSingleCharResponse {
  charInfo: Character;
  error?: boolean;
  isLoading?: boolean;
}

export interface iButton {
  children: React.ReactNode;
}

export interface iCharOrigin {
  id?: number;
  name?: string;
  type?: string;
  dimension?: string;
  residents?: string[];
  url?: string;
  created?: string;
}

export interface iCharOriginResponse {
  locName?: string;
  charOrigin?: iCharOrigin;
}
