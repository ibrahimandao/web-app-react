import React  from 'react';
import './App.css';
import Etudiant from './components/Etudiant';
import {Route,Link,Routes,BrowserRouter as Router} from 'react-router-dom'
import Formation from './components/Formation';
import Formateur from './components/Formateur';
import Module from './components/Module';
import Planning from './components/Planning';
import AjoutEtudiant from './components/AjoutEtudiant';

function App() {
  return (
    <div className='m-5'>
    <Router>
      <nav className="navbar navbar-expand navbar-brand">
        <ul className="navbar-nav">
          <li><Link  className="nav-link" to="/etudiant">Etudiant</Link></li>
          <li><Link  className="nav-link" to="/formation">Formation</Link></li>
          <li><Link  className="nav-link" to="/formateur">Formateur</Link></li>
          <li><Link  className="nav-link" to="/module">Module</Link></li>
          <li><Link  className="nav-link" to="/planning">Planning cours</Link></li>
        </ul>     
      </nav>
   
    <div className="container">        
          <Routes>
              <Route path="/etudiant" element={ <Etudiant />}/>
              <Route path="/formation" element={ <Formation />}/>
              <Route path="/formateur" element={ <Formateur />}/>
              <Route path="/module" element={ <Module />}/>
              <Route path="/planning" element={ <Planning />}/>

              <Route path="/AjoutEtudiant" element={ <AjoutEtudiant />}/>
              <Route path="/ModifEtudiant/:id" element={ <AjoutEtudiant />}/>
          </Routes>     
    </div>
    </Router>
    </div>
    
  );
}

export default App;
