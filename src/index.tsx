import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store/store';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <GoogleOAuthProvider clientId="160002234747-jehgo89uv20dvmfv1ar7ft8aa1sd3o4v.apps.googleusercontent.com">
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor} loading={null}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </GoogleOAuthProvider>,
);
