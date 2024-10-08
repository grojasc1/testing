import { createRoot } from 'react-dom/client';
import Checkbox from './components/checkbox';
import Like from './components/Like';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Like />);