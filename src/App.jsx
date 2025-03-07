import Portfolio from './components/Portfolio';
import { ThemeContextProvider } from './context/ThemeContextProvider';

function App() {
  return (
    <ThemeContextProvider>
      <Portfolio />
    </ThemeContextProvider>
  )
}

export default App
