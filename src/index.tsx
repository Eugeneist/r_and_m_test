import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store/store';
import { ScrollToTop } from './components';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <GoogleOAuthProvider clientId="631191411907-h8h7vcg141d5j3jan153hic388a9h8g9.apps.googleusercontent.com">
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor} loading={null}>
          <ScrollToTop />
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </GoogleOAuthProvider>,
);
