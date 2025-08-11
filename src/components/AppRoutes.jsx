import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import MainPage from '../pages/MainPage';
import CardDetailPage from '../pages/CardDetailPage';
import AddTaskPage from '../pages/AddTaskPage';
import ExitPage from '../pages/ExitPage';
import NotFoundPage from '../pages/NotFoundPage';
import { useState } from 'react';

const ProtectedRoute = ({ isAuth, children }) => {
  console.log('ProtectedRoute isAuth:', isAuth);
  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const PublicExitRoute = ({ isAuth, children, onLogout }) => {
  console.log('PublicExitRoute isAuth:', isAuth, 'onLogout defined:', !!onLogout);
  return children;
};

export default function AppRoutes() {
  const [isAuth, setIsAuth] = useState(false);

  const handleLogin = () => {
    setIsAuth(true);
    console.log('handleLogin executed, isAuth set to:', true);
  };

  const handleLogout = () => {
    setIsAuth(false);
    console.log('handleLogout executed, isAuth set to:', false);
  };

  return (
    <Routes>
      <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/"
        element={
          <ProtectedRoute isAuth={isAuth}>
            <MainPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/card/:id"
        element={
          <ProtectedRoute isAuth={isAuth}>
            <CardDetailPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/add-task"
        element={
          <ProtectedRoute isAuth={isAuth}>
            <AddTaskPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/exit"
        element={<PublicExitRoute isAuth={isAuth} onLogout={handleLogout}><ExitPage onLogout={handleLogout} /></PublicExitRoute>}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}