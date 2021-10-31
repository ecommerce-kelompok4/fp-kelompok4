import './App.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = `Toko Jaya`
  })

  return (
    <div className="App">
    </div>
  );
}

export default App;