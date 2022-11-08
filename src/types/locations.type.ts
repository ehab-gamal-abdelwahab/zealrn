export type Location = {
  id: string | '';
  lat: number | 0;
  lng: number | 0;
  userId: string | '';
};

export type Locations = Array<Location>;
