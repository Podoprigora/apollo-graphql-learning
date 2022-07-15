export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  pictureUrl: string;
}

export interface Pagination {
  page?: number | null;
  limit?: number | null;
}
