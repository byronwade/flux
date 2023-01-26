import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

const Hello = () => {
  return (
    <div>
      <div className="window-controls">
        <span className="minimize" onClick={()=>{ window.electron.ipcRenderer.min(); }}  />
        <span className="maximize" onClick={()=>{ window.electron.ipcRenderer.max(); }} />
        <span className="close" onClick={()=>{ window.electron.ipcRenderer.close(); }}  />
      </div>
      <h1>hello</h1>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
