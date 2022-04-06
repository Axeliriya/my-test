import { createRoot } from 'react-dom/client';
import { App } from './components';

const container: any = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );
