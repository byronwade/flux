import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const Hello = () => {
  return (
    <div>
      <div className="window-controls">
        <span className="minimize" id="minimize" />
        <span className="maximize" id="maximize" />
        <span className="close" id="close" />
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
