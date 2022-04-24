import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ErrorBoundary from 'errorBoundary';
import App from './App';
import appStore, { persistor } from './store';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <StrictMode>
    <ErrorBoundary>
      <StoreProvider store={appStore}>
        <PersistGate persistor={persistor}>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </PersistGate>
      </StoreProvider>
    </ErrorBoundary>
  </StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
