type Listing = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  short_description: string;
  key: number;
};

type User = {
  user?: {
    id?: string;
    role?: string;
    email?: string;
  } | null;
};

export type { Listing, User };
