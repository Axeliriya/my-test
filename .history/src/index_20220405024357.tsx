import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
import { App } from './components';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
