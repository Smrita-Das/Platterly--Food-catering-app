import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Auth0Provider domain="dev-kwqiqy4yy7f3mcw3.us.auth0.com"
    clientId="6n0qKjc3ZEe4s35LtuyUM2x86881ouzD"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
           <App />
      </Auth0Provider>
       
    </StrictMode>
  </BrowserRouter>
);

