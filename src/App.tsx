import { Routes, Route } from 'react-router-dom';
import { MainPage, CharPage, NotFound } from './pages';
import { Header } from './components';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/character/:id" element={<CharPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
