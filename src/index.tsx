import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SnackbarProvider } from 'notistack';
import ErrorBoundary from 'errorBoundary';
import App from './App';
import appStore, { persistor } from './store';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <StrictMode>
    <ErrorBoundary>
      <StoreProvider store={appStore}>
        <PersistGate persistor={persistor}>
          <SnackbarProvider maxSnack={5} autoHideDuration={5000}>
            <HelmetProvider>
              <App />
            </HelmetProvider>
          </SnackbarProvider>
        </PersistGate>
      </StoreProvider>
    </ErrorBoundary>
  </StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
