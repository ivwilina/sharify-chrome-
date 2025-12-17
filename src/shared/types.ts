interface User {
  id: string;
  name: string;
}

interface ShareDetail {
  participant: User;
  bill: number;
}

interface Meal {
  id: string;
  date: string;
  menu: string;
  mortgagee: User;
  participants: User[];
  total: number;
  is_even_share: boolean;
  details: ShareDetail[];
}

export type {User, Meal, ShareDetail}
