import { createRoot } from 'react-dom/client';
import { App } from './components';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );
