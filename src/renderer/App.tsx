import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
// import Loading from "./components/loading";
import WindowControls from "./components/windowControls";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Hello = () => {
  return (
    <div>
      <WindowControls />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="header">
              login, logo, main navigation (Games, Shop, Mobile Apps)
            </div>
          </div>
        </div>
        {/* <Loading /> */}
        <div className="row">
          <div className="col-lg-2">
              <nav className="navbar navbar-expand-lg p-0">
                  <div className="justify-content-start">
                      <ul className="nav flex-column">
                          <li className="nav-item"><a href="#" className="pl-0 nav-link text-white d-block w-100 text-left">Marketplace</a></li>
                          <li className="nav-item"><a href="#" className="pl-0 nav-link text-secondary d-block w-100 text-left">Emails</a></li>
                          <li className="nav-item"><a href="#" className="pl-0 nav-link text-secondary d-block w-100 text-left">Subdomains</a></li>
                          <li className="nav-item"><a href="#" className="pl-0 nav-link text-secondary d-block w-100 text-left">Database</a></li>
                          <li className="nav-item"><a href="#" className="pl-0 nav-link text-secondary d-block w-100 text-left">FTP</a></li>
                          <li className="nav-item"><a href="#" className="pl-0 nav-link text-secondary d-block w-100 text-left">DNS</a></li>
                          <li className="nav-item"><a href="#" className="pl-0 nav-link text-secondary d-block w-100 text-left">Backup</a></li>
                          <li className="nav-item"><a href="#" className="pl-0 nav-link text-secondary d-block w-100 text-left">SSL</a></li>
                          <li className="nav-item"><a href="#" className="pl-0 nav-link text-secondary d-block w-100 text-left">Cron Jobs</a></li>
                          <li className="nav-item"><a href="#" className="pl-0 nav-link text-secondary d-block w-100 text-left">Logs</a></li>
                      </ul>
                  </div>
              </nav>
          </div>
          <div className="col-lg-10">
              <span className="text-light">test</span>
          </div>
        </div>
      </div>
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
