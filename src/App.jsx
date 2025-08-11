import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './components/Header/Header';
import AppRoutes from './components/AppRoutes';

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