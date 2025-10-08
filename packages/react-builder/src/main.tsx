import { createRoot } from 'react-dom/client'
import App from './App.tsx'

type Props = {
  containerId: string;
}

function render({ containerId }: Props) {
  const container = document.getElementById(containerId);
  if (!container) return;

  createRoot(container).render(<App/>);
}

// Export as default object for UMD build
export default { render };
