import { createRoot } from 'react-dom/client';
import { App } from './components';

const root = createRoot(
  document.getElementById('root') as HTMLDivElement,
).root.render(<App />);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );
