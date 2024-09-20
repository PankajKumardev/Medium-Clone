import { BrowserRouter, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Blog from './pages/Blog';
import Blogs from './pages/Blogs';
import Publish from './pages/Publish';

const isAuthenticated = (): boolean => {
  const token = localStorage.getItem("token");
  return !!token;
};


const ProtectedRoute = () => {
  if (!isAuthenticated()) {
    return <Navigate to="/signin" replace />;
  }

  return <Outlet />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/Blog/:id" element={<Blog />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/publish" element={<Publish />} />
        </Route>

        <Route path="*" element={<Navigate to="/signin" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
