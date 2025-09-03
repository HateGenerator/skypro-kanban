import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import AppRoutes from './components/AppRoutes';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;