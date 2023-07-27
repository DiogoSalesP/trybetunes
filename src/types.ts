export const INITIAL_STATE = {
  name: '',
  email: '',
  description: '',
  image: '',
};

export type CreateUserType = {
  name: string
  email: string
  description: string
  image: string
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

export type CollectionType = {
  artistId : number
  artistName : string
  artistViewUrl : string
  artworkUrl60 : string
  artworkUrl100 : string
  collectionCensoredName : string
  collectionExplicitness : string
  collectionId : number
  collectionName : string
  collectionPrice : number
  collectionType : string
  collectionViewUrl : string
  contentAdvisoryRating : string
  copyright : string
  country : string
  currency : string
  primaryGenreName : string
  releaseDate : string
  trackCount : number
  wrapperType : string
};

export type AlbumType = {
  0: AlbumType
  artistId : number
  artistName : string
  artistViewUrl : string
  artworkUrl30 : string
  artworkUrl60 : string
  artworkUrl100 : string
  collectionCensoredName : string
  collectionExplicitness : string
  collectionId : number
  collectionName : string
  collectionPrice : number
  collectionViewUrl : string
  country : string
  currency : string
  discCount : number
  discNumber : number
  isStreamable : boolean
  kind : string
  previewUrl : string
  primaryGenreName : string
  releaseDate : string
  trackCensoredName : string
  trackCount : number
  trackExplicitness : string
  trackId : number
  trackName : string
  trackNumber : number
  trackPrice : number
  trackTimeMillis : number
  trackViewUrl : string
  wrapperType : string
};
