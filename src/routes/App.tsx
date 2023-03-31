import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignIn from "../pages/SignIn"
import Header from '../components/Navbar/Header';
import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'

import RequireAuth from './RequireAuth'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/login" element={<SignIn />} />
        <Route element={<Header />}>
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;