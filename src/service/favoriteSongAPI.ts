import { AlbumType } from '../types';

const FAVORITE_SONGS_KEY = 'favorite_songs';

function initializeLocalStorage() {
  const localData = localStorage.getItem(FAVORITE_SONGS_KEY);
  if (!localData) {
    localStorage.setItem(FAVORITE_SONGS_KEY, JSON.stringify([]));
  }
}

const readFavoriteSongs = (): AlbumType[] => {
  const localData = localStorage.getItem(FAVORITE_SONGS_KEY);
  return JSON.parse(localData || '[]');
};

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

export function getFavoriteSongs(): AlbumType[] {
  // const favoriteSongs = readFavoriteSongs();
  initializeLocalStorage();
  return readFavoriteSongs();
}

export default { addSong, removeSong };
