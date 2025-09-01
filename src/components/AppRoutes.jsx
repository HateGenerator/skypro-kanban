import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import MainPage from '../pages/MainPage';
import CardDetailPage from '../pages/CardDetailPage';
import AddTaskPage from '../pages/AddTaskPage';
import ExitPage from '../pages/ExitPage';
import NotFoundPage from '../pages/NotFoundPage';
import { useState, useEffect } from 'react';

const ProtectedRoute = ({ isAuth, children }) => {
  const location = useLocation();
  console.log('ProtectedRoute checked, isAuth:', isAuth, 'location:', location.pathname);

  useEffect(() => {
    console.log('ProtectedRoute useEffect, isAuth:', isAuth);
  }, [isAuth]); // Перерендеринг при изменении isAuth

  if (!isAuth) {
    console.log('Redirecting to /login from:', location.pathname);
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  console.log('Rendering protected content');
  return children;
};

export default function AppRoutes() {
  const [isAuth, setIsAuth] = useState(false);

  const handleLogin = () => {
    console.log('handleLogin called, setting isAuth to true');
    setIsAuth(true);
  };

  const handleLogout = () => {
    console.log('handleLogout called, setting isAuth to false');
    setIsAuth(false);
  };

  useEffect(() => {
    console.log('AppRoutes isAuth updated:', isAuth);
  }, [isAuth]); // Отслеживаем изменения isAuth на уровне AppRoutes

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
        element={<ExitPage onLogout={handleLogout} />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}