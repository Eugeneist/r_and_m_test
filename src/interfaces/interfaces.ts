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
}

export interface useAxiosResponseProps {
  state: iCharactersProps[];
  isLoading: boolean;
  error?: boolean;
  setLimit: any;
  limit: number;
}

export interface iCharCardProps {
  id?: number;
  image: string;
  name: string;
  species: string;
}
