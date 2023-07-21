import { AlbumType } from '../types';

const FAVORITE_SONGS_KEY = 'favorite_songs';

if (!JSON.parse(localStorage.getItem(FAVORITE_SONGS_KEY))) {
  localStorage.setItem(FAVORITE_SONGS_KEY, JSON.stringify([]));
}

const readFavoriteSongs = () => JSON.parse(localStorage.getItem(FAVORITE_SONGS_KEY));

const saveFavoriteSongs = (favoriteSongs: AlbumType[]) => localStorage
  .setItem(FAVORITE_SONGS_KEY, JSON.stringify(favoriteSongs));

export default function addSong(song: AlbumType) {
  if (song) {
    const favoriteSongs = readFavoriteSongs();

    saveFavoriteSongs([...favoriteSongs, song]);
  }
}
