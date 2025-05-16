
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Improved initialization with error handling
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find the root element");
}

const root = createRoot(rootElement);
root.render(<App />);
