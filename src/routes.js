import { Routes, Route } from 'react-router-dom';

import Dashboard from './pages/dashboard/Dashboard.jsx'
import Users from './pages/users/Users.jsx'

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
}