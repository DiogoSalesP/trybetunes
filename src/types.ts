export const INITIAL_STATE = {
  name: '',
};

export type CreateUserType = {
  name: string
};

export type AlbumsType = {
  artistId: number
  artistName: string
  collectionId: number
  collectionName: string
  collectionPrice: number
  artworkUrl100: string
  releaseDate: string
  trackCount: number
};
