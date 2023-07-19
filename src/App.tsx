import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Search from './pages/search';
import Album from './pages/album';
import Favorites from './pages/favorites';
import Profile from './pages/profile';
import ProfileEdit from './pages/profile-edit';
import NotFound from './pages/not-found';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={ <Login /> }
      />
      <Route path="/search" element={ <Search /> } />
      <Route path="/album/:id" element={ <Album /> } />
      <Route path="/favorites" element={ <Favorites /> } />
      <Route path="/profile" element={ <Profile /> } />
      <Route path="/profile/edit" element={ <ProfileEdit /> } />
      <Route path="/*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
