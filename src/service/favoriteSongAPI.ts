import { AlbumType } from '../types';

const FAVORITE_SONGS_KEY = 'favorite_songs';

if (!JSON.parse(localStorage.getItem(FAVORITE_SONGS_KEY))) {
  localStorage.setItem(FAVORITE_SONGS_KEY, JSON.stringify([]));
}

const readFavoriteSongs = () => JSON.parse(localStorage.getItem(FAVORITE_SONGS_KEY));

const saveFavoriteSongs = (favoriteSongs: AlbumType[]) => localStorage
  .setItem(FAVORITE_SONGS_KEY, JSON.stringify(favoriteSongs));

export function addSong(song: AlbumType) {
  if (song) {
    const favoriteSongs = readFavoriteSongs();

    saveFavoriteSongs([...favoriteSongs, song]);
  }
}

export function removeSong(trackId: number) {
  const favoriteSongs = readFavoriteSongs();
  saveFavoriteSongs(favoriteSongs.filter((s: AlbumType) => s.trackId !== trackId));
}

export function getFavoriteSongs() {
  const favoriteSongs = readFavoriteSongs();
  return favoriteSongs;
}

export default { addSong, removeSong };
