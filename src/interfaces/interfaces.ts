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

export interface iModal {
  children: React.ReactNode;
}

export interface iCredential {
  clientId: string;
  credential: string;
  select_by: string;
}

export interface iLogin {
  aud: string;
  azp: string;
  email: string;
  email_verified: boolean;
  exp: number;
  given_name: string;
  iat: number;
  iss: string;
  jti: string;
  name: string;
  nbf: number;
  picture: string;
  sub: string;
}
