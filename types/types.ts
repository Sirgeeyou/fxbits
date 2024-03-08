type Listing = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  short_description: string;
  key?: number;
};

type User = {
  user?: {
    id?: string;
    role?: string;
    email?: string;
  } | null;
};

export interface SearchParams {
  query?: string | null;
  type?: string | null;
}

export interface SearchParamsProps {
  searchParams: { [key: string]: string | undefined };
}
export interface FilterOptions {
  name: string;
  value: string;
}

export type { Listing, User };
